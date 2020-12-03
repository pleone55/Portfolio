import React, { useState, useEffect, useRef } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import node from '../../assets/node.png';
import react from '../../assets/react-img.png';
import python from '../../assets/python.png';
import java from '../../assets/java.png';

import './About.css';


const useStyles = makeStyles(theme => ({
    mainContainer: {
        marginTop: "2em",
        color: theme.palette.common.blue,
        [theme.breakpoints.down("md")]:{
            marginTop: "3em",
        },
        [theme.breakpoints.down("xs")]:{
            marginTop: "0.25em",
        }
    },
    aboutTextContainer: {
        color: theme.palette.common.blue,
        marginLeft: "2em",
        [theme.breakpoints.down("md")]: {
            marginLeft: "1em",
            width: "70%"
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: "1em",
            marginLeft: "1em",
            width: "70%"
        },
        [theme.breakpoints.down("xs")]: {
            marginLeft: "0.75em",
            marginTop: "1em",
            width: "100%",
            textAlign: "center"
        }
    },
    paragraphContainer: {
        color: "black",
        width: "50vw",
        marginTop: "1em",
        fontWeight: 300,
        fontSize: "large",
        [theme.breakpoints.down("md")]: {
            width: "100%",
        },
        [theme.breakpoints.down("xs")]: {
            width: "85%",
            textAlign: "center",
            marginLeft: "2em"
        }
    },
    languageContainer: {
        height: "25em",
        width: "100%",
        marginTop: "5em",
        marginRight: "2em",
        [theme.breakpoints.down("md")]: {
            width: "100%",
        },
        [theme.breakpoints.down("sm")]: {
            marginRight: "7em",
            width: "100%"
        },
        [theme.breakpoints.down("xs")]: {
            marginRight: "0.25em",
            width: "100%"
        }
    }
}))

const About = props => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    const [isVisible, setVisible] = useState(true);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        return () => observer.unobserve(domRef.current);
    }, []);

    return (
        <Grid container direction="column" className={classes.mainContainer} id="about">
            <Grid item>
            <Typography variant="h3" align="center">About Me</Typography>
                <Grid className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef} container justify="flex-end" alignItems="center" direction="row">
                    <Grid sm item className={classes.aboutTextContainer}>
                        <Typography variant="h3" align="left" >Full Stack Web Developer</Typography>
                        <Grid container align="left" className={classes.paragraphContainer}>
                            <Grid item>
                                <Typography variant="caption" align="center">
                                Versatile, results-driven, and motivated Entry Level Web Developer demonstrating solid programming and 
                                problem-solving skills. Self-sufficient and team driven web developer looking to gain real world experience 
                                in the industry and continue to develop the skills needed to be a well-rounded Full Stack developer.
                                <br/><br/>
                                Graduated from the Coding Dojo Bootcamp where I worked on many projects in an array of stacks. Currently 
                                working towards my Computer Science degree at Oregon State University.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
                        <Grid className={classes.languageContainer} container justify="right">
                            <div className="hexagon"><span style={{backgroundImage: `url(${node})`, backgroundSize: "60px", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}></span></div>
                            <div className="hexagon" style={{marginTop: matchesMD ? "6em" : "8em"}}><span style={{backgroundImage: `url(${react})`, backgroundSize: "50px", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}></span></div>
                            <div className="hexagon"><span style={{backgroundImage: `url(${python})`, backgroundSize: "50px", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}></span></div>
                            <div className="hexagon" style={{marginTop: matchesMD ? "6em" : "8em", marginRight: matchesXS ? "2em" : "2em"}}><span style={{backgroundImage: `url(${java})`, backgroundSize: "60px", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}></span></div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};
export default About;