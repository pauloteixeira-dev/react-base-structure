import React from 'react'
import CustomLabel from 'components/Shared/CustomLabel'
import { Colors } from 'styles'
import { StyledInput } from './styles'

type Props = {
  label: string,
  value: string | number | undefined,
}

const CustomReadOnlyInput = ({ label, value }: Props) => {
  const valueToUse = value ? value.toString() : ''
  return (
    <div>
      <CustomLabel text={label} />
      <StyledInput
        type='text'
        value={valueToUse}
        title={valueToUse}
        disabled
        color={`${Colors.MAIN_BLACK} !important`}
        size='small'
      />
    </div>
  )
}

export default CustomReadOnlyInput
