import React from 'react'
import { Link as Component } from './styles'

type TProps = {
  href: string
  target?: '_blank' | '_parent' | '_self' | '_top'
  title: string
}

const Link = (props: TProps) => {
  const {
    href,
    target = '_self',
    title
  } = props

  return (
    <Component
      href={href}
      target={target}
    >
      {title}
    </Component>
  )
}

export default Link
