import React from 'react'
import { Controller, get, useFormContext } from 'react-hook-form'
import { Box } from 'components/Shared/Flex'
import CustomLabel from 'components/Shared/CustomLabel'
import { ErrorMessage } from '@hookform/error-message'
import { DatePicker } from 'antd'
import { Container, ErrorDescription } from '../styles'

interface CustomDatePickerProps {
  mt?: string;
  name: string;
  label?: string;
  placeholder?: string;
  allowClear?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
}

const CustomDatePicker = ({
  mt = '8px',
  name,
  placeholder,
  label,
  allowClear = false,
  isRequired,
  isDisabled,
}: CustomDatePickerProps) => {
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
          render={({ field }) => (
            <DatePicker
              ref={field.ref}
              size='large'
              onChange={(value: any) => field.onChange(value)}
              onBlur={field.onBlur}
              value={field.value}
              format='DD/MM/YYYY'
              disabled={isDisabled}
              placeholder={placeholder}
              allowClear={allowClear}
              status={hasError ? 'error' : ''}
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

export default CustomDatePicker
