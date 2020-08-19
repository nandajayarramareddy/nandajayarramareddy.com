import React from "react";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  particlesCanva: {
    position: "fixed",
    width: "100%",
    height: "100%",
    zIndex: -100,
    backgroundColor: "cloud",
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
  },
}));

const ParticleContainer = () => {
  const classes = useStyles();
  return (
    <Particles
      className={classes.particlesCanva}
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: false,
            },
          },
          color: {
            value: [
              "#B52E31",
              "#E44D26",
              "#F16529",
              "#61dbfb",
              "#F0DB4F",
              "#464EB8",
            ],
          },
          shape: {
            type: ["circle", "triangle", "star"],
          },
          size: {
            value: 6,
            random: true,
            anim: {
              speed: 4,
              size_min: 0.3,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            random: true,
            speed: 1,
            direction: "top",
            out_mode: "out",
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "bubble",
            },
            onclick: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              size: 0,
              opacity: 0,
            },

            repulse: {
              distance: 400,
              duration: 4,
            },
          },
        },
      }}
    />
  );
};

export default ParticleContainer;
