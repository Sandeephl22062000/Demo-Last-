import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Food } from "./components/Food/Food";
import TrainerCards from "./components/Trainer-Info/TrainerCards";
import TrainerProfile from "./components/Trainer-Info/TrainerProfile";
import Exercises from "./components/Exercises/Exercises";
import ExerciseVideos from "./components/Exercises/ExerciseVideo";
import Signup from "./components/Auth/signup";
import UserInput from "./components/Food/userInput";
import Login from "./components/Auth/login";
import CalorieDetail from "./components/Food/pageEdited";
import ResultPage from "./components/Food/ResultPage";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/food/:calories" element={<CalorieDetail />} />
          <Route path="/trainer" element={<TrainerCards />} />
          <Route path="/trainer/:id" element={<TrainerProfile />} />
          <Route path="/usersdetail" element={<UserInput />} />
          {/* <Route path="/food/:calories" element={<Food />} /> */}
          <Route path="/exercise" element={<Exercises />} />
          <Route
            path="/execiseVideos/:muscle/:exercise"
            element={<ExerciseVideos />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
