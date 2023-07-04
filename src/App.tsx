import { add, getTime } from "date-fns";
import React, { useState } from "react";
import CustomCalendarTimeline from "./components/CustomCalendarTimeline";

function App() {
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
  ]);

  const [items, setItems] = useState([
    {
      id: 1,
      group: 1,
      title: "ITEM N° 1",
      start_time: getTime(new Date()),
      end_time: getTime(add(new Date(), { hours: 1 })),
      canMove: true,
      canResize: "both",
      className: "",
      bgColor: "#1F9E27",
      selectedBgColor: "rgba(244, 215, 151, 1)",
      color: "white",
    },
    {
      id: 2,
      group: 10,
      title: "ITEM N° 2",
      start_time: getTime(add(new Date(), { hours: -5 })),
      end_time: getTime(add(new Date(), { hours: 1 })),
      canMove: true,
      canResize: "both",
      className: "",
      bgColor: "#0065BB",
      selectedBgColor: "#71CBD0",
      color: "white",
    },
    {
      id: 3,
      group: 1,
      title: "ITEM N° 3",
      start_time: getTime(add(new Date(), { hours: -1 })),
      end_time: getTime(add(new Date(), { hours: 3 })),
      canMove: true,
      canResize: "both",
      className: "",
      bgColor: "#B71C1C",
      selectedBgColor: "rgba(244, 215, 151, 1)",
      color: "white",
    },
  ]);

  const onItemMove = (
    itemId: number,
    dragTime: number,
    newGroupOrder: number
  ) => {
    const group = groups[newGroupOrder];

    setItems(
      items.map((item) =>
        item.id === itemId
          ? Object.assign({}, item, {
              start_time: dragTime,
              end_time: dragTime + (item.end_time - item.start_time),
              group: group.id,
            })
          : item
      )
    );
  };

  const onItemResize = (
    itemId: number,
    time: number,
    edge: "right" | "left"
  ) => {
    setItems(
      items.map((item) =>
        item.id === itemId
          ? Object.assign({}, item, {
              start_time: edge === "left" ? time : item.start_time,
              end_time: edge === "left" ? item.end_time : time,
            })
          : item
      )
    );
  };

  return (
    <div>
      <CustomCalendarTimeline
        keys={keys}
        groups={groups}
        items={items}
        onItemMove={onItemMove}
        onItemResize={onItemResize}
      />
    </div>
  );
}

export default App;
