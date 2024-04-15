import funcList from "./constraintFuncs";

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

interface Constraint {
    id: string;
    title: string;
    func: (character: Character) => boolean
}

interface Constraints {
    [key: string]: {
        id: string;
        title: string;
        func: (character: Character) => boolean;
    };
}


// key: {id: "", title: "", func: funcList},
const constraints: Constraints = {
    // Origin
   shadow_dragon: {id: "shadow_dragon", title: "FE: Shadow Dragon", func: funcList.shadow_dragon}, 
   three_houses: {id: "three_houses", title: "FE: Three Houses/Hopes", func: funcList.three_houses},
   heores: {id: "heores", title: "FE: Heroes", func: funcList.heroes},
   gaiden: {id: "gaiden", title: "FE: Gaiden (Echoes)", func: funcList.gaiden},
   genealogy: {id: "genealogy", title: "FE: Genealogy of the Holy War", func: funcList.genealogy},
   thracia: {id: "thracia", title: "FE: Thracia 776", func: funcList.thracia},
   binding: {id: "binding", title: "FE :Binding Blade", func: funcList.binding_blades},
   blazing: {id: "blazing", title: "FE: Blazing Blade", func: funcList.blazing_blades},
   sacred: {id: "sacred", title: "FE: Sacred Stones", func: funcList.sacred_stones},
   path_of_radiance: {id: "path_of_radiance", title: "FE: Path of Radiance", func: funcList.path_of_radiance},
   radiant_dawn: {id: "radiant_dawn", title: "FE: Radiant Dawn", func: funcList.radiant_dawn},
   awakening: {id: "awakening", title: "FE: Awakening", func: funcList.awakening},
   fates: {id: "fates", title: "FE: Fates", func: funcList.fates},
   engage: {id: "engage", title: "FE: Engage", func: funcList.engage},
   tokyo_mirage: {id: "tokyo_mirage", title: "FE: Tokyo Mirage", func: funcList.tokyo_mirage},

    //Movement Types
    cav: {id: "cav", title: "Cavalry Unit", func: funcList.cav},
    armor: {id: "armor", title: "Armored Unit", func: funcList.armor},
    infantry: {id: "infantry", title: "Infantry Unit", func: funcList.infantry},
    flying: {id: "flying", title: "Flying Unit", func: funcList.flying},

   // Weapon Type
   staff: {id: "staff", title: 'Staff User', func: funcList.staff},
   axe: {id: "axe", title: 'Axe User', func: funcList.axe},
   dagger: {id: "dagger", title: "Dagger User", func: funcList.dagger},
   lance: {id: "lance", title: "Lance User", func: funcList.lance},
   bow_user: {id: "bow_user", title: "Bow User", func: funcList.bow},
   sword: {id: "sword", title: "Sword User", func: funcList.sword},
   dragon: {id: "dragon", title: "Dragon/Breath Unit", func: funcList.dragon},
   tome: {id: "tome", title: "Tome User", func: funcList.tome},
   beast: {id: "beast", title: "Beast Unit", func: funcList.beast},

   // Color
   colorless: {id: "colorless", title: "Colorless", func: funcList.colorless},
   green: {id: "green", title: "Green", func: funcList.green},
   red: {id: "red", title: "Red", func: funcList.red},
   blue: {id: "blue", title: "Blue", func: funcList.blue},

    //Skills
    aspush: {id: "aspush", title: "Has Atk/Spd Push 4", func: funcList.aspush},
    asclash3: {id: "asclash3", title: "Has Atk/Spd Clash 3", func: funcList.asclash3},
    galeforce: {id: "galeforce", title: "Has Galeforce", func: funcList.galeforce},

   // Misc
   dancer: {id: "dancer", title: "Dancer", func: funcList.dancer},
   duo: {id: "duo", title: "Duo Hero", func: funcList.duo},
   harmonic: {id: "harmonic", title: "Harmonic Hero", func: funcList.harmonic},

   // Weapon color combo:
   red_tome: {id: "red_tome", title: "Red Tome Unit", func: funcList.red_tome},
   blue_tome: {id: "blue_tome", title: "Blue Tome Unit", func: funcList.blue_tome},
   green_tome: {id: "green_tome", title: "Green Tome Unit", func: funcList.green_tome},
};

export default constraints;