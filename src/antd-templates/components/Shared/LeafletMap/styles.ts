import { MapContainer } from 'react-leaflet'
import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  zIndex: 40;
`

export const CustomMapContainer = styled(MapContainer)`
  .leaflet-control-layers-toggle,
  .leaflet-control-zoom,
  .leaflet-control-layers {
    display: none !important;
  }
`
// ================================================================================
// component created to envolve both, the leaflet map and also the custom mask
// it is important that both of them must have the same height and width
// it should be used as follow:

// <MapAndMaskWrapper>
//   <CustomMask />
//   <LeafletMap />
// </MapAndMaskWrapper>

// inside the mask, use the following classname when you want the component to be rendered over the map
// LAYER_VISIBLE_OVER_MAP_CLASS_NAME
// it is a shared const with the real classname
// the style definition for this classname is described on global styles file

export const StyledMapMaskContainer = styled.div`
  position: absolute;
  top: 0;
  display: flex;
`

export const MapAndMaskWrapper = styled.div`
  position: relative;
`
// ================================================================================
