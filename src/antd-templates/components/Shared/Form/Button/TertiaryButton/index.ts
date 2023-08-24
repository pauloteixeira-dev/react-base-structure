import { Button } from 'antd'
import styled from 'styled-components'

type TTertiaryButtonProps = {
  width?: string;
}

export const TertiaryButton = styled(Button)<TTertiaryButtonProps>`
  border: none;
  width: ${props => (props.width ? props.width : '100%')};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
