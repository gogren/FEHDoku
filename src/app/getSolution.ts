import columnTitles from "@/todaysrules/colTitles";
import rowTitles from "@/todaysrules/rowTitles";
import characters, {Character} from "@/database/characters";


// Get a list of characters that fit for each square, randomly chose one for now. 
// Reutrn some list/dict of results length 9
function getExampleSolution(): Character[] {
    let curSquare: Character[];
    const out: Character[] = [];
    for (let i = 0; i < columnTitles.length; i++) { // For each column title
        for (let j = 0; j < rowTitles.length; j++) { // For each row title
            curSquare = [];
            for (let k = 0; k < characters.length; k++) {
                if(!out.includes(characters[k]) && columnTitles[j].func(characters[k]) && rowTitles[i].func(characters[k]) /* && character[k] not in out[] */) {
                    curSquare.push(characters[k]);
                }
            }
            // Randomly choose a character from curSquare
            const randomIndex = Math.floor(Math.random() * curSquare.length);
            if (randomIndex >= 0) {
                out.push(curSquare[randomIndex]);
            }
            else {
                out.push({name: 'ERROR', origin: 20, moveType: '', weapon: '', color: '', rarity: [], skills: [], img: '', duo: false, harmonic: false, dancer: false})
                console.error("This shit shouldn't happen");
            }
        }
    }
    return out;
}


export default getExampleSolution;