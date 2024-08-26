import React from "react";
import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
function SeccusAlert() {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert variant="filled" severity="success">
        This is a filled success Alert.
      </Alert>
    </Stack>
  );
}

export default SeccusAlert;
