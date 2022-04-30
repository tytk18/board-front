import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function GameCard(props) {
  const name = props.name;
  const explanation = props.explanation;
  const image = props.image;
  return (
    <Card variant="outlined">
      <CardActionArea sx={{ p: 2 }}>
        <CardMedia
          component="img"
          sx={{ aspectRatio: "1.618/1" }}
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              textOverflow: "ellipsis",
              whiteSpace: "pre",
              overflow: "hidden",
            }}
          >
            {explanation}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

// export default function GameCard(props) {
//   const name = props.name;
//   return (
//     <Grid item xs={8} sm={12} md={6} lg={3}>
//       <Card variant="outlined" sx={{ p: 2 }}>
//         <Typography>{name}</Typography>
//       </Card>
//     </Grid>
//   );
// }
