import MainPageContainer from "../components/MainPageContainer";
import { Cookies } from "react-cookie";
import UserProfile from "../components/UserProfile";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MainPage() {
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
      <div>
        <UserProfile />
        <MainPageContainer />
      </div>
    );
  } else {
    return (
      <div>
        <MainPageContainer />
      </div>
    );
  }
}
