import React from "react";
import AddNewQuestionsComponent from "../../Components/AddNewQuestions/AddNewQuestionsComponent";

const AddNewQuestionsContainer = (props) => {
  return (
    <>
      <AddNewQuestionsComponent name={props.name} />
    </>
  );
};

export default AddNewQuestionsContainer;
