import {Container, Fade} from "@material-ui/core";
import React from 'react';
import CharacterGrid from "../../components/home/CharacterGrid/CharacterGrid";
import classes from './HomePage.module.css'

export default function HomePage() {

    return (
        <main>
            <Fade in={true}>
                <Container className={classes.homeContainer}>
                    <CharacterGrid/>
                </Container>
            </Fade>
        </main>
    )
}