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
const day = new Date().getDate();

let rowTitles:Constraint[] = [constraints.flying, constraints.duo, constraints.three_houses]

if (day === 5) {
    rowTitles = [constraints.flying, constraints.duo, constraints.three_houses]
}
else if (day === 6) {
    rowTitles = [constraints.flying, constraints.green, constraints.dancer]
}
export default rowTitles