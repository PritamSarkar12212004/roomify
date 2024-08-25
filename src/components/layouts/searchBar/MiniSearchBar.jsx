import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
function MiniSearchBar() {
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "17ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="standard-basic" label="Search Area" variant="standard" />
      </Box>
    </div>
  );
}

export default MiniSearchBar;
