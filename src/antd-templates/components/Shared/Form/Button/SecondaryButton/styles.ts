import { Button } from 'antd'
import styled from 'styled-components'

interface SecButtonProps {
  ml?: string;
  mr?: string;
  pl?: string;
  pr?: string;
  width?: string;
}

export const SecondaryButton = styled(Button)<SecButtonProps>`
  padding-left: ${props => (props.pl ? props.pl : '24px')};
  padding-right: ${props => (props.pr ? props.pr : '24px')};
  margin-left: ${props => (props.ml ? props.ml : '0px')};
  margin-right: ${props => (props.mr ? props.mr : '0px')};

  width: ${props => (props.width ? props.width : '')};

  :hover {
    border-color: var(--main);
    color: var(--main);
  }

  :focus {
    border-color: var(--main);
    color: var(--main);
  }
`
