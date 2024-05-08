import { Box, Typography, Button, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TaskItem from "../Components/TaskList";
import { createTodo, deleteTodo, getAllTodo } from "../APIs/Axios";
import Rocket from "../Graphics/rocket-svgrepo-com.png";

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
      navigate("/");
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
      sx={{
        width: "90vw",
        height: 1,
        paddingInline: { xs: "60px", md: "100px" },
        marginBlock: "80px",
      }}
    >
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h1">Todo-List</Typography>
          <Box
            borderRadius={5}
            backgroundColor="#24242d"
            sx={{
              padding: { md: "30px", sm: "10px", xs: "none" },
              maxWidth: { md: "150px", sm: "80px", xs: "50px" },
              marginInline:{md:"50px", sm: "10px", xs: "none"}
            }}
            marginInline="50px"
          >
            <img src={Rocket} width="100%" height="100%"></img>
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <TextField
            sx={{
              width: "90%",
              input: { color: "#9494b8", fontSize: "2rem" },
              label: { color: "#9494b8", fontSize: "2rem" },
              border: { border: "none", borderBottom: "5px solid #29292f" },
              margin: { marginBlock: "20px" },
            }}
            onChange={handleChangeInput}
            value={inputTask}
            label="Add your new task!"
          ></TextField>
          {inputTask && (
            <Button
              variant="contained"
              onClick={handleAdd}
              sx={{
                padding: { paddingInline: "40px", paddingBlock: "10px" },
                fontSize: "1.5rem",
                marginInline: "30px",
                backgroundColor: "#dadada",
                color: "black",
              }}
            >
              Add!
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
      <Box sx={{ width: "100%", height: 1, margin: { marginBlock: "150px" } }}>
        <Button
          sx={{
            width: "100%",
            paddingBlock: "20px",
            borderRadius: "20px",
            fontSize: "2rem",
            backgroundColor: "#29292f",
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
