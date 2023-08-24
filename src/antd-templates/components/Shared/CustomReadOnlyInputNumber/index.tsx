import React from 'react'
import { Input } from 'antd'
import { SizeType } from 'antd/lib/config-provider/SizeContext'
import { Colors } from 'styles'
import CustomLabel from '../CustomLabel'
import { StyledInput } from './styles'

type Props = {
  label?: string,
  value: string | number | undefined,
  suffix?: string | undefined,
  decimalScale?: number;
}

const AntInput = (props: any, size: SizeType) => (
  <Input {...props} size={size} />
)

const CustomReadOnlyInputNumber = ({
  label,
  value,
  decimalScale = 2,
  suffix,
}: Props) => {
  const valueToUse = value || 0
  return (
    <div>
      {label && (
        <CustomLabel text={label} />
      )}
      <StyledInput
        value={valueToUse}
        color={`${Colors.MAIN_BLACK} !important`}
        decimalScale={decimalScale}
        customInput={(props: any) => AntInput(props, 'small')}
        thousandSeparator='.'
        decimalSeparator=','
        fixedDecimalScale
        disabled
        suffix={suffix}
        title={valueToUse.toString()}
      />
    </div>
  )
}

export default CustomReadOnlyInputNumber
