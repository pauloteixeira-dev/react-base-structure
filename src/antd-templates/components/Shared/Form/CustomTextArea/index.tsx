import React from 'react'
import { Input } from 'antd'
import CustomLabel from 'components/Shared/CustomLabel'
import { Controller, get, useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { Box } from 'components/Shared/Flex'
import { removeLeadingSpaces } from 'utils/stringUtils'
import { Container, ErrorDescription } from '../styles'

interface CustomTextAreaProps {
  mt?: string;
  name: string;
  label?: string;
  placeholder?: string;
  prefix?: string;
  isRequired?: boolean;
  rows?: number;
  isDisabled?: boolean;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
}

const CustomTextArea: React.FC<CustomTextAreaProps> = ({
  mt = '8px',
  name,
  label,
  placeholder,
  prefix,
  isRequired,
  rows,
  ...other
}) => {
  const { TextArea } = Input
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
            <TextArea
              {...other}
              {...field}
              onChange={event => {
                field.onChange(removeLeadingSpaces(event.target.value))
              }}
              size='large'
              placeholder={placeholder}
              required={isRequired}
              name={name}
              prefix={prefix}
              rows={rows}
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

export default CustomTextArea
