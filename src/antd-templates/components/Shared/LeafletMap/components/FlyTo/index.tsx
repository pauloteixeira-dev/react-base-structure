import React, { useEffect } from 'react'
import { useMapEvents } from 'react-leaflet'

type TProps = {
  center?: L.LatLngExpression,
  bounds?: L.LatLngBoundsExpression,
}

const FlyTo = ({ center, bounds }: TProps) => {
  const map = useMapEvents({})

  useEffect(() => {
    if (center) {
      map.flyTo(center, map.getZoom())
    }
    if (bounds) {
      map.flyToBounds(bounds)
      map.fitBounds(bounds)
    }
  }, [center, map, bounds])

  return (
    <div />
  )
}

export { FlyTo }
