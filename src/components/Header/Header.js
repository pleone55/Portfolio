import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { HashLink as Link } from 'react-router-hash-link';
import './Header.scss';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

import { useTheme } from '@material-ui/core/styles';

import { IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2)
    },
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "1em",
        [theme.breakpoints.down("md")]: {
            marginBottom: "2em"
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: "1.25em"
        }
    },
    appbar: {
        zIndex: theme.zIndex.modal + 1,
        boxShadow: "none",
    },
    upButton: {
        positon: 'absolute',
    },
    tabContainer: {
        marginLeft: "auto",
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px",
        [theme.breakpoints.down("md")]: {
            height: "7em"
        },
        [theme.breakpoints.down("xs")]: {
            height: "5.5em"
        }
    },
    drawerIconContainer: {
        marginLeft: "auto",
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    drawerIcon: {
        height: "50px",
        width: "50px"
    },
    drawer: {
        backgroundColor: theme.palette.common.blue
    },
    drawerItem: {
        ...theme.typography.tab,
        color: "white"
    },
    drawerItemSelected: {
        "& .MuiListItemText-root": {
            opacity: 1,
        }
    },
    drawerItemIcon: {
        ...theme.typography.tab,
        color: "white",
        height: "30px",
        width: "30px"
    },
    welcomeContainer: {
        color: "white",
        marginTop: "4em",
        marginLeft: "3.5em",
    }
}));

const ScrollTop = props => {
    const { children, window } = props;
    const classes = useStyles();

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100
    });

    const handleClick = event => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if(anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.root}>
                {children}
            </div>
        </Zoom>
    );
}

const Header = props => {
    const classes = useStyles();
    const theme = useTheme();

    const [value, setValue] = useState(0);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [navBackground, setNavBackground] = useState('transparent');

    const matches = useMediaQuery(theme.breakpoints.down("md"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const routes = [{name: "Home", link: "#home", activeIndex: 0}, 
        {name: "About", link: "#about", activeIndex: 1}, 
        {name: "Skills", link: "#skills", activeIndex: 2},
        {name: "Projects", link: "#projects", activeIndex: 3}]

    const handleChange = (event, value) => {
        setValue(value);
    }

    useEffect(() => {
        [...routes].forEach(route => {
            switch(window.location.pathname){
                case `${route.link}`:
                    if(value !== routes.activeIndex){
                        setValue(route.activeIndex)
                    }
                    break;
                default:
                    break;
            }
        })
    }, [value, routes]);

    useEffect(() => {
        const handleScroll = event => {
            if (window.scrollY > 450){
                setNavBackground('#2b5876')
            }else {
                setNavBackground('transparent')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, []);

    const tabs = (
        <>
            <Tabs value={value} 
                className={classes.tabContainer} 
                onChange={handleChange} 
                indicatorColor="primary">
                {routes.map((route, index) => (
                    <Tab key={`${route}${index}`}
                        className={classes.tab}
                        component={Link} to={route.link}
                        label={route.name}
                        aria-owns={route.ariaOwns}/>
                ))}
                <a href="https://github.com/pleone55"><GitHubIcon style={{marginTop: "0.5em", height: "2rem", width: "2rem"}} className={classes.tab} /></a> 
                <a href="https://linkedin.com/in/paulleone1"><LinkedInIcon style={{marginTop: "0.5em", height: "2.25rem", width: "2.25rem", marginLeft: "1em"}} className={classes.tab} /></a>
            </Tabs>
        </>
    )

    const drawer = (
        <>
            <SwipeableDrawer disableBackdropTransition={!iOS}
                disableDiscovery={iOS} 
                open={openDrawer} 
                onClose={() => setOpenDrawer(false)} 
                onOpen={() => setOpenDrawer(true)}
                classes={{paper: classes.drawer}}
                anchor={"right"}>
                <div className={classes.toolbarMargin} />
                <List disablePadding>
                    {routes.map(route => (
                        <ListItem divider button
                            component={Link} to={route.link}
                            selected={value === route.activeIndex}
                            classes={{selected: classes.drawerItemsSelected}}
                            onClick={() => {setOpenDrawer(false); setValue(route.activeIndex)}}
                            key={`${route}${route.activeIndex}`}>
                                <ListItemText className={classes.drawerItem}
                                    disableTypography>
                                        {route.name}
                                </ListItemText>
                        </ListItem>
                    ))}
                    <ListItem onClick={() => setOpenDrawer(false)} divider button>
                        <a href="https://github.com/pleone55"><GitHubIcon className={classes.drawerItemIcon}/></a>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)} divider button>
                        <a href="https://linkedin.com/in/paulleone1"><LinkedInIcon className={classes.drawerItemIcon}/></a>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} 
                disableRipple
                className={classes.drawerIconContainer}>
                <MenuIcon className={classes.drawerIcon}/>
            </IconButton>
        </>
    )

    return (
        <>
            <div id="home" className="hero">
                <div className="diagonal-hero-bg">
                    <div className="stars">
                        <div className="small"></div>
                        <div className="medium"></div>
                        <div className="big"></div>
                    </div>
                </div>
                <Toolbar id="back-to-top-anchor" />
                {matchesXS ? <Typography variant="h3" justify="center" className={classes.welcomeContainer}>WELCOME</Typography> : ""}
            </div>                
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appbar} style={{backgroundColor: navBackground, transition: "1s ease"}}>
                <Toolbar disableGutters>
                    {matches ? drawer : tabs}
                </Toolbar>
            </AppBar>
            <Hidden smDown>
                <ScrollTop {...props}>
                    <Fab style={{marginBottom: "2.1em"}} position="absolute" color="secondary" size="small" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon className={classes.upButton}/>
                    </Fab>
                </ScrollTop>
            </Hidden>
            <div className={classes.toolbarMargin} />
        </>
    )
}
export default Header;