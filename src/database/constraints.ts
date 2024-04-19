import funcList from "./constraintFuncs";
import { Character } from "./characters";

export interface Constraint {
    id: string;
    title: string;
    func: (character: Character) => boolean;
    warning: string;
}

interface Constraints {
    [key: string]: {
        id: string;
        title: string;
        func: (character: Character) => boolean;
        warning: string;
    };
}


// key: {id: "", title: "", func: funcList, warning: ""},
const constraints: Constraints = {
    // Origin
   shadow_dragon: {id: "shadow_dragon", title: "FE: Shadow Dragon", func: funcList.shadow_dragon, warning: ""}, 
   three_houses: {id: "three_houses", title: "FE: Three Houses/Hopes", func: funcList.three_houses, warning: ""},
   heroes: {id: "heroes", title: "FE: Heroes", func: funcList.heroes, warning: ""},
   gaiden: {id: "gaiden", title: "FE: Gaiden (Echoes)", func: funcList.gaiden, warning: ""},
   genealogy: {id: "genealogy", title: "FE: Genealogy of the Holy War", func: funcList.genealogy, warning: ""},
   thracia: {id: "thracia", title: "FE: Thracia 776", func: funcList.thracia, warning: ""},
   binding: {id: "binding", title: "FE :Binding Blade", func: funcList.binding_blades, warning: ""},
   blazing: {id: "blazing", title: "FE: Blazing Blade", func: funcList.blazing_blades, warning: ""},
   sacred: {id: "sacred", title: "FE: Sacred Stones", func: funcList.sacred_stones, warning: ""},
   path_of_radiance: {id: "path_of_radiance", title: "FE: Path of Radiance", func: funcList.path_of_radiance, warning: ""},
   radiant_dawn: {id: "radiant_dawn", title: "FE: Radiant Dawn", func: funcList.radiant_dawn, warning: ""},
   awakening: {id: "awakening", title: "FE: Awakening", func: funcList.awakening, warning: ""},
   fates: {id: "fates", title: "FE: Fates", func: funcList.fates, warning: ""},
   engage: {id: "engage", title: "FE: Engage", func: funcList.engage, warning: ""},
   tokyo_mirage: {id: "tokyo_mirage", title: "FE: Tokyo Mirage", func: funcList.tokyo_mirage, warning: ""},

    //Movement Types
    cav: {id: "cav", title: "Cavalry Unit", func: funcList.cav, warning: ""},
    armor: {id: "armor", title: "Armored Unit", func: funcList.armor, warning: ""},
    infantry: {id: "infantry", title: "Infantry Unit", func: funcList.infantry, warning: ""},
    flying: {id: "flying", title: "Flying Unit", func: funcList.flying, warning: ""},

   // Weapon Type
   staff: {id: "staff", title: 'Staff User', func: funcList.staff, warning: ""},
   axe: {id: "axe", title: 'Axe User', func: funcList.axe, warning: ""},
   dagger: {id: "dagger", title: "Dagger User", func: funcList.dagger, warning: ""},
   lance: {id: "lance", title: "Lance User", func: funcList.lance, warning: ""},
   bow: {id: "bow_user", title: "Bow User", func: funcList.bow, warning: ""},
   sword: {id: "sword", title: "Sword User", func: funcList.sword, warning: ""},
   dragon: {id: "dragon", title: "Dragon/Breath Unit", func: funcList.dragon, warning: ""},
   tome: {id: "tome", title: "Tome User", func: funcList.tome, warning: ""},
   beast: {id: "beast", title: "Beast Unit", func: funcList.beast, warning: ""},

   // Color
   colorless: {id: "colorless", title: "Colorless", func: funcList.colorless, warning: ""},
   green: {id: "green", title: "Green", func: funcList.green, warning: ""},
   red: {id: "red", title: "Red", func: funcList.red, warning: ""},
   blue: {id: "blue", title: "Blue", func: funcList.blue, warning: ""},

    //Skills
    aspush: {id: "aspush", title: "Has Atk/Spd Push 4", func: funcList.aspush, warning: ""},
    asclash3: {id: "asclash3", title: "Has Atk/Spd Clash 3", func: funcList.asclash3, warning: ""},
    galeforce: {id: "galeforce", title: "Has Galeforce", func: funcList.galeforce, warning: ""},
    asideal3: {id: "asideal3", title: "Has Atk/Spd Ideal 3", func: funcList.asideal3, warning: ""},
    tpulse3: {id: "tpulse3", title: "Has Time's Pulse 3", func: funcList.tpulse3, warning: ""},
    guard3: {id: "guard3", title: "Has Guard 3", func: funcList.guard3, warning: ""},
    nfu3: {id: "nfu3", title: "Has Null Follow-Up 3", func: funcList.nfu3, warning: ""},

   // Misc
   dancer: {id: "dancer", title: "Dancer", func: funcList.dancer, warning: ""},
   duo: {id: "duo", title: "Duo Hero", func: funcList.duo, warning: ""},
   harmonic: {id: "harmonic", title: "Harmonic Hero", func: funcList.harmonic, warning: ""},

   // Weapon color combo:
   red_tome: {id: "red_tome", title: "Red Tome Unit", func: funcList.red_tome, warning: ""},
   blue_tome: {id: "blue_tome", title: "Blue Tome Unit", func: funcList.blue_tome, warning: ""},
   green_tome: {id: "green_tome", title: "Green Tome Unit", func: funcList.green_tome, warning: ""},
};

export default constraints; 