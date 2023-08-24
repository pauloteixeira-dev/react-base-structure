import React from 'react'
import { Radio } from 'antd'
import { Controller, get, useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { Box } from 'components/Shared/Flex'
import { Container, ErrorDescription } from '../styles'

interface CustomRadioProps {
  mt?: string
  name: string
  optionValue: number
  children: React.ReactNode | React.ReactNode[]
}

const CustomRadioGroup: React.FC<CustomRadioProps> = ({
  mt = '8px',
  name,
  children,
}) => {
  const methods = useFormContext()

  const { formState, control } = methods

  const { errors } = formState

  get(errors || methods.formState.errors, name)

  return (
    <Box mt={mt}>
      <Container>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Radio.Group {...field} onChange={field.onChange} value={field.value}>
              {children}
            </Radio.Group>
          )}
        />
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <ErrorDescription>{message}</ErrorDescription>
          )}
        />
      </Container>
    </Box>
  )
}

export default CustomRadioGroup
