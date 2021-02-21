import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { makeStyles } from "@material-ui/core/styles";
import MenuSlide from "@material-ui/core/Drawer";
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  IconButton,
  ListItemText,
  Hidden,
  Divider,
  Typography,
  Box,
  ListItemIcon,
} from "@material-ui/core";
import {
  FileCopy,
  Person,
  TrendingUp,
  Assessment,
  School,
  Menu,
  ContactMail,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,    
  menuSlider: {
    width: 200,
    height: "100%",
    backgroundColor: "#0000",
  },
  appBar: {
    backgroundColor: "rgb(225,227,247)",
  },
  name: {
    color: "#464EB8",
    alignContent: "center",
    width: "200px",
    textAlign: "center",
    marginTop: "30px",
    marginBottom: "20px",
  },
}));

const menuItems = [
  {
    listIcon: <Person />,
    listText: "About",
    listPath: "/Home#about",
    tColor: "#B52E31",
  },
  {
    listIcon: <Assessment />,
    listText: "Skills",
    listPath: "/Home#skills",
    tColor: "#61dbfb",
  },
  {
    listIcon: <TrendingUp />,
    listText: "Experience",
    listPath: "/Home#experience",
    tColor: "#F16529",
  },

  {
    listIcon: <School />,
    listText: "Education",
    listPath: "/Home#education",
    tColor: "#F0DB4F",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contact",
    listPath: "/Home#contact",
    tColor: "#464EB8",
  },
];

const Navbar = () => {
  const classes = useStyles();
  const [disMenu, setDisMenu] = useState({
    left: false,
  });
  const toggleMenu = (slider, open) => () => {
    setDisMenu({ ...disMenu, [slider]: open });
  };
  const sideList = () => (
    <Box
      className={classes.menuSlider}
      component="div"
      onClick={toggleMenu("left", false)}
    >
      <Divider />
      <List>
        {menuItems.map((listItem) => (
          <ListItem
            button 
            key={listItem.listText}
            component={Link}
            to={listItem.listPath}
          >
            <ListItemIcon style={{ color: `${listItem.tColor}` }}>
              {listItem.listIcon}
            </ListItemIcon>
            <ListItemText>{listItem.listText}</ListItemText>
          </ListItem>
        ))}
        <ListItem
          button
          key={"Resume"}
          component={Link}
          to={
            "//drive.google.com/file/d/1Wr39WqTGNYn5oQ18bhXdy7ijwE2ftZug/view?usp=sharing"
          }
          target="_blank"
        >
          <ListItemIcon style={{ color: "#E44D26" }}>
            <FileCopy />
          </ListItemIcon>
          <ListItemText>Resume</ListItemText>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <>
      <Hidden mdDown>
        <MenuSlide open={true} anchor="left" variant="permanent">
          <div className={classes.name}>
            <Typography variant="h5">Nandaja Yarramareddy</Typography>
            <Typography variant="subtitle1" style={{ color: "black" }}>
              Full Stack Developer
            </Typography>
          </div>
          <br></br>
          {sideList()}
        </MenuSlide>
      </Hidden>
      <Hidden lgUp>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton onClick={toggleMenu("left", true)}>
                <Menu style={{ color: "black" }} />
              </IconButton>
              <Typography variant="h5" style={{ color: "#464EB8" }} >
                Nandaja Yarramareddy
              </Typography>
              <MenuSlide
                open={disMenu.left}
                onClose={toggleMenu("left", false)}
                anchor="left"
              >
                {sideList()}
              </MenuSlide>
            </Toolbar>
          </AppBar>
          <Toolbar className={classes.offset}/>
      </Hidden>
    </>
  );
};

export default Navbar;
