import React, { useState } from "react";
import { Box, Button, Checkbox, Typography } from "@mui/material";

function TaskItem() {
  return (
    <Box display="flex" justifyContent="space-between">
      <Box display="flex" alignItems="center">
        <Checkbox />
        <Typography variant="h6">Here's a task item</Typography>
      </Box>
      <Button variant="text" sx={{ fontSize: "1.4rem" }}>
        X
      </Button>
    </Box>
  );
}

export default TaskItem;
