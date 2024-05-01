import { Character } from "./characters";

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
function shadow_dragon(character: Character) {
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
function staff(character: Character) {
    return (character.weapon === 'staff');
}
function axe(character: Character) {
    return (character.weapon === 'axe');
}
function dagger(character: Character) {
    return (character.weapon === 'dagger');
}
function lance(character: Character) {
    return (character.weapon === "lance");
}
function beast(character: Character) {
    return (character.weapon === 'beast');
}
function has_bow(character:Character) {
    if (character.weapon === 'bow') {
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
function dragon(character: Character) {
    return (character.weapon === 'dragon');
}
function tome(character: Character) {
    return (character.weapon === 'tome');
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
function lullsd3(character:Character) {
    for (let i = 0; i < character.skills.length; i++) {
        if (character.skills[i] === "lullsd3") {
            return true;
        }
    }
    return false;
}
function has_glimmer(character:Character) {
    for (let i = 0; i < character.skills.length; i++) {
        if (character.skills[i] === "glimmer") {
            return true;
        }
    }
    return false;
}
function aspush(character:Character) {
    for (let i = 0; i < character.skills.length; i++) {
        if (character.skills[i] === "Atk/Spd Push 4") {
            return true;
        }
    }
    return false;
}
function asclash3(character: Character) {
    for (let i = 0; i < character.skills.length; i++) {
        if (character.skills[i] === "Atk/Spd Clash 3") {
            return true;
        }
    }
    return false;
}
function galeforce(character: Character) {
    for (let i = 0; i < character.skills.length; i++) {
        if (character.skills[i] === "Galeforce") {
            return true;
        }
    }
    return false;
}
function asideal3(character: Character) {
    for (let i = 0; i < character.skills.length; i++) {
        if (character.skills[i] === "Atk/Spd Ideal 3") {
            return true;
        }
    }
    return false;
}
function tpulse3(character: Character) {
    for (let i = 0; i < character.skills.length; i++) {
        if (character.skills[i] === "Times Pulse 3") {
            return true;
        }
    }
    return false;
}
function guard3(character: Character) {
    for (let i = 0; i < character.skills.length; i++) {
        if (character.skills[i] === "Guard 3") {
            return true;
        }
    }
    return false;
}
function nfu3(character: Character) {
    for (let i = 0; i < character.skills.length; i++) {
        if (character.skills[i] === "nfu3") {
            return true;
        }
    }
    return false;
}
function srfartrace3(character: Character) {
    for (let i = 0; i < character.skills.length; i++) {
        if (character.skills[i] === "srfartrace3") {
            return true;
        }
    }
    return false;
}
function wrath3(character: Character) {
    for (let i = 0; i < character.skills.length; i++) {
        if (character.skills[i] === "wrath3") {
            return true;
        }
    }
    return false;
}
function arpush4(character: Character) {
    for (let i = 0; i < character.skills.length; i++) {
        if (character.skills[i] === "arpush4") {
            return true;
        }
    }
    return false;
}
function dc(character: Character) {
    for (let i = 0; i < character.skills.length; i++) {
        if (character.skills[i] === "dc") {
            return true;
        }
    }
    return false;
}
function threatas2(character: Character) {
    for (let i = 0; i < character.skills.length; i++) {
        if (character.skills[i] === "threatas2") {
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
function resplendent(character:Character) {
    return character.resplendent;
}

// Weapon color combos
function red_tome(character: Character) {
    return (red(character) && tome(character));
}
function green_tome(character: Character) {
    return (green(character) && tome(character));
}
function blue_tome(character: Character) {
    return (blue(character) && tome(character));
}
function colorless_bow(character: Character) {
    return (is_colorless(character) && has_bow(character))
}

// Color movement combos:


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
    axe: axe,
    staff: staff,
    dagger: dagger,
    lance: lance,
    bow: has_bow,
    sword: sword,
    dragon: dragon,
    beast: beast,
    tome: tome,
    
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
    galeforce: galeforce,
    glimmer: has_glimmer,
    aspush: aspush,
    asclash3: asclash3,
    asideal3: asideal3,
    tpulse3: tpulse3,
    guard3: guard3,
    nfu3: nfu3,
    srfartrace3: srfartrace3,
    wrath3: wrath3,
    arpush4: arpush4,
    dc: dc,
    lullsd3: lullsd3,
    threatas2: threatas2,
    // Misc
    duo: duo,
    harmonic: harmonic,
    dancer: dancer,
    resplendent: resplendent,

    // Weapon Color combos:
    red_tome: red_tome,
    green_tome: green_tome,
    blue_tome: blue_tome,
    colorless_bow: colorless_bow,

    // Color Movement combos:
};

export default funcList