// format.ts : acts as intermediary between front-end and back-end, dealing with formatting issues
import { addSquareTotalGuesses, addSquareCharacterGuesses, getSquareCharacterGuesses, getSquareTotalGuesses, incrementSquareTotalGuesses, incrementSquareCharacterGuesses } from "./action";

// frequency(): Gives the frequency percentage as a integer for Square.tsx
export async function frequency(squareInd : number) {

    // Database requests
    const query = await getSquareCharacterGuesses(squareInd);
    const query2 = await getSquareTotalGuesses(squareInd);
    
    // Initializing "safe" numbers in case of failure
    const curdate = Date();
    let frequency = 100;
    let characterGuesses = 0;
    let totalSquareGuesses = 1;

    // squareTotalGuesses (denominator)
    if(query2 == null) {
        addSquareTotalGuesses(squareInd)
    } else { // Entry does exist, get numbers for processing and increment the count in the DB
        totalSquareGuesses = query2[0].total_guesses;
        incrementSquareTotalGuesses(squareInd);
    }

    // squareCharacterGuesses (numerator)
    if(query == null) {
        addSquareCharacterGuesses(squareInd);
    } else { // Entry does exist, get numbers for processing and increment the count in the DB
        characterGuesses = query[0].num_guesses; 
        frequency = Math.floor((characterGuesses / totalSquareGuesses) * 100);
        incrementSquareCharacterGuesses(squareInd);
    }

    // Frequency returned as integer for text purposes
    return frequency
}
