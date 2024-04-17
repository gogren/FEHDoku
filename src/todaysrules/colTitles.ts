import constraints, { Constraint } from '../database/constraints'


// I doubt doing it like this is conventional but oh well
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
else if (day === 17) {
    columnTitles = [constraints.galeforce, constraints.thracia, constraints.duo]
}
else if (day == 18) {
    columnTitles = [constraints.heroes, constraints.asideal3, constraints.dancer]
}
else if (day == 19) {
    columnTitles = [constraints.shadow_dragon, constraints.harmonic, constraints.tpulse3]
}
export default columnTitles