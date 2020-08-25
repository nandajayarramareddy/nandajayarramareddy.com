import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper } from "@material-ui/core";

const useStyles = makeStyles({
  picture: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  para: {
    position: "center",
    display: "block",
    color: "black",
    fontSize: "30px",
    textAlign: "center",
    marginLeft: "20px",
    marginRight: "20px",
  },
  about: {
    textAlign: "center",
  },
  paper: {
    marginLeft: "40px",
    marginRight: "40px",
    marginTop: "40px",
    marginBottom: "40px",
    padding: "20px",
    opacity: 0.85,
    fontSize: "20px",
  },
});
const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.about}>
      <Paper className={classes.paper}>
        <Typography type="h6" className={classes.para}>
          Hello, thank you for taking the time to visit.
        </Typography>
        <p>I am a web developer based in Hyderabad, India. </p>
        <p>
          I had a great opportunity to get trained and work for Infosys Ltd.
        </p>
        <p>
          I prefer to keep learning, continue challenging myself, and do things
          that matter.
        </p>
      </Paper>
    </div>
  );
};

export default About;
