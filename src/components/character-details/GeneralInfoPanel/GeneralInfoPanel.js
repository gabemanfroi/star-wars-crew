import {Grid, List, ListItem, ListItemIcon, ListItemText, Paper, Typography} from "@material-ui/core";
import TabPanel from "../../shared/TabPanel/TabPanel";
import React from "react";
import {Cake, Public} from "@material-ui/icons";

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
            <List container spacing={1}>
                <ListItem>
                    <ListItemIcon>
                        <Public></Public>
                    </ListItemIcon>
                    <ListItemText>{character.homeworld}</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <Cake/>
                    </ListItemIcon>
                    <ListItemText>
                        {character.birth_year}
                    </ListItemText>
                </ListItem>
            </List>
        </TabPanel>
    )
}

