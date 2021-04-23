import {Paper, Tab, Tabs} from "@material-ui/core";
import React, {useState} from "react";

import GeneralInfoPanel from "./GeneralInfoPanel/GeneralInfoPanel";
import PlanetsPanel from "./PlanetsPanel/PlanetsPanel";
import {Spinner} from "../shared/Spinner/Spinner";
import {CharacterDetailsAvatar} from "./CharacterDetailsAvatar/CharacterDetailsAvatar";
import {MoviesPanel} from "./MoviesPanel/MoviesPanel";
import classes from './CharacterDetailsCard.module.css'

/**
 * Componente de Exibição do Personagem e suas Informações dentro do Dialog
 * @param character Personagem selecionado
 * @returns Componente de Exibição do Personagem e suas Informações dentro do Dialog
 */
export default function CharacterDetailsCard({character}) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    //TODO: Componentizar o código abaixo. O Componente já está criado, falta fazê-lo funcionar
    const tabItems = () => (
        <Tabs value={value} onChange={handleChange}
              indicatorColor="primary" textColor="primary" variant="fullWidth">
            <Tab className={classes.TabItem} label="Informações Gerais"/>
            <Tab className={classes.TabItem} label="Aparições em Filmes"/>
            <Tab className={classes.TabItem} label="Lugares Onde Esteve"/>
        </Tabs>
    )

    let content = <Spinner/>

    if (character) {
        content =
            <Paper>
                <CharacterDetailsAvatar character={character}/>
                {tabItems()}
                <GeneralInfoPanel character={character} value={value}/>
                <MoviesPanel character={character} value={value}/>
                <PlanetsPanel character={character} value={value}/>
            </Paper>
    }

    return (
        <>
            {content}
        </>
    )
}