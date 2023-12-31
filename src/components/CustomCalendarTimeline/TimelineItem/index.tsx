import { Button, Tooltip } from "@mui/material";
import React from "react";
import {
  ReactCalendarItemRendererProps,
  TimelineItemBase,
} from "react-calendar-timeline";
import {
  StyledItemContent,
  StyledItemWrapper,
  // StyledPseudoResizeHandleWrapper,
} from "./styles";

const TimelineItem: React.FC<
  ReactCalendarItemRendererProps<TimelineItemBase<number>>
> = ({ getResizeProps, getItemProps, itemContext, item }) => {
  const DRAGGING_BG_COLOR = "rgba(0,0,0,0.3)";
  const RESIZING_BORDER_COLOR = "rgba(0,0,0,0.3)";

  const itemAsAny = item as any;

  // const { left: leftResizeProps, right: rightResizeProps } = getResizeProps();

  const backgroundColor = itemContext.selected
    ? itemContext.dragging
      ? DRAGGING_BG_COLOR
      : itemAsAny.selectedBgColor
    : itemAsAny.bgColor;

  const borderColor = itemContext.resizing
    ? RESIZING_BORDER_COLOR
    : itemAsAny.bgColor;
  const wrapperProps = getItemProps({});

  const filteredWrapperProps = {
    className: wrapperProps.className,
    key: wrapperProps.key,
    ref: wrapperProps.ref,
    style: wrapperProps.style,
  };

  return (
    <StyledItemWrapper
      {...filteredWrapperProps}
      backgroundColor={backgroundColor}
      color={itemAsAny.color}
      borderColor={borderColor}
      borderLeftWidth={itemContext.selected ? "6px" : "1px"}
      borderRightWidth={itemContext.selected ? "6px" : "1px"}
    >
      {/* {itemContext.useResizeHandle ? <div {...leftResizeProps} /> : null} */}
      {/* <StyledPseudoResizeHandleWrapper showHandles={itemContext.selected}> */}
      <Tooltip
        arrow
        title={
          <div
            style={{
              height: "100px",
              width: "300px",
              // backgroundColor: "red",
            }}
          >
            CUSTOM TOOLTIP
            <Button variant="contained">Editar</Button>
          </div>
        }
      >
        <StyledItemContent height={`${itemContext.dimensions.height}px`}>
          {itemContext.title}
        </StyledItemContent>
      </Tooltip>
      {/* </StyledPseudoResizeHandleWrapper> */}

      {/* {itemContext.useResizeHandle ? <div {...rightResizeProps} /> : null} */}
    </StyledItemWrapper>
  );
};

export default TimelineItem;
