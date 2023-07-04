import React from "react";
import Timeline, { Unit } from "react-calendar-timeline";
import { add } from "date-fns";
import { Tooltip, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import moment from "moment";
import "./App.css";
import "react-calendar-timeline/lib/Timeline.css";
import "moment/locale/pt-br";

interface IKeys {
  groupIdKey: string;
  groupTitleKey: string;
  groupRightTitleKey: string;
  itemIdKey: string;
  itemTitleKey: string;
  itemDivTitleKey: string;
  itemGroupKey: string;
  itemTimeStartKey: string;
  itemTimeEndKey: string;
  groupLabelKey: string;
}

interface IGroup {
  id: number;
  title: string;
}

interface IItem {
  id: number;
  group: number;
  title: string;
  start_time: number;
  end_time: number;
  canMove: boolean;
  canResize: string;
  className: string;
  bgColor: string;
  selectedBgColor: string;
  color: string;
}

interface CustomCalendarTimelineProps {
  keys: IKeys;
  groups: IGroup[];
  items: IItem[];
  onItemMove: (itemId: number, dragTime: number, newGroupOrder: number) => void;
  onItemResize: (itemId: number, time: number, edge: "right" | "left") => void;
}

const CustomCalendarTimeline: React.FC<CustomCalendarTimelineProps> = ({
  keys,
  groups,
  items,
  onItemMove,
  onItemResize,
}) => {
  moment.locale("pt-br");
  const DEFAULT_TIME_START = add(new Date(), { hours: -12 });
  const DEFAULT_TIME_END = add(new Date(), { hours: 12 });
  const DRAGGING_BG_COLOR = "red";
  const RESIZING_BORDER_COLOR = "red";

  const itemRenderer = ({
    item,
    timelineContext,
    itemContext,
    getItemProps,
    getResizeProps,
  }: any) => {
    const { left: leftResizeProps, right: rightResizeProps } = getResizeProps();
    const backgroundColor = itemContext.selected
      ? itemContext.dragging
        ? DRAGGING_BG_COLOR
        : item.selectedBgColor
      : item.bgColor;
    const borderColor = itemContext.resizing
      ? RESIZING_BORDER_COLOR
      : item.bgColor;
    const wrapperProps = getItemProps({
      style: {
        backgroundColor,
        color: item.color,
        borderColor,
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 4,
        borderLeftWidth: itemContext.selected ? 6 : 1,
        borderRightWidth: itemContext.selected ? 6 : 1,
      },
    });
    console.log("PROPS");
    console.log(wrapperProps);

    return (
      <div {...wrapperProps}>
        {itemContext.useResizeHandle ? <div {...leftResizeProps} /> : null}
        <div
          className={itemContext.selected ? "table-custom-item-wrapper" : ""}
        >
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
            <div
              style={{
                height: itemContext.dimensions.height,
                overflow: "hidden",
                paddingLeft: 3,
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {itemContext.title}
            </div>
          </Tooltip>

          {itemContext.useResizeHandle ? <div {...rightResizeProps} /> : null}
        </div>
      </div>
    );
  };

  const handleItemMove = (
    itemId: number,
    dragTime: number,
    newGroupOrder: number
  ) => {
    onItemMove(itemId, dragTime, newGroupOrder);
  };

  const handleItemResize = (
    itemId: number,
    time: number,
    edge: "right" | "left"
  ) => {
    onItemResize(itemId, time, edge);
  };

  const handleTimeChange = (
    visibleTimeStart: number,
    visibleTimeEnd: number,
    updateScrollCanvas: (start: number, end: number) => void,
    unit: Unit
  ) => {
    console.log("time change ============");
    console.log(new Date(visibleTimeStart));
    console.log(new Date(visibleTimeEnd));
    // debouncer
    // função que verifica se esta buscando mais itens da esquerda ou direita
    // disparar busca por dados de um mês frente ou atras
    updateScrollCanvas(visibleTimeStart, visibleTimeEnd);
  };

  return (
    <div className="custom-calendar-timeline-wrapper">
      <Typography>
        <Timeline
          groups={groups}
          items={items as any}
          keys={keys}
          itemTouchSendsClick={false}
          stackItems
          itemHeightRatio={0.75}
          canMove={false}
          canResize={false}
          lineHeight={40}
          defaultTimeStart={DEFAULT_TIME_START}
          defaultTimeEnd={DEFAULT_TIME_END}
          onTimeChange={handleTimeChange}
          itemRenderer={itemRenderer}
          onItemMove={handleItemMove}
          onItemResize={handleItemResize}
        />
      </Typography>
    </div>
  );
};

export default CustomCalendarTimeline;
