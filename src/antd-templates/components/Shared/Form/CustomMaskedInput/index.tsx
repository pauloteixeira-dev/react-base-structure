import React from 'react'
import { ErrorMessage } from '@hookform/error-message'
import { Controller, get, useFormContext } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { Box } from 'components/Shared/Flex'
import CustomLabel from 'components/Shared/CustomLabel'
import { Input } from 'antd'
import { Container, ErrorDescription } from '../styles'

interface Props {
  mt?: string;
  name: string;
  label: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  isRequired?: boolean;
  isDisabled?: boolean;
  mask: string | (string | RegExp)[];
  maskPlaceholder?: string;
  onKeyUp?: (event: any) => void;
}

const CustomMaskedInput = ({
  mt = '8px',
  name,
  label,
  placeholder,
  type,
  isRequired,
  isDisabled,
  mask,
  maskPlaceholder,
  onKeyUp,
}: Props) => {
  const methods = useFormContext()

  const { formState } = methods

  const { errors } = formState

  const hasError = get(errors || methods.formState.errors, name)

  return (
    <Box mt={mt}>
      <Container>
        <CustomLabel text={label} isRequired={isRequired} />
        <Controller
          name={name}
          control={methods.control}
          defaultValue=''
          render={({
            field: {
              onChange, value
            }
          }) => (
            <InputMask
              mask={mask}
              placeholder={maskPlaceholder}
              value={value}
              onChange={ev => onChange(ev.target.value.replaceAll('_', ''))}
              name={name}
            >
              {(inputProps: any) => (
                <Input
                  size='large'
                  disabled={isDisabled}
                  placeholder={placeholder}
                  type={type}
                  status={hasError ? 'error' : ''}
                  onKeyUp={onKeyUp}
                  {...inputProps}
                />
              )}
            </InputMask>
          )}
        />
      </Container>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <ErrorDescription>
            {message}
          </ErrorDescription>
        )}
      />
    </Box>
  )
}

export default CustomMaskedInput
