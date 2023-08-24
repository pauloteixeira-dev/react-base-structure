import React from 'react'
import { Collapse } from 'antd'
import { MdFilterAlt } from 'react-icons/md'

interface Props {
  children: React.ReactNode
  defaultActiveKey?: string | number | (string | number)[] | undefined
}

const customIcon = () => <MdFilterAlt />

const FilterCollapse = ({ children, defaultActiveKey }: Props) => (
  <Collapse expandIcon={customIcon} defaultActiveKey={defaultActiveKey}>
    {children}
  </Collapse>
)

export default FilterCollapse
