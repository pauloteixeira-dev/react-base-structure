import React from 'react'
import { ITileLayer } from 'model/dtos/Landfield'
import { WMSTileLayer } from 'react-leaflet'
import { GATEWAY_SERVER_URL, GEO_SERVER_LAYER_NAME, GEO_SERVER_WMS_SERVICE_VERSION } from 'constants/envConfig'
import { parseArrayToValueSyntax, parseParamsToCqlFilter } from 'utils/geoServerUtils'
import { CqlFilterOptions, TCqlFilterParam } from 'model/dtos/GeoServer'
import LandFieldTileLayer from '../LandfieldTileLayer'

interface Props {
  tileLayer: ITileLayer
}

const MultiLandFieldTileLayer = ({
  tileLayer,
}: Props) => {
  const cqlParams: TCqlFilterParam[] = [
    {
      name: CqlFilterOptions.land_field_id,
      value: parseArrayToValueSyntax(tileLayer.landfieldIdList),
      syntaxMethod: 'IN',
    },
    {
      name: CqlFilterOptions.element_map_id,
      value: tileLayer.elementMapId,
      syntaxMethod: 'EQUALS_TO',
    }
  ]

  const cqlFilter = parseParamsToCqlFilter(cqlParams)

  const wmsTileLayerUrl = new URL(`${GATEWAY_SERVER_URL}/geoservice/wms`)
  cqlFilter && wmsTileLayerUrl.searchParams.append('CQL_FILTER', cqlFilter)

  return (
    <>
      {tileLayer?.landfieldsData.map(landfield => (
        <LandFieldTileLayer
          key={landfield.key}
          tileData={landfield}
          elementMapId={tileLayer.elementMapId}
        />
      ))}
      <WMSTileLayer
        url={wmsTileLayerUrl.toString()}
        key={Math.random()}
        format='image/png'
        params={{ layers: GEO_SERVER_LAYER_NAME }}
        transparent
        version={GEO_SERVER_WMS_SERVICE_VERSION}
      />
    </>
  )
}

export default MultiLandFieldTileLayer
