import React from 'react'
import { SecondaryButton } from '../SecondaryButton/styles'

type Props ={
  onClick: () => void;
}

const CancelButton = ({ onClick }: Props) => (
  <SecondaryButton onClick={onClick}>Cancelar</SecondaryButton>
)

export default CancelButton
