import Button from "@mui/material/Button";
import { Cookies } from "react-cookie";

export default function LogOutButton() {
  const cookies = new Cookies();

  return (
    <Button
      color="inherit"
      onClick={() => {
        cookies.remove("token");
        window.location.href = "/";
      }}
    >
      Logout
    </Button>
  );
}
