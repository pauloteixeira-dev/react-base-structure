import React, { useState } from "react";
import Timeline from "react-calendar-timeline";
import "react-calendar-timeline/lib/Timeline.css";
import { add, getTime } from "date-fns";
import { Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import "./App.css";
import moment from "moment";
import "moment/locale/pt-br";
import CustomCalendarTimeline from "./components/CustomCalendarTimeline";

function App() {
  return (
    <div>
      {/* <Timeline
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
      /> */}
      <CustomCalendarTimeline />
    </div>
  );
}

export default App;
