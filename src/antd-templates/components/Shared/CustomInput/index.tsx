import React from 'react'
import { Input } from 'antd'
import { ErrorMessage } from './styles'
import CustomLabel from '../CustomLabel'
import { Box } from '../Flex'
import { Container } from '../Form/styles'

interface CustomInputProps {
  name?: string;
  mt?: string;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  handleChange?: any;
  handleBlur?: any;
  errors?: string | false;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  value?: string | number | readonly string[];
  label?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  style?: object;
}

const CustomInput: React.FC<CustomInputProps> = ({
  handleChange,
  mt = '0px',
  handleBlur,
  name,
  type = 'text',
  errors,
  prefix,
  suffix,
  value,
  placeholder,
  label,
  isRequired,
  isDisabled,
  style,
  ...other
}) => (
  <Box mt={mt} width='100%'>
    <Container>
      <CustomLabel text={label} isRequired={isRequired} />
      <Input
        {...other}
        size='large'
        style={style}
        placeholder={placeholder}
        required={isRequired}
        type={type}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        disabled={isDisabled}
        prefix={prefix}
        suffix={suffix}
        status={errors ? 'error' : ''}
      />
      <ErrorMessage>
        {errors}
      </ErrorMessage>
    </Container>
  </Box>
)

export default CustomInput
