import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'
import styled from 'styled-components'

export const HeaderTitleContainer = styled.div`
  display: flex;
  align-items: center;
`

export const HeaderTitle = styled.h1`
font-size: 16px;
font-weight: bold;
color: var(--unnamed-color-302020);
`

export const IconContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  cursor: pointer;
`
export const CollapseFowardIcon = styled(MdOutlineArrowForwardIos)`
  color: inherit !important;
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
`
export const CollapseBackIcon = styled(MdOutlineArrowBackIos)`
  color: inherit !important;
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
`
