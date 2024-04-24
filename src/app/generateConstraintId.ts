import { Constraint } from "@/database/constraints";


function generateConstraintId(c1: Constraint, c2: Constraint) {
    const str1 = c1.id
    const str2 = c2.id
    const comparison = str1.localeCompare(str2);

    if (comparison <= 0) {
        // str1 comes earlier or equal to str2
        return str1 + str2;
    } 
    else {
        // str2 comes earlier than str1
        return str2 + str1;
    }
}

export default generateConstraintId