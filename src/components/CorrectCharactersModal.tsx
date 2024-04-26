import characters, { Character } from "@/database/characters";
import rowTitles from "@/todaysrules/rowTitles";
import columnTitles from "@/todaysrules/colTitles";

interface Props {
    isVisible: boolean;
    onClose: () => void;
    currSquare: number[];
    guessNums: number[];
}

function getCharacters(x: number, y: number) {
    const chars: Character[] = []
    for (let i = 0; i < characters.length; i++) {
        if (rowTitles[x].func(characters[i]) && columnTitles[y].func(characters[i])) {
            chars.push(characters[i])
        }
    }
    if (chars.length === 0) {
        console.log("none")
        return [{name: "None", origin: -1, moveType: '', weapon: '', color: '', rarity: [], skills: [], img: "", duo: false, harmonic: false, dancer: false, resplendent: false}]
    }
    return chars;
}
function getTitleStrings(currSquare: number[]) {
    if (currSquare.length !== 0) {
      return columnTitles[currSquare[1]].title + " & " + rowTitles[currSquare[0]].title;
    } else {
      return "Title Not Found"; // or any other default value or error handling mechanism
    }
  }

const CorrectCharactersModal = ({isVisible, onClose, currSquare, guessNums}: Props) => {
    if (!isVisible) {
        return null;
    }

    const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;
        if (target.id === 'wrapper') onClose();
    }
    let chars: Character[];
    let total_index: number; 
    if (currSquare.length == 0) {
        chars = []
        total_index = 0;
    }
    else {
        total_index = currSquare[0] * 3 + currSquare[1];
        chars = getCharacters(currSquare[0], currSquare[1])
    }

    console.log("CURRECNT SQUARE", currSquare)
    return (
        <div id="wrapper" onClick={handleClose} className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className="w-[470px]">
                <div className="bg-white p-2 rounded-md shadow-md flex flex-col">
                    <p className="text-center text-2xl pb-2 pt-2">Correct Characters</p>
                    <p className="text-center text-xl pb-2">{getTitleStrings(currSquare)}</p>
                    <p className="text-center text-lg pb-2">Total Correct Guesses: {guessNums[total_index] - 1}</p>
                    <hr className="pb-2"/>
                    <div className="max-h-[350px] overflow-y-auto mb-2 border border-b-4 rounded-b-lg">
                    {chars.map((character) => {
                        return (
                            <div key={character.name}  className={`flex justify-between border border-black rounded-md shadow-md`}>
                                <img src={"/images/" + character.img} className="border border-black rounded-md shadow-md w-12 h-auto" />
                                <div className="p-1 text-xl">
                                    {character.name}
                                </div>
                            </div>
                        )
                    })}
                    </div>
                    <button onClick={()=> onClose()} className="text-white bg-red-700 rounded-md shadow-md px-3 py-1 hover:bg-red-900 hover:transform hover:-translate-y-1 transition duration-300 place-self-center">Done</button>                    
                </div>
            </div>
        </div>
    )
}

export default CorrectCharactersModal;