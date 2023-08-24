import NumberFormat from 'react-number-format'
import styled from 'styled-components'

type TStyledInputProps = {
  color?: string;
}

export const StyledInput = styled(NumberFormat)<TStyledInputProps>`
  border: 0px;
  color: ${props => (props.color ? props.color : '')};
  background-color: rgba(0,0,0,.04) !important;
  cursor: text !important;
  text-overflow: ellipsis;
`
