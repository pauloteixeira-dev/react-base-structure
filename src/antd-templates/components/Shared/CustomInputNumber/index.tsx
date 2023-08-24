import React from 'react'
import NumberFormat, { NumberFormatValues } from 'react-number-format'
import { Input } from 'antd'
import { SizeType } from 'antd/lib/config-provider/SizeContext'
import { Box } from '../Flex'
import CustomLabel from '../CustomLabel'

interface CustomInputNumberProps {
  mt?: string;
  ml?: string;
  mr?: string;
  label?: string;
  placeholder?: string;
  prefix?: string;
  suffix?: string;
  isRequired?: boolean;
  displayType?: 'input' | 'text' | undefined;
  isDisabled?: boolean;
  value?: string | number;
  onChange?: (value: NumberFormatValues) => void;
  allowNegative?: boolean;
  decimalScale?: number;
  size?: SizeType;
}

const AntInput = (props: any, size: SizeType) => (
  <Input {...props} size={size} />
)

const CustomInputNumber = ({
  mt = '8px',
  ml = '0px',
  mr = '0px',
  value,
  onChange,
  prefix,
  suffix,
  placeholder,
  label,
  isRequired,
  displayType,
  allowNegative = true,
  isDisabled = false,
  decimalScale = 2,
  size = 'small',
}: CustomInputNumberProps) => (
  <Box mt={mt} ml={ml} mr={mr}>
    <CustomLabel text={label} isRequired={isRequired} />
    <NumberFormat
      decimalScale={decimalScale}
      customInput={props => AntInput(props, size)}
      thousandSeparator='.'
      decimalSeparator=','
      displayType={displayType}
      fixedDecimalScale
      placeholder={placeholder}
      allowNegative={allowNegative}
      prefix={prefix}
      suffix={suffix}
      onValueChange={onChange}
      value={value}
      disabled={isDisabled}
    />
  </Box>
)

export default CustomInputNumber
