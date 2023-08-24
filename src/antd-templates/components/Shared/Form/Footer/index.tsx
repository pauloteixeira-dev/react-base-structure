import { Box, Flex } from 'components/Shared/Flex'
import React from 'react'

interface Props {
  children: React.ReactElement | React.ReactElement[];
}

const FormFooter = ({ children }: Props) => (
  <Box>
    <Flex gap='24px' justifyContent='end'>
      {children}
    </Flex>
  </Box>
)

export default FormFooter
