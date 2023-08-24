import React, { useState } from 'react'
import { ILandfieldPolygonData } from 'model/dtos/Landfield'
import { Polygon, Tooltip } from 'react-leaflet'
import {
  generateColor,
  parseBoundariesToLeafletCoordinates,
  TOOLTIP_PLACEHOLDER_STRING,
} from '../../utils/utils'

interface Props {
  landFieldData: ILandfieldPolygonData,
  borderColor?: string,
  tooltipId?: string,
}

const LandField = ({
  landFieldData,
  borderColor,
  tooltipId,
}: Props) => {
  const [generatedColor] = useState(generateColor())
  const selectedBorderColor = borderColor || generatedColor
  const TOOLTIP_ID = tooltipId || `polygon-tooltip-${landFieldData.key}`

  const handleMouseMove = (event: L.LeafletMouseEvent) => {
    if (landFieldData.tooltip) {
      if (landFieldData.tooltip.getDataFromServer) {
        landFieldData.tooltip.getDataFromServerFunction && landFieldData.tooltip.getDataFromServerFunction(event)
      } else if (landFieldData.tooltip.getData) {
        const element = document.getElementById(TOOLTIP_ID)
        const response = landFieldData.tooltip.getData()
        const tooltipNewText = response || TOOLTIP_PLACEHOLDER_STRING

        if (element) {
          element.innerHTML = tooltipNewText
        }
      }
    }
  }

  return (
    <>
      <Polygon
        color={selectedBorderColor}
        opacity={1}
        fillOpacity={0}
        positions={parseBoundariesToLeafletCoordinates(landFieldData.outerBoundaryIs)}
        eventHandlers={{
          mousemove: ev => { handleMouseMove(ev) }
        }}
      >
        {landFieldData.tooltip && (
          <Tooltip direction='top' opacity={1} sticky={landFieldData.tooltip.sticky}>
            <div style={{ minHeight: '12px', minWidth: '12px' }} id={TOOLTIP_ID} />
          </Tooltip>
        )}
      </Polygon>
      {landFieldData.innerBoundaryIs && landFieldData.innerBoundaryIs.length > 0 && (
        <Polygon
          color={selectedBorderColor}
          opacity={1}
          fillOpacity={0}
          positions={parseBoundariesToLeafletCoordinates(landFieldData.innerBoundaryIs)}
        />
      )}
    </>
  )
}

export default LandField
