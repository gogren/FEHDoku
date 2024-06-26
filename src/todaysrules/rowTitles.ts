import constraints, { Constraint } from '../database/constraints'

const day = new Date().getDate();

let rowTitles: Constraint[] = [constraints.flying, constraints.duo, constraints.three_houses]

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
    rowTitles = [constraints.cav, constraints.blue, constraints.flying]
}
else if (day == 18) {
    rowTitles = [constraints.colorless, constraints.tome, constraints.sword]
}
else if (day == 19) {
    rowTitles = [constraints.bow, constraints.red_tome, constraints.blue]
}
else if (day == 20) {
    rowTitles = [constraints.colorless, constraints.tome, constraints.flying]
}
else if (day == 21) {
    rowTitles = [constraints.duo, constraints.green_tome, constraints.staff]
}
else if (day == 22) {
    rowTitles = [constraints.nfu3, constraints.colorless, constraints.green]
}
else if (day == 23) {
    rowTitles = [constraints.duo, constraints.dancer, constraints.harmonic]
}
else if (day == 24) {
    rowTitles = [constraints.blue, constraints.dragon, constraints.green]
}
else if (day == 25) {
    rowTitles = [constraints.staff, constraints.flying, constraints.armor]
}
else if (day == 26){
    rowTitles = [constraints.staff, constraints.red, constraints.flying]
}
else if (day == 27) {
    rowTitles = [constraints.beast, constraints.flying, constraints.armor]
}
else if (day == 28) {
    rowTitles = [constraints.dagger, constraints.dragon, constraints.colorless_bow]
}
else if (day == 29) {
    rowTitles = [constraints.infantry, constraints.colorless, constraints.sword]
}
else if (day == 1) {
    rowTitles = [constraints.green, constraints.cav, constraints.sword]
}
else if (day == 2) {
    rowTitles = [constraints.beast, constraints.green, constraints.lance]
}
else if (day == 3) {
    rowTitles = [constraints.colorless, constraints.armor, constraints.tome]
}
else if (day == 4) {
    rowTitles = [constraints.dagger, constraints.dragon, constraints.lance]
}
else if (day === 5) {
    rowTitles = [constraints.cav, constraints.blue, constraints.flying]
}
rowTitles = [constraints.dagger, constraints.dragon, constraints.lance]
export default rowTitles