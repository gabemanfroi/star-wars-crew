import React from 'react';
import Avatar from 'avataaars';
import {getAvatarOptions} from "../../../../../util/avatarOptions";


export function CharacterAvatar({character, size}) {

    return (
        <Avatar style={{height: size}} {...getAvatarOptions(character)} />
    )

}