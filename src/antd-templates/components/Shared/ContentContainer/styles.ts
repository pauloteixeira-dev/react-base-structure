import styled from 'styled-components'

interface DivProps {
  m?: string;
}

export const ContentContainer = styled.div<DivProps>`
  margin: ${props => (props.m ? props.m : '0px')};
  padding: 16px;
  background-color: white;
  height: fit-content;
`
