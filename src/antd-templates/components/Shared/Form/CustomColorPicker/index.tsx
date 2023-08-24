import { ErrorMessage } from '@hookform/error-message'
import { Colorpicker } from 'antd-colorpicker'
import CustomLabel from 'components/Shared/CustomLabel'
import { Box } from 'components/Shared/Flex'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Container, ErrorDescription } from '../styles'

interface CustomColorPickerProps {
  mt?: string;
  name: string;
  label?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  height?: string | number;
  width?: string | number;
}

const CustomColorPicker = ({
  mt = '8px',
  name,
  label,
  isRequired,
  height = '40px',
  width = '100%',
  ...other
}: CustomColorPickerProps) => {
  const methods = useFormContext()

  const { formState, control } = methods

  const { errors } = formState

  return (
    <Box mt={mt}>
      <Container>
        <CustomLabel text={label} isRequired={isRequired} />
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Colorpicker
              {...other}
              value={value}
              blockStyles={{
                height,
                width,
              }}
              popup
              onChange={val => {
                onChange(val.hex)
              }}
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

export default CustomColorPicker
