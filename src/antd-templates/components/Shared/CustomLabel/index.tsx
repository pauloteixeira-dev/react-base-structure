import React from 'react'
import { RedText } from '../Form/Text/styles'
import { Label } from './styles'


interface Props {
  text?: string;
  isRequired?: boolean;
}

const CustomLabel = ({ text, isRequired }: Props) => (
  text ? (
    <Label>
      <span>{text}</span>
      <RedText>{isRequired && '*'}</RedText>
    </Label>
  ) : <div />
)

export default CustomLabel
