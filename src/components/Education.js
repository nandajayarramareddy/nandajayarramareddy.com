import React from "react";
import { Box, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paper: {
    marginLeft: "40px",
    marginRight: "40px",
    marginTop: "40px",
    marginBottom: "40px",
    padding: "40px",
    textAlign: "center",
    opacity: 0.85,
    fontSize: "20px",
  },
});
const Education = () => {
  const classes = useStyles();
  return (
    <Box>
      <Paper className={classes.paper}>
        <Typography variant="h6">
          SRI VENKATESWARA COLLEGE OF ENGINEERING
        </Typography>
        <p style={{ fontSize: "18px" }}>Tirupati, India</p>
        <p>B.Tech in Chemical Engineering</p>
      </Paper>
    </Box>
  );
};

export default Education;
