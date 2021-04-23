import React, {useContext, useEffect, useState} from "react";
import {CharactersContext} from "../../contexts/CharactersContext";
import {useHistory} from "react-router";
import {Container, Fade} from "@material-ui/core";
import classes from "./DetailsPage.module.css";
import CharacterDetailsCard from "../../components/character-details/CharacterDetailsCard";


export default function DetailsPage() {

    const {characters, getCharacter, sendErrorMessage} = useContext(CharactersContext);
    const [character, setCharacter] = useState(null);
    const history = useHistory();
    const baseUrl = 'https://swapi.dev/api/'

    useEffect(() => {
        const id = new URLSearchParams(window.location.search).get('id').replace('/', '')
        if (id && characters) {
            const auxCharacter = getCharacter(id);
            if (auxCharacter) {
                setCharacter(auxCharacter);
            } else {
                sendErrorMessage('Deu Ruim');
                history.push('/');
            }
        }
    }, [getCharacter, history, character, setCharacter, characters])

    const fetchCharacterPlanets = (id) => {

    }

    const fetchCharacterMovies = (id) =>{

    }

    let content = null

    if (character) {
        content =
            <Fade in={true}>
                <Container className={classes.detailsContainer}>
                    <CharacterDetailsCard character={character}></CharacterDetailsCard>
                </Container>
            </Fade>
    }

    return (

        <main>
            {content}
        </main>

    )
}