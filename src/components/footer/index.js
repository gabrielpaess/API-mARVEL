import { Grid, Typography } from "@material-ui/core";
import UseStyles from "./styles";
import Copyright from "./copyright";

const classes = UseStyles;

export default function Footer() {
  return (
    <Grid container spacing={4}>
      <Grid className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Grid>
    </Grid>
  );
}
