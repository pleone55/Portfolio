import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import './Skills.scss';
import frontend from '../../assets/front-end.png';
import backend from '../../assets/back-end.png';
import database from '../../assets/database.png';
import cloud from '../../assets/cloud.png';

const useStyles = makeStyles(theme => ({
    gridContainer: {
        position: "absolute",
        marginTop: "6em",
        [theme.breakpoints.down("md")]: {
            width: "100%"
        },
        [theme.breakpoints.down("xs")]: {
            width: "80%",
            marginLeft: "3em"
        }
    },
    subContainer: {
        [theme.breakpoints.down("xs")]: {
            display: "grid",
            gridTemplateColumns: "5fr 5fr",
            gridGap: "5px",
        }
    },
    skillsContainer: {
        backgroundColor: "white",
        opacity: 0.6,
        border: "1px solid black",
        textAlign: "center",
        height: "260px",
        margin: "0 10.5px 15px",
        overflow: "hidden",
        paddingTop: "10px",
        transition: "transform 300ms ease-in-out",
        "&:hover": {
            transform: "translate(10px, 25px)"
        },
        [theme.breakpoints.down("md")]: {
            height: "240px",
            width: "100%"
        },
        [theme.breakpoints.down("xs")]: {
            alignItems: "center"
        }
    },
    languages: {
        display: "block",
        marginTop: "4px"
    },
    imgContainer: {
        width: "30%",
        color: "rgb(88, 134, 163)"
    },
    imgTwoContainer: {
        width: "30%",
        marginBottom: "17px"
    },
    imgThreeContainer: {
        width: "25%",
        marginBottom: "15px",
        marginTop: "10px"
    }
}))

const Skills = props => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    return (
        <>
            <Typography id="skills" variant="h3" align="center" style={{marginBottom: "1em"}}>Skills</Typography>
            <div className="hero-two">
                <Grid container direction="row" className={classes.gridContainer}>
                    <Grid className={classes.subContainer} container alignItems="center" style={{width: matchesMD ? "100%" : "60%", marginLeft: matchesMD ? "1vw" : "20vw"}}>
                        <Grid sm item className={classes.skillsContainer}>
                            <img src={frontend} alt="front-end" className={classes.imgContainer}/>
                            <Typography variant="h6">Front End</Typography>
                            <span className={classes.languages}>CSS/Sass</span>
                            <span className={classes.languages}>HTML</span>
                            <span className={classes.languages}>Javascript</span>
                            <span className={classes.languages}>React/Redux</span>
                        </Grid>
                        <Grid sm item className={classes.skillsContainer}>
                            <img src={backend} alt="back-end" className={classes.imgTwoContainer}/>
                            <Typography variant="h6">Back End</Typography>
                            <span className={classes.languages}>Python</span>
                            <span className={classes.languages}>Java</span>
                            <span className={classes.languages}>Express</span>
                            <span className={classes.languages}>NodeJS</span>
                        </Grid>
                        <Grid sm item className={classes.skillsContainer}>
                            <img src={database} alt="database" className={classes.imgThreeContainer}/>
                            <Typography variant="h6">Database</Typography>
                            <span className={classes.languages}>MySQL</span>
                            <span className={classes.languages}>Django</span>
                            <span className={classes.languages}>MongoDB</span>
                        </Grid>
                        <Grid sm item className={classes.skillsContainer}>
                            <img src={cloud} alt="cloud" className={classes.imgThreeContainer} />
                            <Typography variant="h6">Deployment</Typography>
                            <span className={classes.languages}>AWS</span>
                            <span className={classes.languages}>Heroku</span>
                        </Grid>
                    </Grid>
                </Grid>
                <div className="diagonal-herotwo-bg" style={{height: matchesXS ? "610px" : "400px"}}>
                    <div className="stars-two">
                        <div className="small-two"></div>
                        <div className="medium-two"></div>
                        <div className="big-two"></div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Skills;