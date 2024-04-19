// action.ts : defines all database queries and actions, doesn't format data
'use server'

import { createClient } from '@/utils/supabase/server'

// Add row to "squares" to the database--represents the number of guesses for a square regardless of character
export async function addSquareTotalGuesses(squarePosition : number) {
    const supabase = createClient();
    const currentDate = new Date();

    // Insert into the database
    const { data, error } = await supabase
        .from('squares')
        .insert([{ date: currentDate, total_guesses: 1, square_pos: squarePosition}])
}

// Add row to "character_squares" to the database--represents the number of guesses for a given square & character for today
export async function addSquareCharacterGuesses(squarePosition : number) {
    const supabase = createClient();
    const currentDate = Date();

    const { data, error } = await supabase
        .from('character_squares')
        .insert([{ date: currentDate, num_guesses: 1, square_pos: squarePosition}])

}


// +1 to the total_guesses count for a given square regardless of character for today
export async function incrementSquareTotalGuesses(squarePosition : number) {
    const supabase = createClient();
}

// +1 to the num_count for a given square & character for today
export async function incrementSquareCharacterGuesses(squarePosition : number) {
    const supabase = createClient();
}

// Getting the total number of guesses for a square
export async function getSquareTotalGuesses(squarePosition : number) {
    const supabase = createClient();
    const currentDate = new Date();

    let { data: squares, error } = await supabase
        .from("squares")
        .select("total_guesses")
        .eq("square_pos", squarePosition)
        .eq("date", currentDate)

    return squares
}

// Read for if a square for a given date is in the database
export async function getSquareCharacterGuesses(squarePosition : number) {
    const supabase = createClient();
    const currentDate = new Date();

    let { data: squares, error } = await supabase
        .from('squares')
        .select('*')
        .eq('square_pos', squarePosition)
        .eq('date', currentDate)

    return squares
}