import {
  Grid,
  Container,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import marvel from '../../services/personagens';
import UseStyles from './styles';


export default function About() {
  
  const classes = UseStyles();
  
  const [personagens, setPersonagens] = useState([]);
  
  useEffect(() => {
    marvel.obtemPersonagens().then((data) => {
      setPersonagens(data.results);
    });
  }, []);

  return (
    <Grid container>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Confira os heróis da marvel!
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Você pode também pesquisar o seu herói favorito.
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  Main call to action
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Secondary action
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {personagens.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={card.thumbnail.path + "." + card.thumbnail.extension}
                  title={card.name}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.name}
                  </Typography>
                  <Typography>{card.description || "Sem descrição"}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Detalhes
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Grid>
  );
}
