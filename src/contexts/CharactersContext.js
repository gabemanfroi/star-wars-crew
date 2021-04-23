import axios from 'axios';
import {createContext, useContext, useEffect, useState} from "react";
import {LoadingContext} from "./LoadingContext";
import {useHistory} from "react-router";

export const CharactersContext = createContext({});

export function CharactersProvider({children}) {

    const {setLoading, setMessage} = useContext(LoadingContext);
    const [characters, setCharacters] = useState(null);
    const [openAlert, setOpenAlert] = useState(false);
    const [alertTitle, setAlertTitle] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [alertSeverity, setAlertSeverity] = useState('info');
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);

    const baseUrl = 'https://swapi.dev/api/'

    const history = useHistory();

    const loadError = (err) => {
        setLoading(false);
        setMessage("");
        sendErrorMessage(err);
    }

    const sendErrorMessage = (message) => {
        setOpenAlert(true);
        setAlertTitle('TesteError');
        setAlertMessage(message);
        setAlertSeverity('error');
    }

    const sendInfoMessage = (message) => {
        setOpenAlert(true);
        setAlertTitle('TesteInfo');
        setAlertMessage(message);
        setAlertSeverity('info');
    }

    const getCharacter = (id) => {
        const filter = characters.filter(
            character =>
                character.url === baseUrl.replace('s', '') + 'people/' + id + '/');
        if (filter) {
            return filter[0];
        }
        return null;
    }

    const fetchCharacterList = async () => {
        axios.get(`${baseUrl}people?page=${page}`)
            .then(async res => {
                const data = res.data.results;
                enrichCharacterId(data);
                await enrichCharacterWithHomePlanet(data);
                setCharacters(data);
                setPageCount(Math.ceil(res.data.count/10))
            })
            .catch(err => {
                loadError(err);
            })
    }


    function enrichCharacterId(data) {
        data.forEach(
            el => el.id = el.url.replace(baseUrl.replace('s', '')+'people','').replace('/', '')
        )
    }

    const enrichCharacterWithHomePlanet = async (data) => {
        await Promise.all(data.map(
            async el => {
                el.homeworld = await fetchCharacterHomePlanet(el.homeworld);
            }
        ))
    }

    const fetchCharacterHomePlanet = (url) => {

        return axios.get(url).then(
            res => res.data.name
        ).catch(err => {
                loadError(err);
            }
        )
    }

    useEffect(() => {
        setLoading(true);
        setMessage('Testee');
        setCharacters(null);
        fetchCharacterList();
    }, [setLoading, setMessage, page]);


    return (
        <CharactersContext.Provider value={{
            characters,
            openAlert,
            alertTitle,
            alertSeverity,
            alertMessage,
            setOpenAlert,
            sendErrorMessage,
            sendInfoMessage,
            getCharacter,
            setPage,
            page,
            pageCount
        }}>
            {children}
        </CharactersContext.Provider>
    )
}