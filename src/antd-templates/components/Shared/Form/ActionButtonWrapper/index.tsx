import React from 'react'
import Tooltip from 'components/Shared/Tooltip'
import { ActionWrapper } from './styles'

type Props = {
  tooltip?: string;
  children: React.ReactChild;
  isDisabled?: boolean;
}

const ActionButtonWrapper = ({ tooltip, children, isDisabled = false }: Props) => (
  <Tooltip title={tooltip}>
    <ActionWrapper disabled={isDisabled}>
      {children}
    </ActionWrapper>
  </Tooltip>
)

export default ActionButtonWrapper
