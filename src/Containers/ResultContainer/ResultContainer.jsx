import React from "react";
import ResultComponent from "../../Components/Result/ResultComponent";

const ResultContainer = (props) => {
  return (
    <>
      <ResultComponent name={props.name} />
    </>
  );
};

export default ResultContainer;
