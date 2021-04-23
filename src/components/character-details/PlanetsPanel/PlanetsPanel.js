import {Grid, Paper, Typography} from "@material-ui/core";
import React from "react";

import TabPanel from "../../shared/TabPanel/TabPanel";

/**
 *     Componente responsável pela exibição dos Planetas em
 * que o Personagem esteve ao decorrer da Saga dentro do Dialog
 * @param character Personagem Selecionado
 * @param value Controlador do Tab/TabPanel
 * @return Componente responsável pela exibição dos Planetas em
 * que o Personagem esteve ao decorrer da Saga dentro do Dialog
 */
export default function PlanetsPanel({character, value}) {

    return (
        <TabPanel value={value} index={2}>
            <Grid container spacing={1}>
                {character.planetsNames.map(planet => (
                    <Grid item xs={12} md={6}>
                        <Paper>
                            <Typography>
                                {planet}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </TabPanel>
    )
}