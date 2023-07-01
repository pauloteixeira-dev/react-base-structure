import React, { useState } from "react";
import Timeline from "react-calendar-timeline";
import "react-calendar-timeline/lib/Timeline.css";
import { add, getTime } from "date-fns";
import { Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import "../../App.css";
import moment from "moment";
import "moment/locale/pt-br";

const CustomCalendarTimeline = () => {
  moment.locale("pt-br");
  var keys = {
    groupIdKey: "id",
    groupTitleKey: "title",
    groupRightTitleKey: "rightTitle",
    itemIdKey: "id",
    itemTitleKey: "title",
    itemDivTitleKey: "title",
    itemGroupKey: "group",
    itemTimeStartKey: "start_time",
    itemTimeEndKey: "end_time",
    groupLabelKey: "title",
  };

  const [groups] = useState([
    { id: 1, title: "group 1" },
    { id: 2, title: "group 2" },
    { id: 3, title: "group 3" },
    { id: 4, title: "group 4" },
    { id: 5, title: "group 5" },
    { id: 6, title: "group 6" },
    { id: 7, title: "group 7" },
    { id: 8, title: "group 8" },
    { id: 9, title: "group 9" },
    { id: 10, title: "group 10" },
    { id: 11, title: "group 11" },
    { id: 12, title: "group 12" },
    { id: 13, title: "group 13" },
    { id: 14, title: "group 14" },
    { id: 15, title: "group 15" },
    { id: 16, title: "group 16" },
    { id: 17, title: "group 17" },
    { id: 18, title: "group 18" },
    { id: 19, title: "group 19" },
    { id: 20, title: "group 20" },
    { id: 21, title: "group 21" },
    { id: 22, title: "group 22" },
    { id: 23, title: "group 23" },
    { id: 24, title: "group 24" },
    { id: 25, title: "group 25" },
    { id: 26, title: "group 26" },
    { id: 27, title: "group 27" },
    { id: 28, title: "group 28" },
    { id: 29, title: "group 29" },
    { id: 30, title: "group 30" },
    { id: 31, title: "group 31" },
    { id: 32, title: "group 32" },
  ]);

  const [items] = useState([
    {
      id: 1,
      group: 1,
      title: "item 1",
      start_time: getTime(new Date()),
      end_time: getTime(add(new Date(), { hours: 1 })),
      canMove: true,
      canResize: "both",
      className: "",
      bgColor: "rgba(244, 215, 151, 0.6)",
      selectedBgColor: "rgba(244, 215, 151, 1)",
      color: "#c48909",
    },
    {
      id: 2,
      group: 10,
      title: "item 2",
      start_time: getTime(add(new Date(), { hours: -5 })),
      end_time: getTime(add(new Date(), { hours: 1 })),
      canMove: true,
      canResize: "both",
      className: "",
      bgColor: "blue",
      selectedBgColor: "blueviolet",
      color: "#c48909",
    },
    {
      id: 3,
      group: 28,
      title: "item 3",
      start_time: getTime(add(new Date(), { hours: -1 })),
      end_time: getTime(add(new Date(), { hours: 3 })),
      canMove: true,
      canResize: "both",
      className: "",
      bgColor: "rgba(244, 215, 151, 0.6)",
      selectedBgColor: "rgba(244, 215, 151, 1)",
      color: "#c48909",
    },
  ]);

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
        ? "red"
        : item.selectedBgColor
      : item.bgColor;
    const borderColor = itemContext.resizing ? "red" : item.color;
    return (
      <div
        {...getItemProps({
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
        })}
      >
        {itemContext.useResizeHandle ? <div {...leftResizeProps} /> : null}
        <div className="table-custom-item-wrapper">
          <Tooltip
            arrow
            style={{ maxWidth: "none !important" }}
            title={
              <div
                style={{
                  height: "100px",
                  width: "400px",
                  backgroundColor: "red",
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

  const handleItemMove = (itemId: any, dragTime: any, newGroupOrder: any) => {
    const group = groups[newGroupOrder];

    console.log({
      items: items.map((item) =>
        item.id === itemId
          ? Object.assign({}, item, {
              start_time: dragTime,
              end_time: dragTime + (item.end_time - item.start_time),
              group: group.id,
            })
          : item
      ),
    });

    console.log("Moved", itemId, dragTime, newGroupOrder);
  };

  const handleItemResize = (itemId: any, time: any, edge: any) => {
    console.log({
      items: items.map((item) =>
        item.id === itemId
          ? Object.assign({}, item, {
              start_time: edge === "left" ? time : item.start_time,
              end_time: edge === "left" ? item.end_time : time,
            })
          : item
      ),
    });
  };

  return (
    <div>
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
        defaultTimeStart={add(new Date(), { hours: -12 })}
        defaultTimeEnd={add(new Date(), { hours: 12 })}
        onTimeChange={(st, end, update) => {
          console.log("time change ============");
          console.log(new Date(st));
          console.log(new Date(end));
          // debouncer
          // função que verifica se esta buscando mais itens da esquerda ou direita
          // disparar busca por dados de um mês frente ou atras
          update(st, end);
        }}
        itemRenderer={itemRenderer}
        onItemMove={handleItemMove}
        onItemResize={handleItemResize}
      />
    </div>
  );
};

export default CustomCalendarTimeline;
