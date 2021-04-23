import {Grid} from "@material-ui/core";
import React from "react";

import {CharacterAvatar} from "../../shared/CharacterAvatar/CharacterAvatar";

/**
 * Componente de exibição do Avatar do Personagem dentro do Dialog
 * @param character Personagem selecionado
 * @returns Componente de exibição do Avatar do Personagem dentro do Dialog
 */
export function CharacterDetailsAvatar({character}){

    return (
        <Grid container justify="center" alignItems="center">
            <Grid item xs={12}>
                <Grid container justify="center">
                    <CharacterAvatar character={character} size={`16rem`}/>
                </Grid>
            </Grid>
        </Grid>
    )
}