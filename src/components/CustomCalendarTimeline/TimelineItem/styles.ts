import styled, { css } from "styled-components";

interface IStyledItemWrapperProps {
  backgroundColor: string;
  color: string;
  borderColor: string;
  borderLeftWidth: string;
  borderRightWidth: string;
}

interface IStyledPseudoResizeHandleWrapperProps {
  showHandles: boolean;
}

interface IStyledItemContentProps {
  height: string;
}

export const StyledItemWrapper = styled.div<IStyledItemWrapperProps>`
  background-color: ${(props) => props.backgroundColor} !important;
  color: ${(props) => props.color} !important;
  border-color: ${(props) => props.borderColor} !important;
  border-style: solid !important;
  border-width: 1px !important;
  border-radius: 4px !important;
  border-left-width: ${(props) => props.borderLeftWidth} !important;
  border-right-width: ${(props) => props.borderRightWidth} !important;
`;

export const StyledPseudoResizeHandleWrapper = styled.div<IStyledPseudoResizeHandleWrapperProps>`
  position: relative !important;
  height: inherit;

  ${(props) =>
    props.showHandles &&
    css`
      &::before,
      &::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        width: 6px;
        cursor: col-resize;
      }

      &::before {
        left: -6px;
      }

      &::after {
        right: -6px;
      }
    `}
`;

export const StyledItemContent = styled.div<IStyledItemContentProps>`
  height: ${(props) => props.height};
  overflow: hidden;
  padding-left: 3px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
