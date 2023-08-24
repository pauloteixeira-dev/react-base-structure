import styled from 'styled-components'

interface DivProps {
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
  height?: string;
  width?: string;
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  flexDirection?: string;
  cursor?: string;
}

interface BoxProps {
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
  p?: string;
  pt?: string;
  pr?: string;
  pb?: string;
  pl?: string;
  height?: string;
  width?: string;
  minWidth?: string;
  backgroundColor?: string;
  borderColor?: string;
  position?: string;
}

export const Flex = styled.div<DivProps>`
  display: flex;
  
  margin-top: ${props => (props.mt ? props.mt : '0px')};
  margin-right: ${props => (props.mr ? props.mr : '0px')};
  margin-bottom: ${props => (props.mb ? props.mb : '0px')};
  margin-left: ${props => (props.ml ? props.ml : '0px')};
  
  height: ${props => (props.height ? props.height : '')};
  width: ${props => (props.width ? props.width : '')};

  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  flex-direction: ${props => props.flexDirection};

  gap: ${props => (props.gap ? props.gap : '0px')};
  cursor: ${props => (props.cursor ? props.cursor : '')};
`

export const Box = styled.div<BoxProps>`
  margin-top: ${props => (props.mt ? props.mt : '24px')};
  margin-right: ${props => (props.mr ? props.mr : '')};
  margin-bottom: ${props => (props.mb ? props.mb : '')};
  margin-left: ${props => (props.ml ? props.ml : '')};

  padding: ${props => (props.p ? props.p : '')};
  padding-top: ${props => (props.pt ? props.pt : '')};
  padding-right: ${props => (props.pr ? props.pr : '')};
  padding-bottom: ${props => (props.pb ? props.pb : '')};
  padding-left: ${props => (props.pl ? props.pl : '')};

  height: ${props => (props.height ? props.height : '')};
  width: ${props => (props.width ? props.width : '')};
  min-width: ${props => (props.minWidth ? props.minWidth : '')};

  position: ${props => (props.position ? props.position : '')};
  
  border: ${props => (props.borderColor ? '1px solid' : '')};
  border-color: ${props => (props.borderColor ? props.borderColor : '')};
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '')};
`
