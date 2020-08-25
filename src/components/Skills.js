import React from "react";
import { Box, Paper, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  picture: {
    height: "100px",
    width: "100px",
  },
  disBlock: {
    padding: "20px",
    display: "inline",
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
  para: {
    textAlign: "center",
    fontSize: "15px",
  },
});
const Skills = () => {
  const classes = useStyles();
  return (
    <div>
      <Box>
        <Paper className={classes.paper}>
          <h3>Front End</h3>
          <Divider />
          <Box
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="center"
          >
            <Box className={classes.disBlock}>
              <img
                src={require("../assets/html5.png")}
                alt="HTML5"
                className={classes.picture}
              />
              <p className={classes.para}>HTML5</p>
            </Box>
            <Box className={classes.disBlock}>
              <img
                src={require("../assets/css3.png")}
                alt="CSS"
                className={classes.picture}
              />
              <p className={classes.para}>CSS3</p>
            </Box>
            <Box className={classes.disBlock}>
              <img
                src={require("../assets/javascript.png")}
                alt="JAVASCRIPT"
                className={classes.picture}
              />
              <p className={classes.para}>JAVASCRIPT</p>
            </Box>
            <Box className={classes.disBlock}>
              <img
                src={require("../assets/Material-ui.png")}
                alt="MATERIAL-UI"
                className={classes.picture}
              />
              <p className={classes.para}>MATERIAL-UI</p>
            </Box>
            <Box className={classes.disBlock}>
              <img
                src={require("../assets/react.png")}
                alt="REACT"
                className={classes.picture}
              />
              <p className={classes.para}>REACT</p>
            </Box>
            <Box className={classes.disBlock}>
              <img
                src={require("../assets/angular.png")}
                alt="ANGULAR"
                className={classes.picture}
              />
              <p className={classes.para}>ANGULAR</p>
            </Box>
          </Box>
        </Paper>
        <Paper className={classes.paper}>
          <h3>Back End</h3>
          <Divider />
          <Box
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="center"
          >
            <Box className={classes.disBlock}>
              <img
                src={require("../assets/cSharp.png")}
                alt="C#"
                className={classes.picture}
              />
              <p className={classes.para}>C#</p>
            </Box>
            <Box className={classes.disBlock}>
              <img
                src={require("../assets/AspMvc.png")}
                alt="ASP.NET MVC"
                className={classes.picture}
              />
              <p className={classes.para}>ASP.NET MVC</p>
            </Box>
            <Box className={classes.disBlock}>
              <img
                src={require("../assets/webApi.png")}
                alt=".NET API"
                className={classes.picture}
              />
              <p className={classes.para}>.NET API</p>
            </Box>
            <Box className={classes.disBlock}>
              <img
                src={require("../assets/NET_Core_Logo.png")}
                alt=".NET CORE"
                className={classes.picture}
              />
              <p className={classes.para}>.NET CORE</p>
            </Box>
            <Box className={classes.disBlock}>
              <img
                src={require("../assets/SQLServer.png")}
                alt="SQL SERVER"
                className={classes.picture}
              />
              <p className={classes.para}>SQL SERVER</p>
            </Box>
            <Box className={classes.disBlock}>
              <img
                src={require("../assets/Oracle.png")}
                alt="ORACLE DB"
                className={classes.picture}
              />
              <p className={classes.para}>ORACLE DB</p>
            </Box>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default Skills;
