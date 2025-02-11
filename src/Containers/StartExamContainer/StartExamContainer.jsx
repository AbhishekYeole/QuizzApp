import React from "react";
import StartExamComponent from "../../Components/StartExam/StartExamComponent";

const StartExamContainer = (props) => {
  return (
    <>
      <StartExamComponent name={props.name} />
    </>
  );
};

export default StartExamContainer;
