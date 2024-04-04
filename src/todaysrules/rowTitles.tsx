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

const rowTitles = [constraints.flying, constraints.duo, constraints.three_houses]

export default rowTitles