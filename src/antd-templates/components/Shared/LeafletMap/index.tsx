import React, { memo, useEffect, useState } from 'react'
import {
  FeatureGroup,
  LayerGroup,
  LayersControl,
} from 'react-leaflet'
import * as L from 'leaflet'
import {
  ILandfieldMapData,
  ILandfieldPolygonData,
  ILandfieldTileData,
  ITileLayer,
} from 'model/dtos/Landfield'
import { MapSize } from 'model/dtos/LeafletMap'
import { FlyTo } from './components/FlyTo'
import GoogleMapLayer from './components/GoogleMapLayer'
import LandField from './components/LandField'
import { getMapSize } from './utils/utils'
import { CustomMapContainer, Wrapper } from './styles'
import CustomMapControls from './components/CustomMapControls'
import MultiLandFieldTileLayer from './components/MultiLandfieldTileLayer'

type TProps = {
  size?: MapSize,
  landfieldListData: ILandfieldMapData[]
  elementLayers?: {
    layerName: string,
    elementMapId: string | undefined,
  }[],
  hideSingleElement?: boolean,
  hideBaseLayers?: boolean,
}

const googleLayers = {
  SatelliteGoogleLayer: 'Satellite Google Layer',
  RoadmapGoogleLayer: 'Roadmap Google Layer',
}

const baseLayers = [
  {
    name: googleLayers.SatelliteGoogleLayer,
  },
  {
    name: googleLayers.RoadmapGoogleLayer,
  },
]

const LeafletMap = ({
  size, landfieldListData, elementLayers, hideSingleElement, hideBaseLayers
}: TProps) => {
  const [bounds, setBounds] = useState<L.LatLngTuple[]>([])
  const [selectedBaseLayer, setSelectedBaseLayer] = useState<string>(googleLayers.SatelliteGoogleLayer)
  const [selectedLayer, setSelectedLayer] = useState<string>()
  const [polygonLayer, setPolygonLayer] = useState<ILandfieldPolygonData[]>()
  const [wmsTileLayers, setWmsTileLayers] = useState<ITileLayer[]>()

  const defaultLatLng: L.LatLng = new L.LatLng(-15.0033525, -57.2338929)
  const defaultZoom = 13
  const maxZoom = 18

  useEffect(() => {
    if (landfieldListData) {
      const newPolygonLayer: ILandfieldPolygonData[] = []
      const newWmsTileLayers: ITileLayer[] = []
      const tiles: ILandfieldTileData[] = []
      const landfieldIdList: number[] = []

      landfieldListData.forEach(landfield => {
        newPolygonLayer.push(landfield.polygonData)
        if (landfield.wmsTileData) {
          tiles.push({
            ...landfield.polygonData,
            ...landfield.wmsTileData,
          })
          landfieldIdList.push(landfield.wmsTileData.landfieldId)
        }
      })
      elementLayers?.forEach(layer => {
        const { elementMapId } = layer
        if (elementMapId !== undefined) {
          const newWmsTL: ITileLayer = {
            ...layer,
            elementMapId,
            landfieldsData: tiles,
            landfieldIdList,
          }
          newWmsTileLayers.push(newWmsTL)
        }
      })

      newPolygonLayer && setPolygonLayer(newPolygonLayer)
      newWmsTileLayers && setWmsTileLayers(newWmsTileLayers)
    }
  }, [elementLayers, landfieldListData])

  useEffect(() => {
    const parsedBounds: L.LatLngTuple[] = []
    landfieldListData?.forEach(landfield => {
      landfield?.polygonData?.outerBoundaryIs?.forEach(boundary => {
        boundary?.coordinates?.forEach(coord => {
          parsedBounds.push([
            coord.lat,
            coord.lon,
          ])
        })
      })
    })
    parsedBounds && setBounds(parsedBounds)
  }, [landfieldListData])

  return (
    <Wrapper>
      <CustomMapContainer
        style={getMapSize(size)}
        maxZoom={maxZoom}
        zoom={defaultZoom}
        center={defaultLatLng}
        bounds={bounds}
      >
        <CustomMapControls
          elementLayers={elementLayers?.map(layer => ({
            label: layer.layerName,
            value: layer.layerName
          }))}
          selectedLayer={selectedLayer}
          onLayerChange={layer => setSelectedLayer(layer)}
          baseLayers={baseLayers.map(layer => ({
            label: layer.name,
            value: layer.name,
          }))}
          selectedBaseLayer={selectedBaseLayer}
          onBaseLayerChange={layer => setSelectedBaseLayer(layer)}
          hideSingleElement={hideSingleElement}
          hideBaseLayers={hideBaseLayers}
        />
        <LayersControl
          hideSingleBase
          position='bottomright'
        >
          <LayersControl.BaseLayer
            checked={selectedBaseLayer === googleLayers.SatelliteGoogleLayer}
            name={googleLayers.SatelliteGoogleLayer}
          >
            <LayerGroup>
              <GoogleMapLayer type='satellite' />
            </LayerGroup>
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer
            checked={selectedBaseLayer === googleLayers.RoadmapGoogleLayer}
            name={googleLayers.RoadmapGoogleLayer}
          >
            <LayerGroup>
              <GoogleMapLayer type='roadmap' />
            </LayerGroup>
          </LayersControl.BaseLayer>
          {polygonLayer && polygonLayer.length > 0 && (
            <LayersControl.Overlay checked={!selectedLayer} name='Polygon Layer'>
              <LayerGroup>
                <FeatureGroup>
                  {polygonLayer?.map(landfield => (
                    <LandField
                      key={landfield.key}
                      landFieldData={landfield}
                    />
                  ))}
                </FeatureGroup>
              </LayerGroup>
            </LayersControl.Overlay>
          )}
          {wmsTileLayers && wmsTileLayers.length > 0 && wmsTileLayers.map(tileLayer => (
            <LayersControl.Overlay
              key={tileLayer.layerName}
              name={tileLayer.layerName}
              checked={tileLayer.layerName === selectedLayer}
            >
              <LayerGroup>
                <FeatureGroup>
                  <MultiLandFieldTileLayer tileLayer={tileLayer} />
                </FeatureGroup>
              </LayerGroup>
            </LayersControl.Overlay>
          ))}
        </LayersControl>
        {polygonLayer && bounds?.length > 0 && (
          <FlyTo bounds={bounds} />
        )}
      </CustomMapContainer>
    </Wrapper>
  )
}

export default memo(LeafletMap)
