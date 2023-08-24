import React from 'react'
import {
  BackgroundWithLogo, Logo, RightCol, Version, Wrapper
} from './styles'

type TProps = {
  children: React.ReactNode
  height?: string
}

const LogoWithBackgroundContainer = ({ children, height }: TProps) => (
  <Wrapper height={height}>
    <BackgroundWithLogo xs={24} sm={10}>
      <Logo src='/svg/logo-white.svg' />
      <Version>Versão 0.0.0</Version>
    </BackgroundWithLogo>
    <RightCol xs={24} sm={14}>
      {children}
    </RightCol>
  </Wrapper>
)

export default LogoWithBackgroundContainer
