import styled from 'styled-components'

export const LoaderBackground = styled.div`
  background-color: #00000050;
  position: absolute;
  z-index: 9998;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 64px;
    color: #E5333A;
    animation: rotating 2s linear infinite;
    -webkit-animation: rotating 2s linear infinite;
  }
`
