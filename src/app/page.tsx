'use client';
import {useState, useEffect} from 'react';
import SquareGrid from '../components/SquareGrid';
import InfoModal from '../components/info'
import CharacterListModal from '../components/characterlistmodal';
import get_characters from './getcharacters';
import columnTitles from '@/todaysrules/colTitles';
import rowTitles from '@/todaysrules/rowTitles';
import EndgameModal from '@/components/endgameModal';


interface Character {
  name: string;
  origin: number;
  moveType: string;
  weapon: string;
  color: string;
  rarity: number[];
  skills: string[];
  img: string;
  dancer: boolean;
  duo: boolean;
  harmonic: boolean;
}

export default function Home() {
  const [infoMode, setInfoMode] = useState(false)
  // If you set setCharSearchMode, could also set another state to hold the id of the square clicked on
  const [charSearchMode, setCharSearchMode] = useState(false)
  const [inputText, setInputText] = useState("")
  const [charList, setCharList] = useState<Character[]>([])
  const [chosenChar, choseChar] = useState<Character>()
  const [currSquare, setSquareID] = useState<number[]>([])
  const [guesses, setGuesses] = useState(9)
  const [curDate, setDate] = useState("")
  const [isGameOver, setGameOver] = useState(false);
  const [didWin, setDidWin] = useState(false);
  const [score, setScore] = useState(0);
  const [showResutls, setShowResults] = useState(false)

  //Gonna need a useState for each square [name, img path]
  const [sqaure1contents, setSquare1Contents] = useState<string[]>(["",""])
  const [sqaure2contents, setSquare2Contents] = useState<string[]>(["",""])
  const [sqaure3contents, setSquare3Contents] = useState<string[]>(["",""])
  const [sqaure4contents, setSquare4Contents] = useState<string[]>(["",""])
  const [sqaure5contents, setSquare5Contents] = useState<string[]>(["",""])
  const [sqaure6contents, setSquare6Contents] = useState<string[]>(["",""])
  const [sqaure7contents, setSquare7Contents] = useState<string[]>(["",""])
  const [sqaure8contents, setSquare8Contents] = useState<string[]>(["",""])
  const [sqaure9contents, setSquare9Contents] = useState<string[]>(["",""])

  const [usedChars, setUsedChars] = useState<string[]>([])
  const [usedSquares, setUsedSquares] = useState<number[][]>([[]])

  useEffect(() => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    setDate(`(${month}-${day}-${year})`);
  }, []);


  function generate_ten_chars(text: string) {
    const trimmedText = text.trim();
    setInputText(text);
    setCharList(get_characters(trimmedText));
  }

  function handleChosenCharacer(character: Character) {
    setCharSearchMode(false);
    choseChar(character);
    const x = currSquare[0]
    const y = currSquare[1]
    for (let i = 0; i < usedChars.length; i++) {
      // Don't allow duplicate characters
      if (character.name === usedChars[i]) {
        return
      }
    }
    // This shit ugly there gotta be a better way but it works...
    console.log(x,y)
    console.log(columnTitles[y], rowTitles[x])
    if (columnTitles[y].func(character) && rowTitles[x].func(character)){
      if (x === 0 && y === 0) {
        setSquare1Contents([character.name, character.img])
      }
      else if (x === 0 && y === 1) {
        setSquare2Contents([character.name, character.img])
      }
      else if (x === 0 && y === 2) {
        setSquare3Contents([character.name, character.img])
      }
      else if (x === 1 && y === 0) {
        setSquare4Contents([character.name, character.img])
      }
      else if (x === 1 && y === 1) {
        setSquare5Contents([character.name, character.img])
      }
      else if (x === 1 && y === 2) {
        setSquare6Contents([character.name, character.img])
      }
      else if (x === 2 && y === 0) {
        setSquare7Contents([character.name, character.img])
      }
      else if (x === 2 && y === 1) {
        setSquare8Contents([character.name, character.img])
      }
      else if (x === 2 && y === 2) {
        setSquare9Contents([character.name, character.img])
      }
      // Do these last
      setUsedSquares([currSquare, ...usedSquares])
      setUsedChars([character.name, ...usedChars])
      setScore(score + 1);
      testScore(score + 1);
    }
    else {
      testScore(score);
    }
    setInputText("");
    setSquareID([]);
    decrementGuesses();
  }

  function decrementGuesses() {
    setGuesses(guesses - 1);
    if (guesses === 1) {
      setGameOver(true);
      setShowResults(true)
    }
  }

  function testScore(curScore: number) {
    console.log("Score",curScore)
    if (curScore === 9) {
      console.log("Won");
      setDidWin(true);
    }
  }

  function getTitleStrings() {
    if (
      columnTitles[currSquare[1]] &&
      rowTitles[currSquare[0]] &&
      columnTitles[currSquare[1]].title &&
      rowTitles[currSquare[0]].title
    ) {
      return columnTitles[currSquare[1]].title + " & " + rowTitles[currSquare[0]].title;
    } else {
      return "Title Not Found"; // or any other default value or error handling mechanism
    }
  }
  
  function openSquare() {
    if (guesses > 0) {
      for (let i = 0; i < usedSquares.length; i ++) {
        if (usedSquares[i][0] === currSquare[0] && usedSquares[i][1] === currSquare[1]) {
          return
        }
      }
      setCharSearchMode(true); 
      generate_ten_chars("");
    }
  }

  return (
    <>
    <main className="flex flex-col items-center gap-5 pt-8">
      <div className="w-5/6">
        <div className="flex items-center justify-between p-2 text-center">
          <div className="text-5xl text-yellow-300 w-32">FEH-doku</div>
          <div className="text-2xl text-white w-32 font-sans">
            <div className="">Daily Puzzle</div>
            <div className="">{curDate}</div>
          </div>
          <div className='w-32 items-center text-center'>
            <div className="flex">
              <div onClick={() => setInfoMode(true)} className="text-black bg-yellow-300 w-6 rounded-3xl font-bold hover:bg-yellow-500 hover:transform hover:-translate-y-1 transition duration-300">
                i
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/*Sets curSquare to square id on click
        This shit ugly but idk how else to do it...*/}
        <SquareGrid s1={sqaure1contents} s2={sqaure2contents} s3={sqaure3contents} 
        s4={sqaure4contents} s5={sqaure5contents} 
        s6={sqaure6contents} s7={sqaure7contents} s8={sqaure8contents} s9={sqaure9contents} 
        setSquareID={setSquareID} setCharSearchMode={() => {openSquare()}}/>
      </div>
    </main>
    <InfoModal isVisible={infoMode} onClose={() => {setInfoMode(false);}}>
      <h1 className="text-center text-2xl pt-3 pb-3">Welcome to FEH-Doku!</h1>
      <div className="text-left">
        <ul className="list-disc text-left">
          <li className="">
            <p className='pb-2'>
              Note: This site is in early development, please feel free to let me know of any errors you come across.
            </p>
            <hr className="" />
            <h2 className="text-center text-2xl pt-2">How to Play</h2>
            <p>
              • Goal is to fill all nine boxes in only nine guesses.
            </p>
            <p className="">
              • No duplicate heroes.
            </p>
            <p>
              • No changing your answer.
            </p>
            <p className=''>
              • Each box will have at least one correct answer, and every puzzle will have a valid solution.
            </p>
            <p>
              • Harmonic heros' game of origin is only the primary hero's game of origin.
            </p>
            <p>
              Example: Harmonic Edelgard's origin: Three Houses. Not Radiant Dawn.
            </p>
            <p className='pb-2'>
            • Singer/Dreamers/etc. are all included in the "Dancers" constraint.
            </p>
            <hr className="pb-1" />
            <p className="text-center pb-1">
              Thank you to u/Kaz_Kirigiri's asset collection for all the character images!
            </p>
            </li>
        </ul>
      </div>
    </InfoModal>
    <CharacterListModal isVisible={charSearchMode} onClose={() => {setCharSearchMode(false); setInputText("");}}>
      <form className="flex flex-col items-center">
        <div className="text-center text-black pb-2">{getTitleStrings()}</div>
        <input placeholder="Search Character" type="text" value={inputText} onChange={e => {generate_ten_chars(e.target.value);}} className="text-black bg-gray-200 rounded-md shadow-md pl-3 pr-3 border border-black w-[300px]" />
      </form>
      <div className="flex flex-col pt-3">
        {charList.length === 0 && <div className="self-center pt-6">No Characters Found</div>}
        {charList.map((character) => {
          return (
            <button onClick={() => {handleChosenCharacer(character);}} className="flex justify-between border border-black rounded-md shadow-md hover:bg-gray-300">
              <img src={"/images/" + character.img} className="border border-black rounded-md shadow-md w-12 h-auto" />
              <div className="p-1">
                {character.name}
              </div>
            </button>
          )
        })}
      </div>
    </CharacterListModal>
    <div className="text-white flex-col text-center pt-4">Guesses Left: {guesses}</div>
    <EndgameModal isVisible = {isGameOver} onClose={() => setGameOver(false)} didWin={didWin} score = {score}></EndgameModal>
    {showResutls && 
      <div className="text-white text-center pt-4 text-3xl">Game Over</div>
    }
    </>
  );
} 