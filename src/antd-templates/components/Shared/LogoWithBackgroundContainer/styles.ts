import styled from 'styled-components'
import { Col, Row, Button } from 'antd'

interface WrapperProps {
  height?: string;
}

export const Wrapper = styled(Row)<WrapperProps>`
  height: ${props => (props.height ? props.height : '100vh')};
`
export const BackgroundWithLogo = styled(Col)`
  background-image: url(/images/bg.png);
  background-repeat: no-repeat;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const RightCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Version = styled.span`
  font-size: 16px;
  color: #ffffff;
  position: absolute;
  left: auto;
  right: auto;
  bottom: 40px;
`

export const Logo = styled.img`
  width: 30rem;
  object-fit: contain;
  @media(max-width: 800px){
    width: 10rem;
  }
`

export const Welcome = styled.h2`
  color: #302020;
  font-size: 24px;
  font-weight: bold;
`

export const TitleText = styled.h1`
  font-size: 32px;
  text-transform: uppercase;
  font-weight: bold;
  color: #E5333A;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  gap: 32px;
  padding-top: 32px;
`

export const Controller = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`

export const SubmitButton = styled(Button)`
  background-color: #E5333A;
  min-width: 140px;
  border: none;
  
  :hover {
    background-color: #E5333A90;
  }
  `

export const LinkButton = styled.a`
  text-decoration: underline !important;
  color: #BEB0B0;
  :hover {
    color: #E5333A;
  }
`
