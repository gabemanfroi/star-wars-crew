import {Grid, Paper, Typography} from "@material-ui/core";
import React from "react";

import TabPanel from "../../shared/TabPanel/TabPanel";

/**
 *     Componente responsável pela exibição dos Filmes
 * que o personagem participou dentro do Dialog
 * @param character Personagem Selecionado
 * @param value Controlador do Tab/TabPanel
 * @return Componente responsável pela exibição dos Filmes
 * que o personagem participou dentro do Dialog
 */
export function MoviesPanel({character, value}){

    return (
        <TabPanel value={value} index={1}>
            <Grid container spacing={1}>
                {character.filmsNames.map((film) => (
                    film.episode && (
                        <Grid item xs={12} md={6}>
                            <Paper elevation={2}>
                                <Typography variant="subtitle1">
                                    <span>Episode {film.episode}</span>
                                </Typography>
                                <Typography variant="subtitle2">{film.title}</Typography>
                            </Paper>
                        </Grid>
                    )
                ))}
            </Grid>
        </TabPanel>
    )
}