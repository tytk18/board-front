import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

export default function DescriptionAlert(props) {
  const type = props.type;
  const message = props.message;
  if (type == 1) {
    return (
      <Stack
        sx={{
          width: "100%",
          border: "1px solid red",
          borderRadius: "1rem",
          overflow: "hidden",
        }}
        spacing={2}
      >
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {message} — <strong>check it out!</strong>
        </Alert>
      </Stack>
    );
  } else if (type == 2) {
    return (
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="warning">
          <AlertTitle>Warning</AlertTitle>
          {message} — <strong>check it out!</strong>
        </Alert>
      </Stack>
    );
  } else if (type == 3) {
    return (
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="info">
          <AlertTitle>Info</AlertTitle>
          {message} — <strong>check it out!</strong>
        </Alert>
      </Stack>
    );
  } else if (type == 4) {
    return (
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          {message} — <strong>check it out!</strong>
        </Alert>
      </Stack>
    );
  }
}
