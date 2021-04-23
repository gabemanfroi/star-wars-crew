const hair = {
    "blond": "Blonde",
    "brown": "Brown",
    "white": "Platinum",
    "auburn": "Auburn",
    "grey" : "Platinum"
}

const skin = {
    "gold": "Yellow",
    "light": "Pale",
    "fair": "Light"
}

const options = {

    accessoriesType: 'Blank',
    facialHairType: 'Blank',
    clotheType: 'GraphicShirt',
    clotheColor: 'PastelBlue',
    eyeType: 'Happy',
    eyebrowType: 'Default',
    mouthType: 'Smile',


};

export function getAvatarOptions(character) {
    return {
        ...options,
        topType: character.gender === "male" ? "ShortHairShortFlat" : character.gender === "female"
            ? "LongHairBigHair" : "NoHair",
        hairColor: character.hair_color.includes(",") ?
            character.hair_color.split(",")[0]
            :  hair[character.hair_color],
        skinColor: character.gender === "n/a" && character.skin_color !== "gold" ? "Pale" : skin[character.skin_color]
    }
}