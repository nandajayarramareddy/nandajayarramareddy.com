import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Paper,
  Typography,
  Divider,
  Grid,
} from "@material-ui/core";
const useStyles = makeStyles({
  paper: {
    marginLeft: "40px",
    marginRight: "40px",
    marginTop: "40px",
    marginBottom: "40px",
    padding: "20px",
    opacity: 0.85,
    fontSize: "20px",
    textAlign: "justify",
  },
  title: {
    color: "#B52E31",
  },
  role: {
    color: "#F16529",
  },
  logo: {
    height: "20px",
    width: "70px",
    align: "left",
  },
});
const Experience = () => {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.paper}>
        <Grid container justify="space-between">
          <img
            src={require("../assets/Infosys.png")}
            alt="Infosys"
            className={classes.logo}
          />
          <Typography variant="h5" align="left" className={classes.title}>
            {" "}
            Gas leak Survey System
          </Typography>
          <Typography variant="h6" align="right" className={classes.role}>
            Full-Stack web application
          </Typography>
        </Grid>
        <Divider />
        <p style={{ textIndent: "40px" }}>
          Gas leak Survey System is a web application used by Southern company
          Gas for surveillance and maintenance of Gas delivery systems across
          several states in USA.
        </p>
        <p></p>
        <ul>
          <li>
            Developed responsive UI, implemented packages and stored procedures
            for data retrieval and updation, created Web APIs for business
            logic.
          </li>
          <li>
            Unit tested and delivered product within the specified timelines.
          </li>
          <li>Automated builds in server using TFS Build.</li>
          <li>
            Deployed in all environments, and provided support during and after
            deployment.
          </li>
        </ul>
        <p>
          Technologies used: Angular4, MS.NET 4.6, Web API, C#, Oracle, SSIS,
          Bootstrap, JQuery, Kendo UI.
        </p>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container justify="space-between">
          <img
            src={require("../assets/Infosys.png")}
            alt="Infosys"
            className={classes.logo}
          />
          <Typography variant="h5" align="left" className={classes.title}>
            {" "}
            Win2K3 Project
          </Typography>
          <Typography variant="h6" align="right" className={classes.role}>
            Migration
          </Typography>
        </Grid>
        <Divider />
        <p>
          The purpose of Win2K3 project is to migrate Windows server
          applications to newer version.
        </p>
        <ul>
          <li>
            Migrated various applications to Windows Server 2012 from Windows
            server 2003.
          </li>
          <li>
            Involved in migrating the Framework related changes from .NET 3.5 to
            .NET 4.5.1.
          </li>
          <li>
            Modifying the UI part of applications and Testing the compatibility
            of migrated applications with both IE11 and Chrome.
          </li>
        </ul>
        <p>Technologies used: MS.NET 4.5.1, JQuery and HTML</p>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container justify="space-between">
          <img
            src={require("../assets/Infosys.png")}
            alt="Infosys"
            className={classes.logo}
          />
          <Typography variant="h5" align="left" className={classes.title}>
            Microsoft Excel Automation
          </Typography>
          <Typography variant="h6" align="right" className={classes.role}>
            Automation
          </Typography>
        </Grid>
        <Divider />
        <p>
          The purpose of this automation is to reduce significant time of
          company resources working on Microsoft Excel sheets
        </p>
        <ul>
          <li>
            Created an Automation Application for Microsoft Excel by using
            Microsoft C# .NET.
          </li>
          <li>
            This application is used to merge and modify Excel workbooks
            automatically in real time.
          </li>
        </ul>
        <p>Technology used: ADO.NET</p>
      </Paper>
    </div>
  );
};

export default Experience;
