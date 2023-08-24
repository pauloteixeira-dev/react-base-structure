import styled from "styled-components";

interface IStyledCalendarTimelineContainerProps {
  maxHeight?: string;
}

export const StyledCalendarTimelineContainer = styled.div<IStyledCalendarTimelineContainerProps>`
  max-height: ${(props: IStyledCalendarTimelineContainerProps) =>
    props.maxHeight};
  width: 100%;
  overflow-y: scroll;
  position: relative;
  display: block;
  background-color: white;
  border: 2px solid #cccccc;
  border-radius: 8px;

  .rct-header-root {
    background-color: white !important;
    color: #cccccc;
    border: 1px solid;
    height: 120px;

    position: sticky;
    top: 0;
    z-index: 1000;

    .rct-calendar-header > div {
      height: 60px !important;
    }
  }

  .rct-header-root span {
    color: #cccccc;
    font-size: 16px;
    font-weight: 700;
    line-height: 15px;
  }

  .rct-dateHeader {
    background-color: white !important;
  }

  .rct-sidebar-row {
    padding-left: 8px !important;
    font-weight: 400;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.8);
  }
`;
