import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import AddNewQuestionsContainer from "../Containers/AddNewQuestionsContainer/AddNewQuestionsContainer";
import ViewAllQuestionsContainer from "../Containers/ViewAllQuestionsContainer/ViewAllQuestionsContainer";
import ScheduleExamContainer from "../Containers/ScheduleExamContainer/ScheduleExamContainer";
import StartExamContainer from "../Containers/StartExamContainer/StartExamContainer";
import ResultContainer from "../Containers/ResultContainer/ResultContainer";

const AppRoute = () => {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Quizz App
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="navbar-nav">
                <NavLink to="/newquestion" className="nav-link active">
                  Add New Questions
                </NavLink>
                <NavLink to="/viewquestion" className="nav-link active">
                  View All Questions
                </NavLink>
                <NavLink to="/schedule" className="nav-link active">
                  Schedule Exam
                </NavLink>
                <NavLink to="/startexam" className="nav-link active">
                  Start Exam
                </NavLink>
                <NavLink to="/result" className="nav-link active">
                  Result
                </NavLink>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<h1>App component</h1>} />
          <Route
            path="/newquestion"
            element={<AddNewQuestionsContainer name="Add New Questions" />}
          />
          <Route
            path="/viewquestion"
            element={<ViewAllQuestionsContainer name="View All Questions" />}
          />
          <Route
            path="/schedule"
            element={<ScheduleExamContainer name="Schedule Exam" />}
          />
          <Route
            path="/startexam"
            element={<StartExamContainer name="Start Exam" />}
          />
          <Route path="/result" element={<ResultContainer name="Result" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoute;
