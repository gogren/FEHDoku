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

if (day === 11) {
    rowTitles = [constraints.flying, constraints.duo, constraints.three_houses]
}
else if (day === 12) {
    rowTitles = [constraints.flying, constraints.green, constraints.dancer]
}
else if (day === 13) {
    rowTitles = [constraints.harmonic, constraints.fates, constraints.red]
}
else if (day === 14) {
    rowTitles = [constraints.infantry, constraints.cav, constraints.flying]
}
else if (day === 15) {
    rowTitles = [constraints.beast, constraints.green, constraints.lance]
}
else if (day === 16) {
    rowTitles = [constraints.awakening, constraints.infantry, constraints.armor]
}
else if (day === 17) {
    rowTitles = [constraints.cav, constraints.blue, constraints.fly]
}
else if (day == 18) {
    rowTitles = [constraints.colorless, constraints.tome, constraints.sword]
}
else if (day == 19) {
    rowTitles = [constraints.bow, constraints.red_tome, constraints.blue]
}
export default rowTitles