import React, { useState } from "react";
import Timeline, { Unit } from "react-calendar-timeline";
import { add, getTime } from "date-fns";
import { Typography } from "@mui/material";
import TimelineItem from "./TimelineItem";
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
  getData: (fromDate: number, toDate: number) => void;
}

const CustomCalendarTimeline: React.FC<CustomCalendarTimelineProps> = ({
  keys,
  groups,
  items,
  onItemMove,
  onItemResize,
  getData,
}) => {
  moment.locale("pt-br");
  const DEFAULT_TIME_START = add(new Date(), { hours: -12 });
  const DEFAULT_TIME_END = add(new Date(), { hours: 12 });
  const MAX_ZOOM = 1000 * 60 * 60 * 24 * 31;

  const getTriggersToVisibleTime = (timeStart: number, timeEnd: number) => {
    const step = timeEnd - timeStart;
    const leftTrigger = timeStart - step;
    const rightTrigger = timeEnd + step;
    return [leftTrigger, rightTrigger];
  };

  const [initialLeftTrigger, initialRightTrigger] = getTriggersToVisibleTime(
    getTime(DEFAULT_TIME_START),
    getTime(DEFAULT_TIME_END)
  );

  const [earliestVisibleTime, setEarliestVisibleTime] = useState<number>();
  const [latestVisibleTime, setLatestVisibleTime] = useState<number>();
  const [leftTrigger, setLeftTrigger] = useState<number>(initialLeftTrigger);
  const [rightTrigger, setRightTrigger] = useState<number>(initialRightTrigger);

  const itemRenderer = ({
    item,
    timelineContext,
    itemContext,
    getItemProps,
    getResizeProps,
  }: any) => {
    return (
      <TimelineItem
        item={item}
        itemContext={itemContext}
        getItemProps={getItemProps}
        getResizeProps={getResizeProps}
      />
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
    setEarliestVisibleTime(visibleTimeStart);
    setLatestVisibleTime(visibleTimeEnd);
    if (visibleTimeStart < leftTrigger || rightTrigger < visibleTimeEnd) {
      const [newLeftTrigger, newRightTrigger] = getTriggersToVisibleTime(
        visibleTimeStart,
        visibleTimeEnd
      );
      getData(newLeftTrigger, newRightTrigger); // then setar novos triggers
    }
    // envolver o que esta dentro do if numa função com debouncer
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
          visibleTimeStart={earliestVisibleTime}
          visibleTimeEnd={latestVisibleTime}
          onTimeChange={handleTimeChange}
          itemRenderer={itemRenderer}
          onItemMove={handleItemMove}
          onItemResize={handleItemResize}
          maxZoom={MAX_ZOOM}
        />
      </Typography>
    </div>
  );
};

export default CustomCalendarTimeline;
