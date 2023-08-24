import React from 'react'
import { Box } from 'components/Shared/Flex'
import { Divider } from '../SessionDivider/styles'
import {
  CollapseBackIcon,
  CollapseFowardIcon, HeaderTitle, HeaderTitleContainer, IconContainer
} from './styles'

type Props = {
  title: string
  onClick: () => void
  collapseDirection: 'FOWARD' | 'BACK'
  goBack?: () => void
}
const SessionDividerWithCollapseArrow = ({
  title, onClick, collapseDirection, goBack
}: Props) => (
  <Box mt='4px'>
    <HeaderTitleContainer>
      {goBack && (
        <CollapseBackIcon onClick={() => goBack()} />
      )}
      <HeaderTitle>{title}</HeaderTitle>
      <IconContainer>
        {collapseDirection === 'BACK' && (
          <CollapseBackIcon onClick={() => onClick()} />
        )}
        {collapseDirection === 'FOWARD' && (
          <CollapseFowardIcon onClick={() => onClick()} />
        )}
      </IconContainer>
    </HeaderTitleContainer>
    <Divider />
  </Box>
)

export default SessionDividerWithCollapseArrow
