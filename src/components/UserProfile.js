import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { useEffect, useState } from "react";
import axios from "axios";
import CardContent from "@mui/material/CardContent";

export default function UserProfile() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/user").then((res) => {
      setUser(res.data);
    });
  }, []);

  return (
    <Container>
      <Grid sx={{ mt: 8 }} container spacing={2}>
        <Grid item xs={4} sm={4} md={4} lg={4}>
          <Card>
            <CardMedia component="" sx={{ aspectRatio: "0.809" }} alt="aaa" />
            <CardContent></CardContent>
          </Card>
        </Grid>
        <Grid item xs={8} sm={8} md={8} lg={8}>
          <Card
            sx={{
              border: "1px solid transparent",
              boxShadow:
                "0 2px 10px 0 rgb(0 0 0 / 16%), 0 2px 5px 0 rgb(0 0 0 / 15%)",
            }}
          >
            <CardMedia
              component="img"
              sx={{ aspectRatio: "1.618/1" }}
              alt="aaa"
              image={"/ImageTopRight.png"}
            />
          </Card>
        </Grid>
        {/*<Grid item xs={8} sm={8} md={8} lg={8}>*/}
        {/*  <Card*/}
        {/*    sx={{*/}
        {/*      // aspectRatio: "1.618/1",*/}
        {/*      backgroundColor: "white",*/}
        {/*      border: "1px solid transparent",*/}
        {/*      // padding: "1rem",*/}
        {/*      width: "100%",*/}
        {/*      maxWidth: "20rem",*/}
        {/*      boxShadow:*/}
        {/*        "0 2px 10px 0 rgb(0 0 0 / 16%), 0 2px 5px 0 rgb(0 0 0 / 15%)",*/}
        {/*    }}*/}
        {/*  ></Card>*/}
        {/*</Grid>*/}
      </Grid>
    </Container>
  );
}
