import styled from 'styled-components'

interface IContainerProps {
  width?: string,
  minWidth?: string,
}

interface IButtonProps {
  isCollapsed?: boolean,
}

export const SideCollapseContainer = styled.div<IContainerProps>`
  background-color: white;
  height: 100%;
  width: ${props => (props.width)};
  transition: width 0.5s;
  overflow-x: hidden;
`

export const CollapseButton = styled.button<IButtonProps>`
  background-color: white;
  height: 100%;
  border: none;
  border-right: 1px solid rgba(0,0,0,0.1);
  border-left: 1px solid rgba(0,0,0,0.1);
  cursor: pointer;

  .side-collapse-button-icon {
    transform: rotate(${props => (props.isCollapsed ? '180deg' : '0deg')});
    transition: transform 0.5s;
  }

  :hover {
    background-color: rgba(0,0,0,.1);
  }
`
