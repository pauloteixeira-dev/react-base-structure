import React from 'react'
import { ILandfieldPolygonData, ILandfieldTileData } from 'model/dtos/Landfield'
import { GATEWAY_SERVER_URL } from 'constants/envConfig'
import useGeoServer from 'hooks/api/useGeoServer'
import { parseParamsToCqlFilter } from 'utils/geoServerUtils'
import { CqlFilterOptions, TCqlFilterParam } from 'model/dtos/GeoServer'
import LandField from '../LandField'
import { TOOLTIP_PLACEHOLDER_STRING } from '../../utils/utils'

interface Props {
  tileData: ILandfieldTileData,
  elementMapId: string,
}

const LandFieldTileLayer = ({
  tileData, elementMapId,
}: Props) => {
  const { getDestinationFeeByBBox } = useGeoServer()

  const borderColor = '#FFFFFF'
  const TOOLTIP_ID = `tile-tooltip-${tileData.key}`

  const cqlParams: TCqlFilterParam[] = [
    {
      name: CqlFilterOptions.land_field_id,
      value: tileData.landfieldId.toString(),
      syntaxMethod: 'EQUALS_TO',
    },
    {
      name: CqlFilterOptions.element_map_id,
      value: elementMapId,
      syntaxMethod: 'EQUALS_TO',
    }
  ]
  const cqlFilter = parseParamsToCqlFilter(cqlParams)

  const wmsTileLayerUrl = new URL(`${GATEWAY_SERVER_URL}/geoservice/wms`)
  cqlFilter && wmsTileLayerUrl.searchParams.append('CQL_FILTER', cqlFilter)

  const getData = (event: L.LeafletMouseEvent) => {
    const element = document.getElementById(TOOLTIP_ID)
    const bBoxVal = event.latlng.toBounds(1).toBBoxString()

    const cb = (response?: string) => {
      const tooltipNewText = response || TOOLTIP_PLACEHOLDER_STRING
      if (element) {
        element.innerHTML = tooltipNewText
      }
    }

    getDestinationFeeByBBox({
      bBox: bBoxVal,
      elementMapId,
      landfieldId: tileData.landfieldId,
      callback: cb
    })?.catch(() => {
      if (element) {
        element.innerHTML = TOOLTIP_PLACEHOLDER_STRING
      }
    })
  }

  const parsedLandfieldData: ILandfieldPolygonData = {
    ...tileData,
    tooltip: {
      ...tileData.tooltip,
      getDataFromServerFunction: getData,
    }
  }

  return (
    <LandField landFieldData={parsedLandfieldData} borderColor={borderColor} tooltipId={TOOLTIP_ID} />
  )
}

export default LandFieldTileLayer
