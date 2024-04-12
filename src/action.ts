'use server'

import { createClient } from '@/utils/supabase/server'

// Getting the total number of guesses for a square
export async function getTotalGuessesForSquare(squarePosition : number, todayDate : any) {
    const supabase = createClient();

    const query = supabase
        .from("squares")
        .select("total_guesses")
        .eq("square_pos", squarePosition)
        .eq("date", todayDate)

    return query
}

// Getting the total guesses of the user's character for a square
export async function getUserCharacterGuesses(squarePosition : number, todayDate : any, character_id : number){
    const supabase = createClient();

    const query = supabase
        .from("")
}

// Add to the total_guesses count for a given square for a day
export async function incrementSquareTotalGuesses() {
    const supabase = createClient();
}

// Add to the number of guesses for a certain character in the square for a day
export async function incrementCharacterGuesses() {
    const supabase = createClient();
}

export