import React from 'react'
import { ErrorMessage } from '@hookform/error-message'
import CustomLabel from 'components/Shared/CustomLabel'
import { Box } from 'components/Shared/Flex'
import { Controller, get, useFormContext } from 'react-hook-form'
import NumberFormat from 'react-number-format'
import { Input } from 'antd'
import { Colors } from 'styles'
import { Container, ErrorDescription } from '../styles'

interface CustomInputNumberProps {
  mt?: string;
  name: string;
  label?: string;
  placeholder?: string;
  prefix?: string;
  suffix?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  allowNegative?: boolean;
  decimalScale?: number;
  thousandSeparator?: boolean;
  format?: string;
}

const AntInput = (props: any) => (
  <Input {...props} size='large' />
)

const CustomInputNumber = ({
  mt = '8px',
  name,
  prefix,
  suffix,
  placeholder,
  label,
  isRequired,
  allowNegative = true,
  isDisabled = false,
  decimalScale = 2,
  thousandSeparator,
  format,
  ...other
}: CustomInputNumberProps) => {
  const methods = useFormContext()

  const { formState, control } = methods

  const { errors } = formState

  const hasError = get(errors || methods.formState.errors, name)

  return (
    <Box mt={mt}>
      <Container>
        <CustomLabel text={label} isRequired={isRequired} />
        <Controller
          name={name}
          control={control}
          render={({ field: { ref, onChange, value } }) => (
            <NumberFormat
              {...other}
              customInput={AntInput}
              decimalScale={decimalScale}
              thousandSeparator={!thousandSeparator ? thousandSeparator : '.'}
              decimalSeparator=','
              fixedDecimalScale
              format={format}
              placeholder={placeholder}
              ref={ref}
              allowNegative={allowNegative}
              prefix={prefix}
              suffix={suffix}
              onValueChange={(v: any) => {
                onChange(v.floatValue)
              }}
              value={value}
              style={{ borderColor: hasError ? Colors.MAIN_RED : '' }}
              disabled={isDisabled}
            />
          )}
        />
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <ErrorDescription>
              {message}
            </ErrorDescription>
          )}
        />
      </Container>
    </Box>
  )
}

export default CustomInputNumber
