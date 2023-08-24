import React from 'react'
import { GOOGLE_LAYER_API_KEY } from 'constants/envConfig'
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer'

interface Props {
  type: 'roadmap' | 'satellite' | 'hybrid',
  zIndex?: number,
}

const GoogleMapLayer = ({ type, zIndex }: Props) => (
  <ReactLeafletGoogleLayer
    apiKey={GOOGLE_LAYER_API_KEY}
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    type={type}
    zIndex={zIndex}
  />
)

export default GoogleMapLayer
