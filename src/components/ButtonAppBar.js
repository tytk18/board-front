import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import SignInButton from "./SignInButton";
import LogOutButton from "./LogOutButton";
import { Cookies } from "react-cookie";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ButtonAppBar() {
  const cookies = new Cookies();
  const [log, setLog] = useState(false);
  console.log("11");
  useEffect(() => {
    axios
      .post("http://localhost:3000/user/token", {
        token: cookies.get("token"),
      })
      .then((res) => {
        console.log("22", res);
        if (res.data !== "") {
          console.log("왜 트루가 됨?");
          setLog(true);
        }
        console.log(log);
        console.log(res);
      });
  }, []);

  if (log) {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ textDecoration: "none", color: "#FFF" }}>
                {"OGS"}
              </Link>
            </Typography>
            <LogOutButton />
          </Toolbar>
        </AppBar>
      </Box>
    );
  } else {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ textDecoration: "none", color: "#FFF" }}>
                {"OGS"}
              </Link>
            </Typography>
            <SignInButton />
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}
