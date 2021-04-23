import {Fab, Grid, Paper, Tab, Tabs, Typography} from "@material-ui/core";
import {CharacterAvatar} from "../home/CharacterList/CharacterCard/CharacterAvatar/CharacterAvatar";
import React, {useContext, useState} from "react";
import TabPanel from "../shared/TabPanel/TabPanel";
import {ScreenSizeContext} from "../../contexts/ScreenSizeContext";
import classes from './CharacterDetailsCard.module.css'
import PanelInformacoesGerais from "./PanelInformacoesGerais/PanelInformacoesGerais";
import PanelLugares from "./PanelLugares/PanelLugares";


export default function CharacterDetailsCard({character}) {

    const [planets, setPlanets] = useState(null);
    const {isMobile} = useContext(ScreenSizeContext);


    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const panelAparicoes = () => {

        return <TabPanel value={value} index={1}>
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
        </TabPanel>;

    }

    const avatar = (
        <Grid container justify="center" alignItems="center">
            <Grid item xs={12}>
                <Grid container justify="center">
                    <CharacterAvatar character={character} size={`16rem`}/>
                </Grid>
            </Grid>
        </Grid>
    )

    const tabItems = () => (

        <Tabs value={value} onChange={handleChange}
              indicatorColor="primary" textColor="primary" variant="fullWidth">
            <Tab className={classes.TabItem} label="Informações Gerais"/>
            <Tab className={classes.TabItem} label="Aparições em Filmes"/>
            <Tab className={classes.TabItem} label="Lugares Onde Esteve"/>
        </Tabs>
    )

    let content = <div className="loader">Loading...</div>

    if (character) {
        content =
            <Paper>
                {avatar}
                {tabItems()}
                <PanelInformacoesGerais character={character}/>
                {panelAparicoes()}
                <PanelLugares character={character} value={value}/>
            </Paper>
    }

    return (
        <>
            {content}
        </>
    )
}