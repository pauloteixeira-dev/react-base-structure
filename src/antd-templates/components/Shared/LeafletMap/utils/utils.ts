import {
  Coordinate,
  Boundary, Landfield, ILandfieldPolygonData
} from 'model/dtos/Landfield'
import { MapSize } from 'model/dtos/LeafletMap'

export const generateColor = () => {
  const r = Math.random() * 255
  const g = Math.random() * 255
  const b = Math.random() * 255
  return `rgba(${r}, ${g}, ${b}, 1)`
}

export const parseBoundaryCenterToLeafletCoordinates = (boundaryCenter?: Coordinate) => {
  if (!boundaryCenter) {
    return undefined
  }
  const parsedCoordinates: L.LatLngExpression = {
    lat: boundaryCenter.lat,
    lng: boundaryCenter.lon,
  }
  return parsedCoordinates
}

export const parseBoundariesToLeafletCoordinates = (boundaries: Boundary[]) => boundaries.map(boundary => {
  const latLngList: L.LatLngExpression[] = []
  boundary.coordinates.forEach(coordinate => {
    const latLngCoord: L.LatLngLiteral = {
      lat: coordinate.lat,
      lng: coordinate.lon,
    }
    latLngList.push(latLngCoord)
  })
  return latLngList
})

export const parseLandfieldToLeafletData = (landfield: Landfield) => {
  const parsedLandfield: ILandfieldPolygonData = {
    key: landfield.id.toString(),
    outerBoundaryIs: landfield.outerBoundaryIs,
    innerBoundaryIs: landfield.innerBoundaryIs,
  }
  return parsedLandfield
}

export const getMapSize = (size?: MapSize) => {
  const sizes = {
    MEDIUM: { height: '50vh', width: '60vw' },
    // calc needed to discount the header height, side menu width, and layout padding
    FULL: { height: 'calc(100vh - 108px)', width: 'calc(100vw - 108px)' },
    ROW: { height: '35vh', width: '60vw' },
  }

  if (size && size === MapSize.MEDIUM) {
    return sizes.MEDIUM
  }
  if (size && size === MapSize.ROW) {
    return sizes.ROW
  }
  return sizes.FULL
}

// value to be used when the server cannot return the proper data
export const TOOLTIP_PLACEHOLDER_STRING = 'Sem dados'
