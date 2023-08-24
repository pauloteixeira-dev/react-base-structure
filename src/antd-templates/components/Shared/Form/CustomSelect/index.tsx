import React from 'react'
import { Select } from 'antd'
import { Controller, get, useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import CustomLabel from 'components/Shared/CustomLabel'
import { BaseOptionType, DefaultOptionType } from 'antd/lib/select'
import { Box } from 'components/Shared/Flex'
import { Container, ErrorDescription } from '../styles'

interface CustomSelectProps {
  mt?: string;
  name: string;
  label?: string;
  placeholder?: string;
  width?: string;
  onSearch?: (value: string) => void;
  isRequired?: boolean;
  options: (BaseOptionType | DefaultOptionType)[];
  isDisabled?: boolean;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  mt = '8px',
  name,
  label,
  placeholder,
  isRequired,
  onSearch,
  width,
  options = [],
  isDisabled,
  ...other
}) => {
  const methods = useFormContext()

  const { formState, control } = methods

  const { errors } = formState

  const hasError = get(errors || methods.formState.errors, name)

  return (
    <Box mt={mt} width={width}>
      <Container>
        <CustomLabel text={label} isRequired={isRequired} />
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Select
              {...other}
              {...field}
              size='large'
              showSearch
              onSearch={onSearch}
              disabled={isDisabled}
              placeholder={placeholder}
              style={{ width }}
              status={hasError ? 'error' : ''}
              options={options}
              filterOption={(input, option) => (option?.label as unknown as string)
                .toLowerCase().includes(input.toLowerCase())}
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

export default CustomSelect
