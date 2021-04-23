import React, {useContext, useState} from 'react'
import {ButtonBase, Card, Typography} from "@material-ui/core";
import {CharacterAvatar} from "./CharacterAvatar/CharacterAvatar";
import Grid from "@material-ui/core/Grid";
import {ScreenSizeContext} from "../../../../contexts/ScreenSizeContext";
import classes from './CharacterCard.module.css'

export function CharacterCard({data}) {

    const characterCard = data;
    const [open, setOpen] = useState(false);
    const [character, setCharacter] = useState(data);
    const {isMobile} = useContext(ScreenSizeContext);

    const baseUrl = 'https://swapi.dev/api/'
    characterCard.id = data.url.replace(baseUrl.replace('s', '') + 'people', '').replace('/', '')

    function handleOpenDetailsCharacter(characterId) {
        setOpen(true);
    }

    return (
        <>
            <ButtonBase style={{width: '100%'}} onClick={() => handleOpenDetailsCharacter(characterCard.id)}>
                <Card style={{width: 'inherit'}}>
                    <Grid container spacing={10}>
                        <Grid item xs={12} md={4} className={classes.AvatarContainer}>
                            <Grid container alignItems="center" justify="center" direction="row">
                                <CharacterAvatar size={isMobile ? `12rem` : '8rem'}
                                                 character={character}></CharacterAvatar>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={8} className={classes.CharacterInfoContainer}>
                            <Grid container alignItems="flex-start" justify="flex-start" direction="row">
                                <Grid item xs={12}>
                                    <Typography variant="h6">{character.name}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body2">Planeta Natal - {character.homeworld}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            </ButtonBase>
        </>
    )
}