import React from 'react'
import CustomLabel from 'components/Shared/CustomLabel'
import { Box } from 'components/Shared/Flex'
import { SecondaryButton } from 'components/Shared/Form/Button/SecondaryButton/styles'
import { useDropzone } from 'react-dropzone'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { Input } from 'antd'
import { InputWrapper } from './styles'
import { ErrorDescription } from '../styles'

type Props = {
  initialValue?: string,
  name: string,
}

const CustomInputFile = ({ initialValue, name }: Props) => {
  const formMethods = useFormContext()
  const { watch, setValue, formState } = formMethods

  const { errors } = formState

  const { open } = useDropzone({
    noClick: true,
    noKeyboard: true,
    maxFiles: 1,
    onDrop: files => {
      setValue(name, files)
    },
  })

  const newFileNameWatcher = watch(name)

  const valueToUse = (newFileNameWatcher && newFileNameWatcher[0]?.name) || initialValue || ''

  return (
    <Box mt='8px'>
      <CustomLabel text='Arquivo' />
      <InputWrapper>
        <Input disabled value={valueToUse} style={{ border: '0px' }} size='large' />
        <SecondaryButton onClick={open} pr='8px' pl='8px' ml='4px' mr='4px'>
          Selecionar
        </SecondaryButton>
      </InputWrapper>
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

export default CustomInputFile
