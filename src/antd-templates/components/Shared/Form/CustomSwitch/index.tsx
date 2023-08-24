import React from 'react'
import { Switch } from 'antd'
import { Controller, useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import CustomLabel from 'components/Shared/CustomLabel'
import { Box, Flex } from 'components/Shared/Flex'
import { Container, ErrorDescription } from '../styles'

interface Props {
  mt?: string;
  name: string;
  label?: string;
  isRequired?: boolean;
}

const CustomSwitch: React.FC<Props> = ({
  mt = '16px',
  name,
  label,
  isRequired,
}) => {
  const methods = useFormContext()

  const { formState, control } = methods

  const { errors } = formState

  return (
    <Box mt={mt}>
      <Container>
        <Flex>
          <CustomLabel text={label} isRequired={isRequired} />
          <Controller
            name={name}
            control={control}
            render={({ field, field: { value, ref, onChange } }) => (
              <Switch
                {...field}
                onChange={event => {
                  onChange(event)
                }}
                ref={ref}
                checked={!!value}
              />
            )}
          />
        </Flex>
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

export default CustomSwitch
