import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ResultPage from "./ResultPage";

const UserInput = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("");
  const [Goal, setGoal] = useState("");
  const [showResultpage, setShowResultpage] = useState(false);
  const [maintainceCalories, setmaintainceCalories] = useState(0);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const sendInput = async () => {
    const sendData = await axios.post(
      "http://localhost:3000/api/users/caloriecalculator/savedetail",
      {
        weight,
        height,
        age,
        gender,
        activity,
      }
    );
    setmaintainceCalories(sendData.data.data);
  };
  const changeHandler = async () => {
    console.log(weight, height, age, gender, activity);
    sendInput();
    navigate(`/food/${maintainceCalories}`)
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
        <>
          <h3 style={{ textAlign: "center", marginTop: "50px" }}>
            Provide your details to calculate your Calories requirement
          </h3>
          <Container
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "50%",
              gap: "16px",
              marginTop: "60px",
              marginBottom: "40px",
              padding: "20px",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              id="outlined-required"
              value={height}
              label="Height in cm"
              type="number"
              onChange={(e) => {
                setHeight(e.target.value);
              }}
              sx={{ width: "100%" }}
            />
            <TextField
              required
              id="outlined-disabled"
              value={weight}
              label="Weight in kg"
              type="number"
              onChange={(e) => {
                setWeight(e.target.value);
              }}
              sx={{ width: "100%" }}
            />
            <TextField
              required
              id="outlined-disabled"
              value={age}
              label="Age"
              type="number"
              onChange={(e) => {
                setAge(e.target.value);
              }}
              sx={{ width: "100%" }}
            />
            <FormControl sx={{ width: "100%" }}>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gender}
                label="Gender"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel id="demo-simple-select-label">Activity</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={activity}
                label="Activity"
                onChange={(e) => {
                  setActivity(e.target.value);
                }}
              >
                <MenuItem value="Sedentary">
                  Sedentary: little or no Exercise
                </MenuItem>
                <MenuItem value="Light">
                  Light: exercise 1-3 times/week
                </MenuItem>
                <MenuItem value="Moderate">
                  Moderate: exercise 4-5 times/week
                </MenuItem>
                <MenuItem value="VeryActive">
                  Very Active: exercise 6-7 times/week
                </MenuItem>
                <MenuItem value="ExtraActive">
                  Extra Active: very intense exercise daily, or physical job
                </MenuItem>
              </Select>
            </FormControl>
            <Button
              onClick={changeHandler}
              sx={{
                color: "white",
                backgroundColor: "red",
                width: "155px",
                height: "63px",
                fontSize: "19px",
              }}
            >
              Submit
            </Button>
            <div>Maintaince Calorie{maintainceCalories}</div>
          </Container>

    
    </>
  );
};
export default UserInput;
