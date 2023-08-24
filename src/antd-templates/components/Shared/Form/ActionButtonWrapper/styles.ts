import styled from 'styled-components'
import { Button } from 'antd'

export const ActionWrapper = styled(Button)`
  color: var(--unnamed-color-beb0b0);
  cursor: pointer;
  font-size: 18px;
  margin: 2px 4px;
  padding: 6px;
  border: none;
  background-color: transparent !important;

  :hover {
    color: var(--main);
  }
`
