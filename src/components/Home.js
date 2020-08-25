import React from 'react'
import {Box} from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import Navbar from './Navbar'
import Skills from './Skills';
import Typography from '@material-ui/core/Typography';
import Education from './Education';
import Contact from './Contact';
import About from './About';
import ParticleContainer from './ParticleContainer'
import Experience from './Experience';

const useStyles = makeStyles((theme)=> ({
    main:{
        [theme.breakpoints.up('lg')]: {
        width: 'calc(100% - 200px)',
        marginLeft: 200,
        },
        [theme.breakpoints.down('md')]: {
            width: '100%',
            marginLeft: 0,
            },
        height:'100%',
        position:'absolute',    
    },
    heading:{
        backgroundColor:'rgb(225,227,247)',
        color:'#464EB8',
        height:'56px',
        textIndent:'60px',
        padding:'10px',
        position:'relative'
        
    },
    nav:{
        [theme.breakpoints.down('md')]: {
        position:'absolute' ,
        top:'-70px'
        }
    }
   
    
}))

const Home = () => {
    const classes = useStyles();
    return (
        <div>
            <Navbar/>
            <Box className={classes.main} id ="about">
                <Box >
                    <About/>
                </Box>
                <Box>
                    <Typography variant='h4' className={classes.heading} ><span id="skills" className={classes.nav}></span>Skills</Typography>
                    <Skills/>
                </Box>
                <Box >
                    <Typography variant='h4' className={classes.heading}><span id="experience" className={classes.nav}></span>Experience</Typography>
                    <Experience/>
                </Box>
                <Box >
                    <Typography variant='h4' className={classes.heading}><span id="education" className={classes.nav}></span>Education</Typography>
                    <Education/>
                </Box>
                <Box >
                    <Typography variant="h4" className={classes.heading}><span id="contact" className={classes.nav}></span>Contact</Typography>
                    <Contact/>
                </Box>
            </Box>
            <ParticleContainer/>
        </div>
    )
}

export default Home