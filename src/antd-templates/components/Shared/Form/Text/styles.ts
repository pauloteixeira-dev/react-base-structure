import styled from 'styled-components'

interface ColorTextProps {
  color?: string;
}

export const RedText = styled.span`
  color: var(--main);
`

export const BoldText = styled.span`
  font-weight: bold;
`

export const ColorText = styled.span<ColorTextProps>`
  color: ${props => (props.color ? props. color : '')};
`
