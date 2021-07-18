import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  MonthView,
  Appointments,
  AppointmentTooltip,
  Toolbar,
  ViewSwitcher,
  DayView,
  TodayButton,
  DateNavigator,
  AppointmentForm,
  ConfirmationDialog,
} from "@devexpress/dx-react-scheduler-material-ui";


const Schedule = () => {
  var dt = new Date();
  let curr = dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate();

  const getItemsFromStorage = localStorage.getItem("schedulerData")
    ? JSON.parse(localStorage.getItem("schedulerData"))
    : [];

  const [demoData, setDemoData] = useState(getItemsFromStorage);

  const commitChanges = ({ added, changed, deleted }) => {
    if (added) {
      const startingAddedId =
        demoData.length > 0 ? demoData[demoData.length - 1].id + 1 : 0;
      let updated = [...demoData, { id: startingAddedId, ...added }];
      localStorage.setItem("schedulerData", JSON.stringify(updated));
      setDemoData(updated);
    }
    if (changed) {
      let data = [...demoData];

      let edited = data.map((appointment) =>
        changed[appointment.id]
          ? { ...appointment, ...changed[appointment.id] }
          : appointment
      );
      localStorage.setItem("schedulerData", JSON.stringify(edited));
      setDemoData(edited);
    }
    if (deleted !== undefined) {
      let data = [...demoData];
      let filtered = data.filter((appointment) => appointment.id !== deleted);
      localStorage.setItem("schedulerData", JSON.stringify(filtered));
      setDemoData(filtered);
    }
  };
  return (
    <div>
      
      <Paper className="paper" elevation={3}>
        <Scheduler data={demoData}>
          <ViewState defaultCurrentDate={curr} />
          <EditingState onCommitChanges={commitChanges} />
          <IntegratedEditing />
          <MonthView />
          <DayView />
          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <ViewSwitcher />
          <Appointments />
          <AppointmentTooltip showCloseButton showOpenButton />
          <AppointmentForm />
          <ConfirmationDialog />
        </Scheduler>
      </Paper>
    </div>
  );
};

export default Schedule;
