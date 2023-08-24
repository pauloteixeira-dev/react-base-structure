import React from 'react'
import { Divider, SessionTitle } from './styles'

interface Props {
  title?: string;
}

const SessionDivider = ({ title }: Props) => (
  <>
    <SessionTitle>
      {title}
    </SessionTitle>
    <Divider />
  </>
)

export default SessionDivider
