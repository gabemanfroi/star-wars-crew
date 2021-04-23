import axios from 'axios';
import {createContext, useEffect, useState} from "react";


export const CharactersContext = createContext({});

/**
 * Provedor de informações de carregamento da aplicação.
 * @param {ReactChildren} children Componentes filhos
 * @returns Provedor de personagens.
 */
export function CharactersProvider({children}) {

    const [characters, setCharacters] = useState(null);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);

    const baseUrl = 'https://swapi.dev/api/'


    useEffect(() => {
        setCharacters(null);
        fetchCharacterList();
    }, [page]);

    const getCharacter = (id) => {
        const filter = characters.filter(
            character =>
                character.url === baseUrl + 'people/' + id + '/');
        if (filter) {
            return filter[0];
        }
        return null;
    }

    const fetchCharacterList = async () => {
        axios.get(`${baseUrl}people?page=${page}`)
            .then(async res => {
                const data = res.data.results;
                enrichCharactersIds(data);
                await enrichCharactersWithHomePlanets(data);
                setCharacters(data);
                setPageCount(Math.ceil(res.data.count / 10))
            })
            .catch(err => {
                console.log(err);
            })
    }

    /**
    * Popula os dados dos personages com seus respectivos ids provenientes
    * do seu atributo "url" que vem no formato:
    * "http://swapi.dev/api/people/{id}/
    * */
    function enrichCharactersIds(data) {
        data.forEach(
            //Tratamento para pegar o id do personagem através da url
            //TODO: Tratar com Regex talvez, ou simplificar
            el => el.id = el.url.replace(baseUrl.replace('s', '') + 'people', '').replace('/', '')
        )
    }

    /**
    * O Planeta de Origem do personagem vem na forma de uma requisição,
    * sendo necessário realizar outra requisição para saber seu nome
    * */

    const fetchCharacterHomePlanet = (url) => {

        return axios.get(url).then(
            res => res.data.name
        ).catch(err => {
                console.log(err);
            }
        )
    }

    /**
    * Popula os personagens com o nome de seu planeta natal
    * */
    const enrichCharactersWithHomePlanets = async (data) => {
        await Promise.all(data.map(
            async el => {
                el.homeworld = await fetchCharacterHomePlanet(el.homeworld);
            }
        ))
    }

    return (
        <CharactersContext.Provider value={{
            characters,
            getCharacter,
            setPage,
            page,
            pageCount,
        }}>
            {children}
        </CharactersContext.Provider>
    )
}