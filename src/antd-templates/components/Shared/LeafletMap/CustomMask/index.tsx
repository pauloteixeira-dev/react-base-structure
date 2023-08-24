import { MapSize } from 'model/dtos/LeafletMap'
import React, { ReactElement } from 'react'
import { StyledMapMaskContainer } from '../styles'
import { getMapSize } from '../utils/utils'

interface Props {
  children: ReactElement | ReactElement[],
  size: MapSize,
}

const MapMaskContainer = ({ children, size }: Props) => (
  <StyledMapMaskContainer style={getMapSize(size)}>
    {children}
  </StyledMapMaskContainer>
)

export default MapMaskContainer
