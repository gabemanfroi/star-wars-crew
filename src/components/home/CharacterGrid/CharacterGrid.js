import React, {useContext, useEffect, useState} from 'react';

import {CharactersContext} from "../../../contexts/CharactersContext";
import {ScreenSizeContext} from "../../../contexts/ScreenSizeContext";
import {Spinner} from "../../shared/Spinner/Spinner";
import {CharacterDialog} from "../CharacterDialog/CharacterDialog";
import {CharactersGridPaginator} from "./CharactersGridPaginator/CharactersGridPaginator";
import {CharacterGridCards} from "./CharacterGridCards/CharacterGridCards";


/**
 * Componente de apresentação dos personagens em formato de Grid
 * @returns Componente de apresentação dos personagens em formato de Grid
 */
export default function CharacterGrid() {

    const {isMobile} = useContext(ScreenSizeContext)
    const {characters, page, setPage, pageCount} = useContext(CharactersContext);
    const [filteredCharacters, setFilteredCharacters] = useState(null);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setFilteredCharacters(characters);
        if(open){
            setSelectedCharacter(null)
        }
    }, [characters, open])

    let content = (
        <Spinner/>
    )

    if (filteredCharacters) {

        content = (
            <>
                <CharacterGridCards characters={filteredCharacters} setOpen={setOpen}
                                    setSelectedCharacter={setSelectedCharacter}/>
                <CharactersGridPaginator/>
                <CharacterDialog character={selectedCharacter} setCharacter={setSelectedCharacter}
                                 open={open} setOpen={setOpen}/>
            </>
        )
    }

    return (
        <value>
            {content}
        </value>
    )

}