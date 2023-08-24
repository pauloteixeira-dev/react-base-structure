import React from 'react'
import { Tooltip as AntTooltip } from 'antd'
import { TooltipPlacement } from 'antd/lib/tooltip'

interface TooltipProps {
  title: any;
  color?: string;
  placement?: TooltipPlacement ;
}

const Tooltip: React.FC<TooltipProps> = ({
  title, color, placement = 'top', children
}) => (
  <AntTooltip title={title} color={color} placement={placement}>
    {children}
  </AntTooltip>
)

export default Tooltip
