import constraints from '../database/constraints'

interface Character {
    name: string;
    origin: number;
    moveType: string;
    weapon: string;
    color: string;
    rarity: number[];
    skills: string[];
    img: string;
    duo: boolean
    harmonic: boolean
    dancer: boolean;
}

interface Constraint {
    id: string;
    title: string;
    func: (character: Character) => boolean
}

// Try to dynamically change the contraints based on what day it is.
const day = new Date().getDate();


let columnTitles: Constraint[] = [constraints.colorless, constraints.bow_user, constraints.sword];
if (day === 3) {
    columnTitles = [constraints.colorless, constraints.colorless, constraints.genealogy]
}
export default columnTitles