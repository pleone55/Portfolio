import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import VisibilityIcon from '@material-ui/icons/Visibility';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import './Projects.scss';

import ecomm from '../../assets/ecomm.jpg';
import expense from '../../assets/expense.jpg';
import contact from '../../assets/contact.png';
import todo from '../../assets/todo.jpg';
import javaicon from '../../assets/java-icon.png';
import github from '../../assets/github.png';

const useStyles = makeStyles(theme => ({
    githubIcon: {
        width: "60px",
        height: "90px",
        position: "absolute",
        left: "33%",
        top: "46%",
        transform: "translate(-50%, -50%)",
        [theme.breakpoints.down("md")]: {
            width: "40px",
            height: "40px",
        },
        [theme.breakpoints.down("sm")]: {
            width: "40px",
            height: "40px"
        },
    },
    eyeIcon: {
        width: "68px",
        height: "90px",
        position: "absolute",
        left: "63%",
        top: "46%",
        transform: "translate(-50%, -50%)",
        [theme.breakpoints.down("md")]: {
            width: "50px",
            height: "50px",
        },
        [theme.breakpoints.down("sm")]: {
            width: "50px",
            height: "50px",
            marginLeft: "10px"
        },
    },
    opacityTransform: {
        opacity: 0,
        "&:hover": {
            opacity: 1,
        },
        [theme.breakpoints.down("md")]: {
            opacity: 1,
        }
    },
    aTag: {
        color: "black"
    },
    header: {
        display: "inline-block",
        width: "18%",
        margin: "30px",
        [theme.breakpoints.down("lg")]: {
            display: "inline-block",
            width: "21%",
            margin: "24px",
        },
        [theme.breakpoints.down("md")]: {
            display: "inline-block",
            width: "30%",
            marginLeft: "12vw"
        },
        [theme.breakpoints.down("sm")]: {
            display: "inline-block",
            width: "30%",
            marginLeft: "11vw"
        },
        [theme.breakpoints.down("xs")]: {
            display: "block",
            width: "60%",
            marginTop: "5em",
            marginLeft: "18vw"
        }
    },
    headerTwo: {
        display: "inline-block",
        width: "18%",
        margin: "65px",
        marginLeft: "28%",
        [theme.breakpoints.down("lg")]: {
            display: "inline-block",
            width: "30%",
            margin: "20px"
        },
        [theme.breakpoints.down("md")]: {
            display: "inline-block",
            width: "30%",
            marginLeft: "12vw"
        },
        [theme.breakpoints.down("sm")]: {
            display: "inline-block",
            width: "30%",
            marginLeft: "11vw"
        },
        [theme.breakpoints.down("xs")]: {
            display: "block",
            width: "60%",
            marginTop: "5em",
            marginLeft: "18vw"
        }
    }
}))

const Projects = props => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));

    return (
        <>
            <Typography id="projects" variant="h3" align="center" style={{marginBottom: "1em", marginTop: matchesXS ? "4em" : ""}}>Projects</Typography>
            <div className={classes.header} align="center" style={{marginLeft: matchesLG ? "" : "170px"}}>
                <Typography variant="h6" >E-Commerce (React/Redux)</Typography>
                <div className="items">
                    <div className="body">
                        <div className="background-image" style={{backgroundImage: `url(${ecomm})`}}>
                            <div className={classes.opacityTransform}>
                                <a className={classes.aTag} href="https://github.com/pleone55/Body-Goods-Nutrition"><GitHubIcon className={classes.githubIcon}/></a>
                                <a className={classes.aTag} href="https://body-goods.herokuapp.com/"><VisibilityIcon className={classes.eyeIcon} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.header} align="center">
                <Typography variant="h6">Star Wars Database</Typography>
                <div className="items">
                    <div className="body">
                        <div className="background-image" style={{backgroundImage: `url(${expense})`}}>
                            <div className={classes.opacityTransform}>
                                <a className={classes.aTag} href="https://github.com/pleone55/knoxLeone_CS340/tree/master"><GitHubIcon className={classes.githubIcon}/></a>
                                <a className={classes.aTag} href="#!"><VisibilityIcon className={classes.eyeIcon} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.header} align="center">
                <Typography variant="h6">Contact Manager (MERN)</Typography>
                <div className="items">
                    <div className="body">
                        <div className="background-image" style={{backgroundImage: `url(${contact})`}}>
                            <div className={classes.opacityTransform}>
                                <a className={classes.aTag} href="https://github.com/pleone55/Contact-Manager"><GitHubIcon className={classes.githubIcon}/></a>
                                <a className={classes.aTag} href="http://52.53.237.22"><VisibilityIcon className={classes.eyeIcon} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.header} align="center">
                <Typography variant="h6" >To-Do List (Python/Django)</Typography>
                <div className="items">
                    <div className="body">
                        <div className="background-image" style={{backgroundImage: `url(${todo})`}}>
                            <div className={classes.opacityTransform}>
                                <a className={classes.aTag} href="https://github.com/pleone55/To-Do-List"><GitHubIcon className={classes.githubIcon}/></a>
                                <a className={classes.aTag} href="http://13.57.223.70"><VisibilityIcon className={classes.eyeIcon} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.headerTwo} align="center" style={{marginLeft: matchesLG ? "150px" : ""}}>
                <Typography variant="h6" >Person Generator</Typography>
                <div className="items">
                    <div className="body">
                        <div className="background-image" style={{backgroundImage: `url(${github})`}}>
                            <div className={classes.opacityTransform}>
                                <a className={classes.aTag} href="https://github.com/pleone55/Person-Generator"><GitHubIcon className={classes.githubIcon}/></a>
                                <a className={classes.aTag} href="#! "><VisibilityIcon className={classes.eyeIcon} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.header} align="center">
                <Typography variant="h6">Java Projects</Typography>
                <div className="items">
                    <div className="body">
                        <div className="background-image" style={{backgroundImage: `url(${javaicon})`}}>
                            <div className={classes.opacityTransform}>
                                <a className={classes.aTag} href="https://github.com/pleone55/Java-Projects"><GitHubIcon className={classes.githubIcon}/></a>
                                <a className={classes.aTag} href="#!"><VisibilityIcon className={classes.eyeIcon} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Projects;