'use client';
import {useState} from 'react';
import SquareGrid from '../components/SquareGrid';
import CharacterListModal from '../components/characterlistmodal';
import get_characters from './getcharacters';
import columnTitles from '@/todaysrules/colTitles';
import rowTitles from '@/todaysrules/rowTitles';
import EndgameModal from '@/components/endgameModal';
import { Analytics } from '@vercel/analytics/react';
import Header from '@/components/header';

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
  // If you set setCharSearchMode, could also set another state to hold the id of the square clicked on
  const [charSearchMode, setCharSearchMode] = useState(false)
  const [inputText, setInputText] = useState("")
  const [charList, setCharList] = useState<Character[]>([])
  const [currSquare, setSquareID] = useState<number[]>([])
  const [guesses, setGuesses] = useState(9)
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

  function generate_ten_chars(text: string) {
    const trimmedText = text.trim();
    setInputText(text);
    setCharList(get_characters(trimmedText));
  }

  function handleChosenCharacter(character: Character) {
    // setCharSearchMode(false);
    const x = currSquare[0]
    const y = currSquare[1]
    for (let i = 0; i < usedChars.length; i++) {
      // Don't allow duplicate characters
      if (character.name === usedChars[i]) {
        return
      }
    }
    // This is ugly there gotta be a better way but it works...
    console.log(x,y)
    console.log(columnTitles[y], rowTitles[x])

    // User's square guess was correct
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
    setCharSearchMode(false);
  }

  function decrementGuesses() {
    setGuesses(guesses - 1);
    if (guesses === 1) {
      setGameOver(true);
      setShowResults(true)
    }
  }

  function testScore(curScore: number) {
    console.log("Search Mode:", charSearchMode);
    console.log("Score",curScore)
    if (curScore === 9) {
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
  
  function openSquare(k: number, j: number) {
    console.log("Used Squares:", usedSquares)
    console.log("Curr Square", currSquare)
    console.log("Vals", k, j);
    if (guesses > 0) {
      for (let i = 0; i < usedSquares.length; i ++) {
        if (usedSquares[i][0] === k && usedSquares[i][1] === j) {
          console.log(usedSquares, currSquare);
          return
        }
      }
      setCharSearchMode(true); 
      generate_ten_chars("");
      console.log("Set search mode to true");
    }
  }

  return (
    <main className="h-screen w-full bg-slate-800 flex flex-col items-center overflow-x-scroll justify-center">
      {/* Header */}
      <Header></Header>

      {/* Main section */}
      <div className="w-11/12 h-full bg-slate-200 rounded-tl-3xl rounded-tr-3xl">
        
        <div className="w-full pb-20"></div>
        <SquareGrid s1={sqaure1contents} s2={sqaure2contents} s3={sqaure3contents} s4={sqaure4contents} s5={sqaure5contents} s6={sqaure6contents} s7={sqaure7contents} s8={sqaure8contents} s9={sqaure9contents} setSquareID={setSquareID} setCharSearchMode={openSquare}/>
        
        <CharacterListModal isVisible={charSearchMode} onClose={() => {setCharSearchMode(false); setInputText("");}} generate_ten_chars={generate_ten_chars} getTitleStrings={() => getTitleStrings()} handleChosenCharacter={handleChosenCharacter} inputText={inputText} charList={charList} usedChars={usedChars}/>
        
        <div className="text-slate-800 flex-col text-center pt-4 font-bold">Guesses Left: {guesses}</div>
        
        <EndgameModal isVisible = {isGameOver} onClose={() => setGameOver(false)} didWin={didWin} score = {score}/>
        
        {showResutls && 
          <>
            <div className="text-black text-center pt-4 text-3xl">Game Over</div>
            <div className="text-black text-center pt2 text-xl">Score: {score}/9</div>
          </>
        }

        <Analytics/>
      </div>
    </main>
  )
} 