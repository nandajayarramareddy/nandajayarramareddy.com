import React from "react";
import { LinkedIn, Facebook, GitHub } from "@material-ui/icons";
import { IconButton,Box } from "@material-ui/core";

const Contact = () => {
  return (
    <Box
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="center"
            marginTop="60px"
            marginBottom="60px"
          >
      <IconButton
        onClick={() => window.open("https://github.com/ynand", "_blank")}
      >
        <GitHub
          style={{
            color: "black",
            height: "50px",
            width: "50px",
            marginLeft: "60px",
            marginRight: "60px",
          }}
        ></GitHub>
      </IconButton>
      <IconButton
        onClick={() =>
          window.open("https://linkedin.com/in/nandaja-yarramareddy", "_blank")
        }
      >
        <LinkedIn
          style={{
            color: "0e76a8",
            height: "50px",
            width: "50px",
            marginLeft: "60px",
            marginRight: "60px",
          }}
        ></LinkedIn>
      </IconButton>
      <IconButton
        onClick={() =>
          window.open("https://www.facebook.com/y.nandaja", "_blank")
        }
      >
        <Facebook
          style={{
            color: "#3b5998",
            height: "50px",
            width: "50px",
            marginLeft: "60px",
            marginRight: "60px",
          }}
        ></Facebook>
      </IconButton>
    </Box>
  );
};

export default Contact;
