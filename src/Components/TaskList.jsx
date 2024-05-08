import React, { useState } from "react";
import { Box, Button, Checkbox, TextField, Typography } from "@mui/material";
import { updateTodo } from "../APIs/Axios";

export default function TaskList({ task, handleDelete, id }) {
  const [text, setText] = useState(task.title);
  const [newText, setNewText] = useState(task.title);
  const [isEdit, setIsEdit] = useState(false);
  const [checked, setChecked] = useState(false);

  // Handle checkbox
  const handleCheckBox = async (event,id) => {
    console.log(event,id)
    setChecked(event.target.checked);
    console.log(!checked)
    const res = await updateTodo(id, {status : (!checked)});
  };

  // Handle Edit
  const handleEdit = async (id) => {
    setText(newText);
    const res = await updateTodo(id, {title : newText});
    console.log(res);
  };

  return (
    <Box display="flex" justifyContent="space-between">
      <Box display="flex" alignItems="center">
        {isEdit ? (
          <TextField
            onChange={(e) => setNewText(e.target.value)}
            value={newText}
          ></TextField>
        ) : (
          <>
            <Checkbox onChange={e => handleCheckBox(e,id)} checked={checked}/>
            <Typography
              sx={{ cursor: "pointer" }}
              onClick={(e) => setIsEdit(!isEdit)}
              value={text}
              variant="h6"
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
          }
          setIsEdit(!isEdit);
        }}
        variant="text"
        sx={{ fontSize: "1.4rem" }}
      >
        {isEdit ? "Save" : "X"}
      </Button>
    </Box>
  );
}
