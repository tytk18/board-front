import Container from "@mui/material/Container";
import ButtonAppBar from "./ButtonAppBar";
import Grid from "@mui/material/Grid";
import GameCard from "./GameCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Cookies } from "react-cookie";

export default function MainPageContainer() {
  const [values, setValues] = useState({ ID: "", PW: "" });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value }); //values를 저장하는 함수, values그대로 넣어주는데 Name이라는 key를 써서 value를 수정함
  };

  const [games, setGames] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/game").then((res) => {
      setGames(res.data);
    });
  }, []);

  return (
    <Container>
      <ButtonAppBar />
      <Grid sx={{ mt: 8 }} container spacing={2}>
        {games.map((e, idx) => {
          return (
            <Grid key={idx} item xs={6} sm={6} md={6} lg={6}>
              <GameCard
                name={e.name}
                explanation={e.explanation}
                image={`${e.imageUrl}`}
              />
            </Grid>
          );
        })}

        <Grid item xs={6} sm={6} md={6} lg={6}>
          <GameCard
            name={"엘데니아"}
            explanation={
              "엘데니아는 보드게임 도미니언에서 영감을 얻은 덱 빌딩 게임입니다."
            }
            image={"/ImageEldenia.jpg"}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <GameCard
            name={"하트"}
            explanation={"하트는 플레잉 카드를 이용한 트릭테이킹 게임입니다."}
            image={"/ImageHeart.jpeg"}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <GameCard
            name={"하트"}
            explanation={"하트는 플레잉 카드를 이용한 트릭테이킹 게임입니다."}
            image={"/ImageHeart.jpeg"}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
