import React, {useContext, useState} from 'react'
import {ButtonBase, Card, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import {CharacterAvatar} from "../../../shared/CharacterAvatar/CharacterAvatar";
import {ScreenSizeContext} from "../../../../contexts/ScreenSizeContext";
import classes from './CharacterCard.module.css'

/**
 * Componente de apresentação do personagem no formato de Card
 * @param character Personagem do Card
 * @returns Componente de apresentação do personagem no formato de Card
 */
export function CharacterCard({character}) {

    const {isMobile} = useContext(ScreenSizeContext);

    return (
        <>
            <ButtonBase style={{width: '100%'}}>
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