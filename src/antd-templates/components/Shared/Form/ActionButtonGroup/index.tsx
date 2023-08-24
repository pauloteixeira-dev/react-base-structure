import React from 'react'
import { Flex } from 'components/Shared/Flex'

type Props = {
  children: React.ReactChild | React.ReactChild[],
}

const ActionButtonGroup = ({ children }: Props) => (
  <Flex justifyContent='space-between'>
    {children}
  </Flex>
)

export default ActionButtonGroup
