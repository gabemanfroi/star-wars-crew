import React from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

import {CharacterCard} from "../CharacterCard/CharacterCard";

/**
 * Componente de apresentação dos cards dos personagens
 * @param characters personagens
 * @param setOpen função responsável por controlar a exibição do Dialog
 * @param setSelectedCharacter função responsável por selecionar o personagem
 * @returns Componente de apresentação dos cards dos personagens
 */
export function CharacterGridCards({characters, setOpen, setSelectedCharacter}) {

    async function handleOpenCharacterDetails(character) {
        setOpen(true);
        await enrichCharacterWithMovies(character);
        await enrichCharacterWithPlanets(character);
        setSelectedCharacter(character);
    }

    /**
     *     Função assíncrona responsável por popular os dados do
     * personagem com os filmes que ele participou.
     * @param character persoagem selecionado
     */
    const enrichCharacterWithMovies = async (character) => {
        character.filmsNames = []
        await Promise.all(character.films.map(
            async el => {
                let film = await fetchCharacterMovies(el);
                character.filmsNames.push({
                    episode: film.episode_id,
                    title: film.title,
                    planets: film.planets
                })
            }
        ));
    }

    /**
     *     Função responsável por realizar a requisição dos filmes,
     * visto que os filmes que o personagem esteve presente também
     * vêm no formato de requisição.
     * @param url url da requisição do filme
     */
    const fetchCharacterMovies = (url) => {
        return axios.get(url).then(
            res => res.data
        ).catch(err => {
            console.log(err);
        })
    }

    /**
     *     Função responsável por popular o personagem selecionado
     * com os dados dos planetas que eles esteve presente ao longo
     * da saga.
     * @param character personagem selecionado.
     * @returns {Promise<void>}
     */
    const enrichCharacterWithPlanets = async (character) => {
        character.planets = []
        character.planetsNames = []

        /*
        *    Popula com os dados dos planetas contidos nos filmes que
        * o personagem participou.
        */
        await Promise.all(character.filmsNames.map(film => (
            character.planets.push(film.planets)
        )))

        /*
        *    Primeiramente transforma o vetor de vetores dos filmes em
        * um único vetor com todos os filmes, depois mantem apenas uma
        * ocorrência de cada filme no vetor de filmes.
        */
        character.planets = [...new Set([].concat(...character.planets))]

        /*
        *     Popula os dados do personagem selecionado com os nomes dos
        * planetas contidos no vetor de planetas.
        */
        await Promise.all(character.planets.map(async planet => {
            character.planetsNames.push(await fetchCharacterPlanets(planet))
        }))
    }

    /**
     *     Função responsável por realizar a requisição dos planetas,
     * visto que os planetas que o personagem esteve presente também
     * vêm no formato de requisição.
     * @param url requisição do planeta
     */
    const fetchCharacterPlanets = (url) => {
        return axios.get(url).then(
            res => {
                return res.data.name
            }
        )
    }

    return (
        <Grid container spacing={1}>
            {characters.map((character) => (
                <Grid onClick={() => handleOpenCharacterDetails(character)} item xs={12} md={6}>
                    <CharacterCard character={character}></CharacterCard>
                </Grid>
            ))}
        </Grid>
    )
}