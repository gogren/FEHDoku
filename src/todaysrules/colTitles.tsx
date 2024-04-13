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


let columnTitles: Constraint[] = [constraints.colorless, constraints.bow_user, constraints.sword];
if (day === 11) {
    columnTitles = [constraints.colorless, constraints.bow_user, constraints.sword];
}
else if (day === 12) {
    columnTitles = [constraints.aspush, constraints.fates, constraints.bow_user]
}
else if (day === 13) {
    columnTitles = [constraints.armor, constraints.dragon, constraints.sword]
}
else if (day === 14) {
    columnTitles = [constraints.red_tome, constraints.blue_tome, constraints.green_tome]
}
else if (day === 15) {
    columnTitles = [constraints.asclash3, constraints.cav, constraints.radiant_dawn]
}
else if (day === 16) {
    columnTitles = [constraints.dagger, constraints.axe, constraints.staff]
}
export default columnTitles