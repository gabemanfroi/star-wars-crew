import HomePage from './pages/HomePage/HomePage'
import {Header} from "./components/shared/Header/Header";
import {CharactersProvider} from "./contexts/CharactersContext";
import {ScreenSizeProvider} from "./contexts/ScreenSizeContext";
import {ThemeProvider} from '@material-ui/core/styles';
import {theme} from "./util/theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <ScreenSizeProvider>
                <Header data-test="Header"/>
                <CharactersProvider>
                    <HomePage/>
                </CharactersProvider>
            </ScreenSizeProvider>
        </ThemeProvider>
    );
}

export default App;