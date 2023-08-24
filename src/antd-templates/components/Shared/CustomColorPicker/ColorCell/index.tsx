import React from 'react'
import { Box } from 'components/Shared/Flex'

interface Props {
  color?: string;
  width?: string;
  height?: string;
}

const ColorCell = ({ color = '', width = '100%', height = '20px' }: Props) => (
  <Box mt='0px' p='1px' borderColor='rgb(133, 133, 133)' minWidth='12px' width={width}>
    <Box
      backgroundColor={color}
      height={height}
      mt='0px'
    />
  </Box>
)

export default ColorCell
