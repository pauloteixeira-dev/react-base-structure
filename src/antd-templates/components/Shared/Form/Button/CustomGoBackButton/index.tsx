import React from 'react'
import { TertiaryButton } from 'components/Shared/Form/Button/TertiaryButton'
import { MdOutlineArrowBackIos } from 'react-icons/md'

type Props = {
  width?: string;
  onClick?: React.MouseEventHandler<HTMLElement> | undefined
}

const CustomGoBackButton = ({ width, onClick }: Props) => (
  <TertiaryButton onClick={onClick} width={width}>
    <MdOutlineArrowBackIos />
    Voltar
  </TertiaryButton>
)

export default CustomGoBackButton
