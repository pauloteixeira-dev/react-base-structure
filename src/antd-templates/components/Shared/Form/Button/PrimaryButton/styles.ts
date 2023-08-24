import { Button } from 'antd'
import styled from 'styled-components'

type ButtonType = {
  width?: string
}

export const PrimaryButton = styled(Button)<ButtonType>`
  width: ${props => (props.width ? props.width : '')};
  background-color: var(--main);
  color: white;
  padding-left: 32px;
  padding-right: 32px;
  border: none;

  :hover {
    background-color: var(--main_dark1);
    color: white;
  }

  :focus {
    background-color: var(--main_dark1);
    color: white;
  }
`
