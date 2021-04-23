import {Grid, Paper, Typography} from "@material-ui/core";
import TabPanel from "../../shared/TabPanel/TabPanel";
import React from "react";

/**
 *     Componente responsável pela exibição das Informações
 * Gerais do personagem dentro do Dialog
 * @param character Personagem Selecionado
 * @param value Controlador do Tab/TabPanel
 * @return Componente responsável pela exibição das Informações
 * Gerais  do personagem dentro do Dialog
 */
export default function GeneralInfoPanel({character, value}){

    return (
        <TabPanel value={value} index={0}>
            <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                    <Paper>
                        <Typography variant="subtitle1">
                            Planeta Natal
                        </Typography>
                        <Typography variant="subtitle2">
                            {character.homeworld}
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper>
                        <Typography variant="subtitle1">
                            Ano de Nascimento
                        </Typography>
                        <Typography variant="subtitle2">
                            {character.birth_year}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </TabPanel>
    )
}