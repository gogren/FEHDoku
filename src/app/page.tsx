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
    setCharSearchMode(false);
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
      <main className="flex flex-col items-center overflow-x-scroll justify-center">
        <Header/>
          {/*Sets curSquare to square id on click
          This is ugly but idk how else to do it...*/}
          <SquareGrid s1={sqaure1contents} s2={sqaure2contents} s3={sqaure3contents} 
          s4={sqaure4contents} s5={sqaure5contents} 
          s6={sqaure6contents} s7={sqaure7contents} s8={sqaure8contents} s9={sqaure9contents} 
          setSquareID={setSquareID} setCharSearchMode={() => {openSquare()}}/>
      </main>
      {/*Could put info modal in header component... */}
      <CharacterListModal isVisible={charSearchMode} onClose={() => {setCharSearchMode(false); setInputText("");}} generate_ten_chars={generate_ten_chars} 
      getTitleStrings={() => getTitleStrings()} handleChosenCharacter={handleChosenCharacter}
      inputText={inputText} charList={charList}/>
      <div className="text-white flex-col text-center pt-4">Guesses Left: {guesses}</div>
      <EndgameModal isVisible = {isGameOver} onClose={() => setGameOver(false)} didWin={didWin} score = {score}/>
      {showResutls && 
        <div className="text-white text-center pt-4 text-3xl">Game Over</div>
      }
      <Analytics/>
    </>
  );
} 