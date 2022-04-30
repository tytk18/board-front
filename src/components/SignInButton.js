import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function SignInButton() {
  let navigator = useNavigate();

  return (
    <Button
      color="inherit"
      onClick={() => {
        navigator("/sign-in");
      }}
    >
      Login
    </Button>
  );
}
