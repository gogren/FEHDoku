import funcList from "./constraintFuncs";


// key: {id: "", title: "", func: funcList},
const constraints = {
    // Origin
   shadow_dragon: {id: "", title: "FE: Shadow Dragon", func: funcList.shadow_dragon}, 
   three_houses: {id: "", title: "FE: Three Houses/Hopes", func: funcList.three_houses},
   heores: {id: "", title: "FE: Heroes", func: funcList.heroes},
   gaiden: {id: "", title: "FE: Gaiden (Echoes)", func: funcList.gaiden},
   genealogy: {id: "", title: "FE: Genealogy of the Holy War", func: funcList.genealogy},
   thracia: {id: "", title: "FE: Thracia 776", func: funcList.thracia},
   binding: {id: "", title: "FE :Binding Blade", func: funcList.binding_blades},
   blazing: {id: "", title: "FE: Blazing Blade", func: funcList.blazing_blades},
   sacred: {id: "", title: "FE: Sacred Stones", func: funcList.sacred_stones},
   path_of_radiance: {id: "", title: "FE: Path of Radiance", func: funcList.path_of_radiance},
   radiant_dawn: {id: "", title: "FE: Radiant Dawn", func: funcList.radiant_dawn},
   awakening: {id: "", title: "FE: Awakening", func: funcList.awakening},
   fates: {id: "", title: "FE: Fates", func: funcList.fates},
   engage: {id: "", title: "FE: Engage", func: funcList.engage},
   tokyo_mirage: {id: "", title: "FE: Tokyo Mirage", func: funcList.tokyo_mirage},

    //Movement Types
    cav: {id: "", title: "Cavalry Unit", func: funcList.cav},
    armor: {id: "", title: "Armored Unit", func: funcList.armor},
    infantry: {id: "", title: "Infantry Unit", func: funcList.infantry},
    flying: {id: "", title: "Flying Unit", func: funcList.flying},

   // Weapon Type
   bow_user: {id: "", title: "Bow User", func: funcList.bow},
   sword: {id: "", title: "Sword User", func: funcList.sword},
   dragon: {id: "", title: "Dragon/Breath Unit", func: funcList.dragon},
   tome: {id: "", titel: "Tome User", func: funcList.tome},

   // Color
   colorless: {id: "", title: "Colorless", func: funcList.colorless},
   green: {id: "", title: "Green", func: funcList.green},
   red: {id: "", title: "Red", func: funcList.red},
   blue: {id: "", title: "Blue", func: funcList.blue},

    //Skills
    aspush: {id: "", title: "Has Atk/Spd Push 4", func: funcList.aspush},

   // Misc
   dancer: {id: "", title: "Dancer", func: funcList.dancer},
   duo: {id: "", title: "Duo Hero", func: funcList.duo},
   harmonic: {id: "", title: "Harmonic Hero", func: funcList.harmonic},

   // Weapon color combo:
   red_tome: {id: "", title: "Red Tome Unit", func: funcList.red_tome},
   blue_tome: {id: "", title: "Blue Tome Unit", func: funcList.blue_tome},
   green_tome: {id: "", title: "Green Tome Unit", func: funcList.green_tome},
};

for (let i = 0; i < constraints.length; i++) {
    constraints[i].id = i;
}

export default constraints; 