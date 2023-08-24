import { Box, Flex } from 'components/Shared/Flex'
import React, { useState } from 'react'
import { MdArrowForwardIos } from 'react-icons/md'
import { LAYER_VISIBLE_OVER_MAP_CLASS_NAME } from 'styles'
import { CollapseButton, SideCollapseContainer } from './styles'

type Props = {
  children: React.ReactNode;
  widthWhenOpen?: string;
}

const SideCollapse = ({ children, widthWhenOpen = '300px' }: Props) => {
  const [isSideBarCollapsed, setIsSideBarCollapsed] = useState<boolean>(true)
  const closedWidth = '28px'
  const maxWidth = widthWhenOpen

  return (
    <SideCollapseContainer
      width={isSideBarCollapsed ? closedWidth : maxWidth}
      className={LAYER_VISIBLE_OVER_MAP_CLASS_NAME}
    >
      <Flex height='100%'>
        <CollapseButton
          type='button'
          onClick={() => setIsSideBarCollapsed(!isSideBarCollapsed)}
          isCollapsed={isSideBarCollapsed}
        >
          <MdArrowForwardIos className='side-collapse-button-icon' />
        </CollapseButton>
        <Box mt='0' p='4px' pl='12px'>
          {children}
        </Box>
      </Flex>
    </SideCollapseContainer>
  )
}

export default SideCollapse
