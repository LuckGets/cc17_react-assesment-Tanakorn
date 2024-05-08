import React, { useState } from "react";
import { Box, Button, Checkbox, TextField, Typography } from "@mui/material";

export default function TaskList({ task, handleDelete }) {
  const [text, setText] = useState(task.task);
  const [newText, setNewText] = useState(task.task);
  const [isEdit, setIsEdit] = useState(false);

  // Handle Edit
  const handleEdit = () => setText(newText);

  const handleOnChange = (e) => setNewText(e.target.value);

  return (
    <Box display="flex" justifyContent="space-between">
      <Box display="flex" alignItems="center">
        {isEdit ? (
          <TextField onChange={handleOnChange} value={newText}></TextField>
        ) : (
          <>
            <Checkbox />
            <Typography
              sx={{ cursor: "pointer" }}
              onClick={e => setIsEdit(!isEdit)}
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
            handleDelete(task.id);
          } else {
            handleEdit;
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
