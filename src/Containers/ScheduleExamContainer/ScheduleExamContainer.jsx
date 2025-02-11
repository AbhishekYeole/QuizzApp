import React from "react";
import ScheduleExamComponent from "../../Components/ScheduleExam/ScheduleExamComponent";

const ScheduleExamContainer = (props) => {
  return (
    <>
      <ScheduleExamComponent name={props.name} />
    </>
  );
};

export default ScheduleExamContainer;
