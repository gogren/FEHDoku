import characters from '../database/characters'


// Should really make this an import but oh well
interface Character {
    name: string;
    origin: number;
    moveType: string;
    weapon: string;
    color: string;
    rarity: number[];
    skills: string[];
    img: string;
    duo: boolean;
    harmonic: boolean;
    dancer: boolean;
}

// Just checks if query is in the name as a whole, not if they're entirely equal
function compare_names(query: string, name: string) {
    if (name.indexOf(query) != -1) {
        return true
    }
    return false
}

function get_characters(text: string) {
    const ten_chars: Character[] = [];
    if (text == "") {
        for (let i = 0; i < characters.length; i++) {
            if (i >= 10) {
                break
            }
            ten_chars.push(characters[i])
        }
        return ten_chars
    }

    const query = text.toLowerCase();
    for (let i = 0; i < characters.length; i ++) {
        if (ten_chars.length >= 11) {
            return ten_chars;
        }
        if (compare_names(query, characters[i].name.toLowerCase())) {
            const char: Character = characters[i]
            ten_chars.push(char)
        }
    }
    return ten_chars;
}

export default get_characters