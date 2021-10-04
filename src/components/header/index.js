import { Typography } from "@material-ui/core";
import UseStyles from "./styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CameraIcon from "@material-ui/icons/PhotoCamera";

const classes = UseStyles;

export default function Header() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <CameraIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          Marvel API
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
