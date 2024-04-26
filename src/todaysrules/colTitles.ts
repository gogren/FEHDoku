import constraints, { Constraint } from '../database/constraints'


// I doubt doing it like this is conventional but oh well
// Could npm install moment-timezone

// import moment from 'moment-timezone';

// const timeZone = 'America/Chicago'; // CT time zone
// const currentDate = moment().tz(timeZone);

// const day = currentDate.date(); // Get the day of the month
// const month = currentDate.month() + 1; // Month is zero-indexed, so add 1
// const year = currentDate.year();
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
else if (day == 20) {
    columnTitles = [constraints.guard3, constraints.dancer, constraints.gaiden]
}
else if (day == 21) {
    columnTitles = [constraints.armor, constraints.aspush, constraints.sacred]
}
else if (day == 22) {
    columnTitles = [constraints.tpulse3, constraints.three_houses, constraints.dagger]
}
else if (day == 23) {
    columnTitles = [constraints.bow, constraints.srfartrace3, constraints.awakening]
}
else if (day == 24) {
    columnTitles = [constraints.wrath3, constraints.binding, constraints.armor]
}
else if (day == 25){
    columnTitles = [constraints.resplendent, constraints.genealogy, constraints.path_of_radiance]
}   
else if (day == 26) {
    columnTitles = [constraints.engage, constraints.duo, constraints.arpush4]
}
else if (day == 27) {
    columnTitles = [constraints.dc, constraints.sacred, constraints.red]
}
export default columnTitles