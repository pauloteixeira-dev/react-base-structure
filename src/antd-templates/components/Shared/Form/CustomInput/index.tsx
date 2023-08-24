import React from 'react'
import { Input } from 'antd'
import { Controller, get, useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import CustomLabel from 'components/Shared/CustomLabel'
import { Box } from 'components/Shared/Flex'
import { removeLeadingSpaces } from 'utils/stringUtils'
import { Container, ErrorDescription } from '../styles'

interface CustomInputProps {
  mt?: string;
  name: string;
  label?: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  isRequired?: boolean;
  isDisabled?: boolean;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}

const CustomInput: React.FC<CustomInputProps> = ({
  mt = '8px',
  name,
  type = 'text',
  prefix,
  suffix,
  placeholder,
  label,
  isRequired,
  isDisabled,
  onKeyDown,
  ...other
}) => {
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
            <Input
              {...other}
              {...field}
              onChange={event => {
                field.onChange(removeLeadingSpaces(event.target.value))
              }}
              size='large'
              placeholder={placeholder}
              required={isRequired}
              disabled={isDisabled}
              onKeyDown={onKeyDown}
              type={type}
              name={name}
              prefix={prefix}
              suffix={suffix}
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

export default CustomInput
