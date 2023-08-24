import styled from 'styled-components'
import { Button } from 'antd'

type ButtonProps = {
  mt?: string;
}

export const CircleButton = styled(Button)<ButtonProps>`
  background-color: #E5333A;
  min-width: 8px;
  margin-top: ${props => (props.mt ? props.mt : '0px')};
  border-radius: 20px;
  color: white;

  :hover {
    background-color: #E5333A90;
  }
  `
