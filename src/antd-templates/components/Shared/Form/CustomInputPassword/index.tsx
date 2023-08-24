import React from 'react'
import { Input } from 'antd'
import { Controller, get, useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import CustomLabel from 'components/Shared/CustomLabel'
import { Container, ErrorDescription } from '../styles'

interface CustomInputPasswordProps {
  name: string;
  label?: string;
  placeholder?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  isRequired?: boolean;
  isDisabled?: boolean;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}

const CustomInputPassword: React.FC<CustomInputPasswordProps> = ({
  name,
  prefix,
  suffix,
  placeholder,
  label,
  isRequired,
  onKeyDown,
  ...other
}) => {
  const methods = useFormContext()

  const { formState, control } = methods

  const { errors } = formState

  const hasError = get(errors || methods.formState.errors, name)

  return (
    <Container>
      <CustomLabel text={label} isRequired={isRequired} />
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input.Password
            {...other}
            {...field}
            size='large'
            placeholder={placeholder}
            required={isRequired}
            type='password'
            name={name}
            onKeyDown={onKeyDown}
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
  )
}

export default CustomInputPassword
