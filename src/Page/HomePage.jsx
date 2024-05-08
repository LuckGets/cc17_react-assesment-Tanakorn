import { Box, Typography, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import TaskItem from "../Components/TaskItem";

function HomePage() {
  const navigate = useNavigate();
  // set Task state
  const [task, setTask] = useState([]);
  const [inputTask, setInputTask] = useState("");

  // Handle Change Input
  const handleChangeInput = (e) => setInputTask(e.target.value);

  const handleLogOut = (e) => {
    e.preventDefault();
    const logoutResult = confirm("Are you sure you want to logout?");
    if (logoutResult) {
      navigate("/login");
    }
    return;
  };

  const handleAdd = () => {
    const newTask = [...task];
    newTask.push(inputTask);
    setTask(newTask);
  };
  return (
    <Box
      border="4px solid red"
      sx={{ width: "90vw", height: 1, paddingInline: "40px" }}
    >
      <Box>
        <Typography variant="h1">My Todo</Typography>
        <TextField
          sx={{ width: "100%" }}
          onChange={handleChangeInput}
          value={inputTask}
          label="new task"
        ></TextField>
      </Box>
      <TaskItem />
      <Box sx={{ width: "100%", height: 1 }}>
        <Button
          sx={{ width: "100%", paddingBlock: "20px", borderRadius: "20px" }}
          variant="contained"
          onClick={handleLogOut}
        >
          LOG OUT
        </Button>
      </Box>
    </Box>
  );
}

export default HomePage;
