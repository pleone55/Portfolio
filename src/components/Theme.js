import { createMuiTheme } from '@material-ui/core/styles';

const blue = '#2b5876';
const purple = '#4e4376';

export default createMuiTheme({
    palette: {
        common: {
            blue: blue,
            purple: purple
        },
        primary: {
            main: blue
        },
        secondary: {
            main: purple
        }
    },
    typography: {
        tab: {
            fontFamily: "Oxygen",
            color: "white",
            marginRight: '3em',
            fontWeight: "bold",
            fontSize: "1rem",
        },
        h3: {
            fontFamily: "Oxygen",
            fontSize: "2.5rem",
            color: blue
        },
        caption: {
            fontWeight: "bold",
            fontFamily: "Oxygen",
            fontSize: "1rem"
        }
    }
});