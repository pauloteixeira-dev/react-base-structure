import React from 'react'
import { PrimaryButton } from '../PrimaryButton/styles'

type Props ={
  onClick: () => void;
}

const SaveButton = ({ onClick }: Props) => (
  <PrimaryButton onClick={onClick}>Salvar</PrimaryButton>
)

export default SaveButton
