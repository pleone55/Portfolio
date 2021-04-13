import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: "100%",
        zIndex: 1302,
        position: "relative",
        marginTop: "2em"
    },
    mainContainer: {
        position: "relative"
    },
    gridItem: {
        margin: "1em"
    },
    link: {
        color: "white",
        fontFamily: "Oxygen",
        fontSize: "0.75rem",
        fontWeight: "bold",
        textDecoration: "none"
    },
}))

const Footer = props => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Hidden mdDown>
                <Grid container justify="center" className={classes.mainContainer}>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="row" spacing={3}>
                            <Grid item className={classes.link}>
                                Contact:
                            </Grid>
                            <Grid item className={classes.link}>
                                Phone Number: 909-560-1086
                            </Grid>
                            <Grid item className={classes.link}>
                                Email: pleone550@gmail.com
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
        </footer>
    )
};
export default Footer;