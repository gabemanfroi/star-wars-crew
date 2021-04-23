import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#5b5b5b',
            main: '#333',
            dark: '#232323',
            contrastText: '#fddf5d',
        },
        secondary: {
            light: '#fddf5d',
            main: '#fdd835',
            dark: '#b19725',
            contrastText: '#000',
        },
    },
});
