import React, { useEffect, useState } from 'react'
import { Input } from 'antd'
import { SecondaryButton } from 'components/Shared/Form/Button/SecondaryButton/styles'
import { Box, Flex } from 'components/Shared/Flex'
import { useFormContext, Controller } from 'react-hook-form'
import { useDropzone } from 'react-dropzone'
import { ErrorMessage } from '@hookform/error-message'
import CustomLabel from 'components/Shared/CustomLabel'
import { MdDelete, MdDownload } from 'react-icons/md'
import Tooltip from 'components/Shared/Tooltip'
import { FormMode } from 'model/globalEnums/global'
import { saveAs } from 'file-saver'
import { MAX_SIZE_UPLOAD } from 'constants/envConfig'
import { DropZone } from './styles'
import { ErrorDescription } from '../styles'

interface CustomDropZoneProps {
  mt?: string
  name: string
  label?: string
  width?: string
  mode: FormMode
}

const CustomDropZone: React.FC<CustomDropZoneProps> = ({
  mt = '8px',
  name,
  label,
  width,
  mode,
  ...other
}) => {
  const SIZE_UPLOAD = MAX_SIZE_UPLOAD
  const [fileName, setFileName] = useState('')
  const methods = useFormContext()

  const {
    formState, control, setValue, watch
  } = methods

  const { errors } = formState
  const fileWatcher = watch(name)

  const handleDelete = () => {
    const parsedFile = {
      ...fileWatcher,
      delected: true
    }
    setValue(name, parsedFile)
    setFileName('')
    setValue('file', null)
  }

  const { getRootProps, open } = useDropzone({
    noClick: true,
    noKeyboard: true,
    maxFiles: 1,
    onDrop: files => {
      handleDelete()
      setValue('file', files)
      setFileName(files[0].name)
    },
  })

  useEffect(() => {
    fileWatcher && fileWatcher.name && !fileWatcher.delected && (
      setFileName(`${fileWatcher.name}.${fileWatcher.extension}`)
    )
  }, [fileWatcher, mode])

  const handleDownload = () => {
    fileWatcher && saveAs(fileWatcher.keyAws, `${fileWatcher.name}.${fileWatcher.extension}`)
  }

  return (
    <Box mt={mt} width={width}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Flex alignItems='center' flexDirection='column'>
            <CustomLabel text={label} />
            <DropZone {...getRootProps()} {...other} {...field}>
              <Flex alignItems='center' flexDirection='row'>
                <Input disabled value={fileName} />
                {fileName && (
                  <>
                    {mode === FormMode.EDIT && !fileWatcher?.delected && (
                      <Tooltip title='Download'>
                        <MdDownload size='30px' onClick={() => handleDownload()} />
                      </Tooltip>
                    )}
                    <Tooltip title='Excluir arquivo'>
                      <MdDelete size='30px' onClick={() => handleDelete()} />
                    </Tooltip>
                  </>
                )}
              </Flex>
              <p>Arraste o(s) arquivo(s) aqui</p>
              <SecondaryButton onClick={open}>
                {`ou selecione arquivos compatíveis (limite de ${SIZE_UPLOAD})`}
              </SecondaryButton>
            </DropZone>
          </Flex>
        )}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <ErrorDescription>{message}</ErrorDescription>}
      />
    </Box>
  )
}

export default CustomDropZone
