import React from 'react'
import {Box} from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import Navbar from './Navbar'
import Skills from './Skills';
import Typography from '@material-ui/core/Typography';
import withWidth from '@material-ui/core/withWidth';
import Education from './Education';
import Contact from './Contact';
import About from './About';
import ParticleContainer from './ParticleContainer'
import Experience from './Experience';

const useStyles = makeStyles((theme)=> ({
    main:{
        [theme.breakpoints.up('sm')]: {
        width: 'calc(100% - 200px)',
        marginLeft: 200,
        },
        [theme.breakpoints.down('xs')]: {
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
        padding:'10px'
    }
}))

const Home = () => {
    const classes = useStyles();
    return (
        <div>
            <Navbar/>
            <Box className={classes.main}>
                <Box id ="about">
                    <About/>
                </Box>
                <Box id="skills">
                    <Typography variant='h4' className={classes.heading}>Skills</Typography>
                    <Skills/>
                </Box>
                <Box id="experience">
                    <Typography variant='h4' className={classes.heading}>Experience</Typography>
                    <Experience/>
                </Box>
                <Box id="education" >
                    <Typography variant='h4' className={classes.heading}>Education</Typography>
                    <Education/>
                </Box>
                <Box id="contact" >
                    <Typography variant="h4" className={classes.heading}>Contact</Typography>
                    <Contact/>
                </Box>
            </Box>
            <ParticleContainer/>
        </div>
    )
}

export default Home