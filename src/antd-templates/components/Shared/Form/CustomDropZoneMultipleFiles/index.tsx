import React, { useEffect, useState } from 'react'
import { Input } from 'antd'
import { SecondaryButton } from 'components/Shared/Form/Button/SecondaryButton/styles'
import { Flex } from 'components/Shared/Flex'
import { useFormContext, Controller } from 'react-hook-form'
import { useDropzone } from 'react-dropzone'
import { ErrorMessage } from '@hookform/error-message'
import CustomLabel from 'components/Shared/CustomLabel'
import { MdDelete } from 'react-icons/md'
import Tooltip from 'components/Shared/Tooltip'
import { FormMode } from 'model/globalEnums/global'
import { ErrorDescription } from '../styles'
import { DropZone } from './styles'


interface CustomDropZoneProps {
  mt?: string
  name: string
  label?: string
  multiple?: boolean
  mode: FormMode
}

const CustomDropZone: React.FC<CustomDropZoneProps> = ({
  name,
  label,
  ...other
}) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const methods = useFormContext()

  const {
    formState, control, setValue, setError
  } = methods

  const { errors } = formState

  const { getRootProps, open } = useDropzone({
    noClick: true,
    noKeyboard: true,
    multiple: true,
    onDrop: files => {
      setSelectedFiles([...selectedFiles, files[0]])
    },
  })

  useEffect(() => {
    setValue(name, selectedFiles)
    selectedFiles.length > 0 && setError(name, {})
    // eslint-disable-next-line
  }, [selectedFiles, name])

  const handleDelete = (fileIndex: number) => {
    const selectedFilesCopy = selectedFiles
    if (selectedFilesCopy) {
      const parsedFiles = selectedFilesCopy.filter(file => selectedFilesCopy.indexOf(file) !== fileIndex)
      setSelectedFiles(parsedFiles)
    }
  }

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Flex alignItems='center' flexDirection='column'>
          <CustomLabel text={label} />
          <DropZone {...getRootProps()} {...other} {...field}>
            {selectedFiles.map((file, index) => (
              // eslint-disable-next-line
              <Flex alignItems='center' flexDirection='row' key={`${file.name}-${index}`}>
                <Input disabled value={file.name} />
                <Tooltip title='Excluir arquivo'>
                  <MdDelete size='30px' onClick={() => handleDelete(index)} />
                </Tooltip>
              </Flex>
            ))}
            <p>Arraste o(s) arquivo(s) aqui</p>
            <SecondaryButton onClick={open}>
              ou selecione arquivos compatíveis
            </SecondaryButton>
          </DropZone>
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => <ErrorDescription>{message}</ErrorDescription>}
          />
        </Flex>
      )}
    />


  )
}

export default CustomDropZone

