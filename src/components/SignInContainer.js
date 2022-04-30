import ButtonAppBar from "./ButtonAppBar";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useState } from "react";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import DescriptionAlert from "./DescriptionAlert";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function SignInContainer() {
  const [values, setValues] = useState({ ID: "", PW: "" });

  const keyPress = (e) => {
    if (e.keyCode == 13) {
      onClick();
    }
  };

  const onClick = async () => {
    try {
      const res = await axios.post("http://localhost:3000/user/login", {
        email: values.ID,
        password: values.PW,
      });
      const token = res.data;
      cookies.set("token", token);
      console.log(token);
      navigator("/");
    } catch (e) {
      setError(true);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    setError(false);
  };

  const cookies = new Cookies();
  let navigator = useNavigate();

  const [isError, setError] = useState(false);

  return (
    <>
      <ButtonAppBar />
      <Container>
        <Stack justifyContent="center" alignItems="center">
          {isError ? (
            <Box sx={{ mt: 10, maxWidth: "20.2rem", mb: 2 }}>
              <DescriptionAlert
                type={1}
                message={
                  "We cannot find an account with that email or password"
                }
              />
            </Box>
          ) : (
            <Box sx={{ mt: 10 }}></Box>
          )}
          <Box
            sx={{
              height: 600,
              backgroundColor: "white",
              border: "1px solid transparent",
              // padding: "1rem",
              width: "100%",
              maxWidth: "20rem",
              boxShadow:
                "0 2px 10px 0 rgb(0 0 0 / 16%), 0 2px 5px 0 rgb(0 0 0 / 15%)",
            }}
          >
            <Box sx={{ padding: "1rem" }}>
              <h2 style={{ marginTop: 0, marginBottom: "1rem" }}>로그인</h2>
              <Stack
                alignContent="center"
                justifyContent="center"
                direction="column"
              >
                <TextField
                  sx={{ mb: 2 }}
                  id="filled-basic"
                  label="이메일"
                  variant="filled"
                  name="ID"
                  onKeyDown={keyPress}
                  onChange={handleChange}
                />

                <TextField
                  // type={"submit"}
                  id="filled-basic"
                  label="비밀번호"
                  type="password"
                  variant="filled"
                  name="PW"
                  onKeyDown={keyPress}
                  onChange={handleChange}
                />
                <Button
                  variant="contained"
                  sx={{ mt: 5 }}
                  value={""}
                  onClick={onClick}
                >
                  로그인
                </Button>
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
