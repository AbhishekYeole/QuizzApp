import React from "react";
import ViewAllQuestionsComponent from "../../Components/ViewAllQuestionsComponent/ViewAllQuestionsComponent";

const ViewAllQuestionsContainer = (props) => {
  return (
    <>
      <ViewAllQuestionsComponent name={props.name} />
    </>
  );
};

export default ViewAllQuestionsContainer;
