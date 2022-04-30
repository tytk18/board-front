import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

export default function AskRegister() {
  let navigator = useNavigate();
  return (
    <Stack justifyContent="center" alignItems="center">
      <h3>OGS에 처음 오셨나요?</h3>
      <Button
        variant="contained"
        sx={{ mt: -1 }}
        value={""}
        onClick={() => {
          navigator("/register");
        }}
      >
        회원가입
      </Button>
    </Stack>
  );
}
