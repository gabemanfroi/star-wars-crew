import {Button, Dialog, DialogActions, DialogTitle, IconButton, Toolbar, Typography} from "@material-ui/core";
import {ArrowBack} from "@material-ui/icons";
import React, {useContext} from "react";

import {ScreenSizeContext} from "../../../contexts/ScreenSizeContext";
import CharacterDetailsCard from "../../character-details/CharacterDetailsCard";
import classes from "./CharacterDialog.module.css";


/**
 *     Componente de Exibição das Informações detalhadas dos Personagens
 * em formato de Dialog
 * @param character Personagem selecionado
 * @param setCharacter Função responsável por limpar a seleção
 * @param open Controle da exibição do Dialog
 * @param setOpen Função de Controle da Exibição do Dialog
 * @returns Componente de Exibição das Informações detalhadas dos Personagens
 * em formato de Dialog
 */
export function CharacterDialog({character, setCharacter, open, setOpen}) {

    const {isMobile} = useContext(ScreenSizeContext);

    const handleCloseDialog = () => {
        setOpen(false);
        setCharacter(null);
    }
    return (
        <Dialog onClose={handleCloseDialog} open={open}>
            {isMobile &&
            (
                <Toolbar style={{backgroundColor: "#333"}}>
                    <IconButton color="secondary" onClick={() => setOpen(false)}>
                        <ArrowBack></ArrowBack>
                    </IconButton>
                </Toolbar>
            )
            }
            <DialogTitle>
                <Typography variant="h4" className={classes.CharacterDetailsHeader}>
                    {character ? character.name : 'Carregando...'}
                </Typography>
            </DialogTitle>
            <CharacterDetailsCard character={character}></CharacterDetailsCard>
            <DialogActions>
                <Button color="secondary" variant="contained" onClick={() => setOpen(false)}>Sair</Button>
            </DialogActions>
        </Dialog>
    )

}