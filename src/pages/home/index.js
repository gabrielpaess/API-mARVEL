import Grid from "@material-ui/core/Grid";
import Footer from "../../components/footer";
import Header from "../../components/header";
import About from "../../components/about";

export default function Home() {
  return (
    <Grid container>
      <Header />
      <About />
      <Footer />
    </Grid>
  );
}
