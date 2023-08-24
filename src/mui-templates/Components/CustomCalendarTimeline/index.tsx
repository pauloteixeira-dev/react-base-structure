import React, { useCallback } from "react";
import Timeline, { Unit } from "react-calendar-timeline";
import { add } from "date-fns";
import { Typography } from "@mui/material";
import moment from "moment";
import "react-calendar-timeline/lib/Timeline.css";
import "moment/locale/pt-br";
import { StyledCalendarTimelineContainer } from "./styles";
import { debounce } from "lodash";
import { IOSFilterParsedForm } from "../../model/OrdemDeServicoCalendar";

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

interface IItemRendererProps {
  item: any;
  timelineContext: any;
  itemContext: any;
  getItemProps: any;
  getResizeProps: any;
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
  canMove?: boolean;
  canResize?: string | boolean;
  className: string;
  bgColor: string;
  selectedBgColor: string;
  color: string;
}

interface CustomCalendarTimelineProps {
  maxHeight?: string;
  keys: IKeys;
  groups: IGroup[];
  items: IItem[];
  getData: (
    fromDate: number,
    toDate: number,
    filters?: IOSFilterParsedForm
  ) => void;
  defaultTimeStart?: Date;
  defaultTimeEnd?: Date;
  filters?: IOSFilterParsedForm;
  leftTrigger: number;
  rightTrigger: number;
  timelineRef: React.MutableRefObject<any>;
  renderCustomItem?: (props: IItemRendererProps) => React.ReactNode;
  lineHeight?: number;
}

export const getTriggersToVisibleTime = (
  timeStart: number,
  timeEnd: number
) => {
  const step = timeEnd - timeStart;
  const leftTrigger = timeStart - step;
  const rightTrigger = timeEnd + step;
  return [leftTrigger, rightTrigger];
};

const CustomCalendarTimeline: React.FC<CustomCalendarTimelineProps> = ({
  keys,
  groups,
  items,
  getData,
  maxHeight,
  defaultTimeStart,
  defaultTimeEnd,
  filters,
  leftTrigger,
  rightTrigger,
  timelineRef,
  renderCustomItem,
  lineHeight = 40,
}) => {
  moment.locale("pt-br");
  const DEFAULT_TIME_START =
    defaultTimeStart || add(new Date(), { hours: -12 });
  const DEFAULT_TIME_END = defaultTimeEnd || add(new Date(), { hours: 12 });

  const MAX_ZOOM = 1000 * 60 * 60 * 24 * 31; // 1 month in milliseconds

  const DUMMY_GROUP = { id: 0, title: "" };
  const DUMMY_GROUP_ARRAY = [DUMMY_GROUP];

  const notEmptyGroups =
    groups?.length && groups.length > 0 ? groups : DUMMY_GROUP_ARRAY;

  const itemRenderer = ({
    item,
    timelineContext,
    itemContext,
    getItemProps,
    getResizeProps,
  }: any) => {
    if (!renderCustomItem) {
      return undefined;
    }
    return renderCustomItem({
      item,
      timelineContext,
      itemContext,
      getItemProps,
      getResizeProps,
    });
  };

  const handleGetData = (visibleTimeStart: number, visibleTimeEnd: number) => {
    getData(visibleTimeStart, visibleTimeEnd, filters);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedGetData = useCallback(
    debounce(
      (visibleTimeStart: number, visibleTimeEnd: number) =>
        handleGetData(visibleTimeStart, visibleTimeEnd),
      500
    ),
    [filters]
  );

  const handleTimeChange = (
    visibleTimeStart: number,
    visibleTimeEnd: number,
    updateScrollCanvas: (start: number, end: number) => void,
    unit: Unit
  ) => {
    if (visibleTimeStart < leftTrigger || rightTrigger < visibleTimeEnd) {
      debouncedGetData(visibleTimeStart, visibleTimeEnd);
    }
    updateScrollCanvas(visibleTimeStart, visibleTimeEnd);
  };

  return (
    <StyledCalendarTimelineContainer maxHeight={maxHeight}>
      <Typography>
        <Timeline
          ref={timelineRef}
          groups={notEmptyGroups}
          items={items as any}
          keys={keys}
          itemTouchSendsClick={false}
          stackItems
          itemHeightRatio={0.75}
          canMove={false}
          canResize={false}
          lineHeight={lineHeight}
          defaultTimeStart={DEFAULT_TIME_START}
          defaultTimeEnd={DEFAULT_TIME_END}
          onTimeChange={handleTimeChange}
          itemRenderer={itemRenderer}
          maxZoom={MAX_ZOOM}
        />
      </Typography>
    </StyledCalendarTimelineContainer>
  );
};

export default CustomCalendarTimeline;
