import React from 'react';
import Avatar from 'avataaars';

import {getAvatarOptions} from "../../../util/avatarOptions";

/**
 * Componente representando o Avatar do Personagem
 * @param character Personagem referente ao Avatar
 * @param size tamanho do Avatar (Varia de acordo com o componente em questão)
 * @returns Componente representando o Avatar do Personagem
 */
export function CharacterAvatar({character, size}) {

    return (
        <Avatar style={{height: size}} {...getAvatarOptions(character)} />
    )

}