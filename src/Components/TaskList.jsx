import React, { useState } from "react";
import { Box, Button, Checkbox, TextField, Typography } from "@mui/material";
import { updateTodo } from "../APIs/Axios";

export default function TaskList({ task, handleDelete, id }) {
  const [text, setText] = useState(task.title);
  const [newText, setNewText] = useState(task.title);
  const [isEdit, setIsEdit] = useState(false);
  const [checked, setChecked] = useState(false);

  // Handle checkbox
  const handleCheckBox = async (event, id) => {
    console.log(event, id);
    setChecked(event.target.checked);
    console.log(!checked);
    const res = await updateTodo(id, { title: text, status: !checked });
  };

  // Handle Edit
  const handleEdit = async (id) => {
    setText(newText);
    const res = await updateTodo(id, { title: newText });
    console.log(res);
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      sx={{ margin: { marginBlock: "20px" } }}
    >
      <Box display="flex" alignItems="center">
        {isEdit ? (
          <TextField
            sx={{
              input: { color: "#dadada", fontSize: "2rem" },
              borderColor: "white",
            }}
            onChange={(e) => setNewText(e.target.value)}
            value={newText}
            borderColor="white"
          ></TextField>
        ) : (
          <>
            <Checkbox
              sx={{
                border: { color: "#0e0e11" },
                "& .MuiSvgIcon-root": { fontSize: 45 },
                margin: {marginInline: "20px"}
              }}
              onChange={(e) => handleCheckBox(e, id)}
              checked={checked}
              color="success"
            />
            <Typography
              sx={{ cursor: "pointer", color: "#dadada", fontSize: "2rem" }}
              onClick={(e) => setIsEdit(!isEdit)}
              value={text}
              variant="h6"
              marginBlock="20px"
            >
              {text}
            </Typography>
          </>
        )}
      </Box>
      <Button
        onClick={(e) => {
          if (!isEdit) {
            handleDelete(id);
          } else {
            handleEdit(id);
            setIsEdit(!isEdit);
          }
        }}
        variant="text"
        sx={{ fontSize: "2rem", color: "#dadada" }}
      >
        {isEdit ? "Save" : "X"}
      </Button>
    </Box>
  );
}
