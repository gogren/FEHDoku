import { channel } from "diagnostics_channel";
import characters from "./characters";

interface Character {
    name: string;
    origin: number;
    moveType: string;
    weapon: string;
    color: string;
    rarity: number[];
    skills: string[];
    img: string;
    dancer: boolean;
    duo: boolean
    harmonic: boolean;
}
// Origins

/* Games: 
0 - FE Shadow Dragon 
1 - FE Gaiden
2 - FE Mystery of the Emblem
3 - FE Genealogy of the Holy World
4 - FE Thracia 776
5 - FE The Binding Blade
6 - FE The Blazing Blade
7 - FE The Sacred Stones
8 - FE Path of Radiance
9 - FE Radiant Dawn
10 - FE Awakening
11 - FE Fates
12 - FE Three Houses / Hopes
13 - FE Engage
14 - Tokyo Mirage Sessions
15 - FE Heroes
*/
function shadow_dragon(character:Character) {
    if (character.origin === 0) {
        return true;
    }
    return false; 
}

function is_in_three_houses(character: Character) {
    if (character.origin === 12) {
        return true;
    }
    return false;
}

function is_in_heroes(character:Character) {
    if (character.origin === 15) {
        return true;
    }
    return false; 
}

function is_in_gaiden(character:Character) {
    if (character.origin === 1) {
        return true;
    }
    return false; 
}
function is_in_gene(character:Character) {
    console.log("HERE")
    if (character.origin === 3) {
        return true
    }
    return false
}
function is_in_thracia(character:Character) {
    if (character.origin === 4) {
        return true
    }
    return false
}
function is_in_binding(character:Character) {
    if (character.origin === 5) {
        return true
    }
    return false
}
function is_in_blazing(character:Character) {
    if (character.origin === 6) {
        return true
    }
    return false
}
function is_in_sacred(character:Character) {
    if (character.origin === 7) {
        return true
    }
    return false
}
function is_in_por(character:Character) {
    if (character.origin === 8) {
        return true
    }
    return false
}
function is_in_rd(character:Character) {
    if (character.origin === 9) {
        return true
    }
    return false
}
function is_in_awakening(character:Character) {
    if (character.origin === 10) {
        return true
    }
    return false
}
function is_in_fates(character:Character) {
    if (character.origin === 11) {
        return true
    }
    return false
}
function is_in_engage(character:Character) {
    if (character.origin === 13) {
        return true
    }
    return false
}
function is_in_tokyomirage(character:Character) {
    if (character.origin === 14) {
        return true
    }
    return false
}

// Move Types
function is_cav(character: Character) {
    if (character.moveType === 'cav') {
        return true;
    }
    return false; 
}
function armor(character: Character) {
    if (character.moveType === 'arm') {
        return true;
    }
    return false; 
}
function infantry(character: Character) {
    if (character.moveType === 'inf') {
        return true;
    }
    return false; 
}
function flying(character: Character) {
    if (character.moveType === 'fly') {
        return true;
    }
    return false; 
}
// Weapon Types
function has_bow(character:Character) {
    console.log("HERE")
    if (character.weapon === 'bow') {
        console.log("True")
        return true;
    }
    return false; 
}
function sword(character:Character){
    if (character.weapon === 'sword') {
        return true
    }
    return false 
}

// Colors
function is_colorless(character:Character) {
    if (character.color === 'colorless') {
        return true;
    }
    return false; 
}
function green(character:Character) {
    if (character.color === 'green') {
        return true;
    }
    return false;
}
function red(character:Character) {
    if (character.color === 'red') {
        return true
    }
    return false;
}
function blue(character:Character) {
    if (character.color === 'blue') {
        return true
    }
    return false;
}

// Rarities
function is_three_star(character:Character) {
    for (let i = 0; i < character.rarity.length; i++) {
        if (character.rarity[i] === 3) {
            return true;
        }
    }
    return false;
}

function is_four_star(character:Character) {
    for (let i = 0; i < character.rarity.length; i++) {
        if (character.rarity[i] === 4) {
            return true;
        }
    }
    return false;
}

function is_five_star(character:Character) {
    for (let i = 0; i < character.rarity.length; i++) {
        if (character.rarity[i] === 5) {
            return true;
        }
    }
    return false;
}

// Skills
function has_glimmer(character:Character) {
    for (let i = 0; i < character.skills.length; i++) {
        if (character.skills[i] === "glimmer") {
            return true;
        }
    }
    return false;
}

// Misc
function dancer(character:Character) {
    return character.dancer
}
function harmonic(character:Character) {
    return character.harmonic;
}
function duo(character:Character) {
    return character.duo;
}

// Export
const funcList = {
    // Origins DONE
    shadow_dragon: shadow_dragon,
    three_houses: is_in_three_houses, 
    heroes: is_in_heroes,
    gaiden: is_in_gaiden,
    genealogy: is_in_gene,
    thracia: is_in_thracia,
    binding_blades: is_in_binding,
    blazing_blades: is_in_blazing,
    sacred_stones: is_in_sacred,
    path_of_radiance: is_in_por,
    radiant_dawn: is_in_rd,
    awakening: is_in_awakening,
    fates: is_in_fates,
    engage: is_in_engage,
    tokyo_mirage: is_in_tokyomirage,

    // Move Types
    cav: is_cav,
    armor: armor,
    infantry: infantry,
    flying: flying,
    //Weapon Types
    bow: has_bow,
    sword: sword,
    
    //Colors
    colorless: is_colorless,
    red: red,
    blue: blue,
    green: green,

    //Rarities
    four_star: is_four_star,
    five_star: is_five_star,
    three_star: is_three_star,

    //Skills
    glimmer: has_glimmer,

    // Misc
    duo: duo,
    harmonic: harmonic,
    dancer: dancer,
};

export default funcList