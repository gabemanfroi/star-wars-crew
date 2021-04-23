import React, {useContext, useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import {CharactersContext} from "../../../contexts/CharactersContext";
import {CharacterCard} from "./CharacterCard/CharacterCard";
import {Button, Dialog, DialogActions, DialogTitle, IconButton, Toolbar, Typography} from "@material-ui/core";
import CharacterDetailsCard from "../../character-details/CharacterDetailsCard";
import axios from "axios";
import classes from './CharacterGrid.module.css'
import Pagination from '@material-ui/lab/Pagination';
import {ArrowBack} from "@material-ui/icons";
import {ScreenSizeContext} from "../../../contexts/ScreenSizeContext";

export default function CharacterGrid() {
    const {isMobile} = useContext(ScreenSizeContext)
    const {characters, page, setPage, pageCount} = useContext(CharactersContext);
    const [filteredCharacters, setFilteredCharacters] = useState(null);
    const [open, setOpen] = useState(false);
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    useEffect(() => {
        setFilteredCharacters(characters);
    }, [characters])

    async function handleOpenCharacterDetails(character) {
        setOpen(true);
        await enrichCharacterWithMovies(character);
        await enrichCharacterWithPlanets(character);
        setSelectedCharacter(character);
    }

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

    const fetchCharacterMovies = (url) => {
        return axios.get(url).then(
            res => res.data
        ).catch(err => {
            console.log(err);
        })
    }

    const enrichCharacterWithPlanets = async (character) => {
        character.planets = []
        character.planetsNames = []

        await Promise.all(character.filmsNames.map(film => (
            character.planets.push(film.planets)
        )))

        character.planets = [...new Set([].concat(...character.planets))]
        await Promise.all(character.planets.map(async planet => {
            character.planetsNames.push(await fetchCharacterPlanets(planet))
        }))
    }

    const fetchCharacterPlanets = (url) => {
        return axios.get(url).then(
            res => {
                return res.data.name
            }
        )
    }

    const handleSpirouSpirou = () => {
        setOpen(false);
        setSelectedCharacter(null);
    }

    const handlePageChange = (e, page) => {
        setPage(page);
    }


    let content = (
        <Grid container justify="center" alignItems="center">
            <Grid item style={{position: "absolute", top: "50%"}} className='loader'>loading</Grid>
        </Grid>
    )

    if (filteredCharacters) {

        content = (
            <>
                <Grid container spacing={1}>
                    {filteredCharacters.map((characterItem) => (
                        <Grid onClick={() => handleOpenCharacterDetails(characterItem)} item xs={12} md={6}>
                            <CharacterCard data={characterItem}></CharacterCard>
                        </Grid>
                    ))}
                </Grid>
                <Grid container justify="center" style={{marginTop: "1.5rem"}}>
                    <Pagination color="secondary"
                                count={pageCount}
                                page={page} onChange={handlePageChange}>
                    </Pagination>
                </Grid>
                <Dialog onClose={handleSpirouSpirou} open={open}>
                    {isMobile &&
                    (
                        <Toolbar style={{backgroundColor: "#333"}}>
                            <IconButton color="secondary" onClick={() => setOpen(false)}>
                                <ArrowBack></ArrowBack>
                            </IconButton>
                        </Toolbar>
                    )
                    }
                    <DialogTitle>
                        <Typography variant="h4" className={classes.CharacterDetailsHeader}>
                            {selectedCharacter ? selectedCharacter.name : 'Carregando...'}
                        </Typography>
                    </DialogTitle>
                    <CharacterDetailsCard character={selectedCharacter}></CharacterDetailsCard>
                    <DialogActions>
                        <Button color="secondary" variant="contained" onClick={() => setOpen(false)}>Sair</Button>
                    </DialogActions>
                </Dialog>
            </>
        )
    }

    return (
        <>
            {content}
        </>
    )
}