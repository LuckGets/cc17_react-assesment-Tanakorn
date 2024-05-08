import { Box, Typography, Button, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import TaskItem from "../Components/TaskList";
import { createTodo, deleteTodo, getAllTodo } from "../APIs/Axios";

function HomePage() {
  const [task, setTask] = useState([]);
  const [inputTask, setInputTask] = useState("");

  useEffect(() => {
    const fetchAllData = async () => {
      const result = await getAllTodo();
      setTask(result);
      console.log(task);
    };
    fetchAllData();
  }, []);

  const navigate = useNavigate();
  // set Task state

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

  // Handle Add
  const handleAdd = async () => {
    try {
      const res = await createTodo(inputTask);
      console.log(res);
      const newTask = [...task];
      newTask.push({ title: inputTask });
      setTask(newTask);
      setInputTask("");
    } catch (e) {
      console.log(e);
    }
  };

  // Handle Delete
  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      const foundedIndex = task.findIndex((item) => item.id === id);
      if (foundedIndex !== -1) {
        const newTask = [...task];
        newTask.splice(foundedIndex, 1);
        setTask(newTask);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box
      border="4px solid red"
      sx={{ width: "90vw", height: 1, paddingInline: "40px" }}
    >
      <Box>
        <Typography variant="h1">My Todo</Typography>
        <Box display="flex" justifyContent="space-between">
          <TextField
            sx={{ width: "90%" }}
            onChange={handleChangeInput}
            value={inputTask}
            label="new task"
          ></TextField>
          {inputTask && (
            <Button onClick={handleAdd} sx={{ paddingBlock: "18px" }}>
              Add
            </Button>
          )}
        </Box>
      </Box>
      {task.map((item) => (
        <TaskItem
          handleDelete={handleDelete}
          id={item.id}
          key={item.id}
          task={item}
        />
      ))}
      <Box sx={{ width: "100%", height: 1 }}>
        <Button
          sx={{
            width: "100%",
            paddingBlock: "20px",
            borderRadius: "20px",
            fontSize: "2rem",
            backgroundColor: "#29292f"
          }}
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
