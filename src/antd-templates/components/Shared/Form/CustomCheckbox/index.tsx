import React, { useEffect } from 'react'
import { Checkbox } from 'antd'
import { Controller, useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import CustomLabel from 'components/Shared/CustomLabel'
import { Box, Flex } from 'components/Shared/Flex'
import { Container, ErrorDescription } from '../styles'
import { StyledCheckbox } from './styles'

interface Props {
  mt?: string;
  name: string;
  label?: string;
  isRequired?: boolean;
  notifyFieldName?: string;
  isDisabled?: boolean;
}

const CustomCheckbox: React.FC<Props> = ({
  mt = '16px',
  name,
  label,
  isRequired,
  notifyFieldName,
  isDisabled,
}) => {
  const methods = useFormContext()

  const {
    formState, control, watch, getValues, setValue
  } = methods

  const { errors } = formState

  const selfValueWatcher = watch(name)

  const notifyChange = () => {
    // Notify the the form field about the change on this field
    if (notifyFieldName) {
      const notifyFieldValue = getValues(notifyFieldName)
      const copyNotifyFieldValue = structuredClone(notifyFieldValue)
      setValue(notifyFieldName, copyNotifyFieldValue)
    }
  }

  useEffect(() => {
    // Notify the the form field about the change on this field
    notifyChange()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getValues, notifyFieldName, selfValueWatcher, setValue])

  return (
    <Box mt={mt}>
      <Container>
        <Flex>
          <CustomLabel text={label} isRequired={isRequired} />
          <Controller
            name={name}
            control={control}
            render={({ field, field: { value, ref, onChange } }) => (
              <StyledCheckbox>
                <Checkbox
                  {...field}
                  name={name}
                  onChange={event => {
                    notifyChange()
                    onChange(event.target.checked)
                  }}
                  ref={ref}
                  checked={!!value}
                  disabled={isDisabled}
                />
              </StyledCheckbox>
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

export default CustomCheckbox
