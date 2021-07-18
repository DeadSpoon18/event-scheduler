import {
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import EventNoteIcon from '@material-ui/icons/EventNote';

const Header = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      fontFamily: "Poppins",
      fontWeight: "700",
      color: "#000",
      marginLeft: "0.15rem",
      fontSize: "1.5rem",
    },
    header:{
       backgroundColor: "#fff",
    },
    icon: {
        color: "#000",
        fontSize: "25px",
        fontWeight: "light",
    }
  }));
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
        <EventNoteIcon className={classes.icon}/>
          <Typography variant="h6" className={classes.title}>
             Calendar
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
