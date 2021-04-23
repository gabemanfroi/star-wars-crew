import {Redirect, Route, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage'
import {Header} from "./components/shared/Header/Header";
import {LoadingProvider} from "./contexts/LoadingContext";
import {CharactersProvider} from "./contexts/CharactersContext";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import {ScreenSizeProvider} from "./contexts/ScreenSizeContext";
import {ThemeProvider} from '@material-ui/core/styles';
import {theme} from "./util/theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <ScreenSizeProvider>
                <Header/>
                <LoadingProvider>
                    <CharactersProvider>
                        <Switch>
                            <Route path="/details" component={DetailsPage}/>
                            <Route path="/" component={HomePage}/>
                            <Redirect to="/"/>
                        </Switch>
                    </CharactersProvider>
                </LoadingProvider>
            </ScreenSizeProvider>
        </ThemeProvider>
    );
}

export default App;
