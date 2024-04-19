'use client';
import {useState, useEffect, useRef } from 'react';
import characters from '@/database/characters';
import SquareGrid from '../components/SquareGrid';
import CharacterListModal from '../components/characterlistmodal';
import get_characters from './getcharacters';
import columnTitles from '@/todaysrules/colTitles';
import rowTitles from '@/todaysrules/rowTitles';
import EndgameModal from '@/components/endgameModal';
import { Analytics } from '@vercel/analytics/react';
import Header from '@/components/header';
import SolGrid from '@/components/SolGrid';
import { Character } from '@/database/characters';
import { collection, addDoc, getDocs, query, where, updateDoc, increment, doc, getDoc } from "firebase/firestore";
import { db } from './firebase'; 
import generateConstraintId from './generateConstraintId';
import NoticeModal from '@/components/notice';

export default function Home() {
  // If you set setCharSearchMode, could also set another state to hold the id of the square clicked on
  const [noticeMode, setNoticeMode] = useState(true);
  const [charSearchMode, setCharSearchMode] = useState(false)
  const [inputText, setInputText] = useState("")
  const [charList, setCharList] = useState<Character[]>([])
  const [currSquare, setSquareID] = useState<number[]>([])
  const [guesses, setGuesses] = useState(9)
  const [isGameOver, setGameOver] = useState(false);
  const [didWin, setDidWin] = useState(false);
  const [score, setScore] = useState(0);
  const [showResutls, setShowResults] = useState(false);
  const [showExSol, setExSol] = useState(false);

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

  const [constraintTotal1, setConstrantTotal1] = useState(-1);
  const [constraintTotal2, setConstrantTotal2] = useState(-1);
  const [constraintTotal3, setConstrantTotal3] = useState(-1);
  const [constraintTotal4, setConstrantTotal4] = useState(-1);
  const [constraintTotal5, setConstrantTotal5] = useState(-1);
  const [constraintTotal6, setConstrantTotal6] = useState(-1);
  const [constraintTotal7, setConstrantTotal7] = useState(-1);
  const [constraintTotal8, setConstrantTotal8] = useState(-1);
  const [constraintTotal9, setConstrantTotal9] = useState(-1);

  const [characterTotal1, setCharacterTotal1] = useState(-1);
  const [characterTotal2, setCharacterTotal2] = useState(-1);
  const [characterTotal3, setCharacterTotal3] = useState(-1);
  const [characterTotal4, setCharacterTotal4] = useState(-1);
  const [characterTotal5, setCharacterTotal5] = useState(-1);
  const [characterTotal6, setCharacterTotal6] = useState(-1);
  const [characterTotal7, setCharacterTotal7] = useState(-1);
  const [characterTotal8, setCharacterTotal8] = useState(-1);
  const [characterTotal9, setCharacterTotal9] = useState(-1);

  const [mostUsed, setMostUsed] = useState<Character[]>([]);
  const [mostUsedCounts, setMostUsedCounts] = useState<number[]>([])

  const isFirstRun = useRef(true);

  function generate_ten_chars(text: string) {
    const trimmedText = text.trim();
    setInputText(text);
    setCharList(get_characters(trimmedText));
  }

  const addCharactertoConstraint = async (title: string, charName: string) => {
    const constraintRef = doc(db, 'constraints', title); // Reference to the constraint document
  
    // Reference to the 'characters' subcollection within the specific document
    const charactersRef = collection(constraintRef, 'characters');
  
    // Add a new document to the 'characters' subcollection
    await addDoc(charactersRef, {
      name: charName,
      count: 1,
    });
  
    console.log("Added hero to", title);
  }
  
  const incrementCharacterCount = async (constraintTitle: string, charName: string) => {
    // Reference to the specific document within the 'constraints' collection
    const constraintRef = doc(db, 'constraints', constraintTitle);
  
    // Reference to the 'characters' subcollection within the specific document
    const charactersRef = collection(constraintRef, 'characters');
  
    // Query for the character document with the matching name field
    const querySnapshot = await getDocs(query(charactersRef, where('name', '==', charName)));
  
    if (!querySnapshot.empty) {
      // Get the first document found (assuming charName is unique within the collection)
      const characterDocRef = querySnapshot.docs[0].ref;
  
      // Get the document snapshot
      const docSnapshot = await getDoc(characterDocRef);
  
      if (docSnapshot.exists()) {
        // If the document exists, get the current count
        const currentCount = docSnapshot.data().count;
  
        // Increment the count
        const updatedCount = currentCount + 1;
  
        // Update the count in the document
        await updateDoc(characterDocRef, { count: updatedCount });
  
        console.log("Incremented count for", charName, "to", updatedCount);
        return currentCount;
      }
    }
  
    // If character document doesn't exist, add it to the 'characters' subcollection
    console.log("Character", charName, "not found in", constraintTitle);
    await addCharactertoConstraint(constraintTitle, charName);
    return 0;
  }
  

  const addConstraint = async (title: string) => {
    const ref = collection(db, 'constraints')
    await addDoc(ref, {
      title: title,
      total: 1,
    })
  }

  // Get all relevent contraint totals at loadup and store them in a useState
  const getConstraintTotal = async (i: number, j: number, inc: boolean) => {
    let totals: number
        const conID = generateConstraintId(rowTitles[i], columnTitles[j]);
        const collectionRef = collection(db, 'constraints');
        const querySnapshot = await getDocs(query(collectionRef, where('title', '==', conID)));
        if (!querySnapshot.empty) {
          const chars: number[] = [];
          querySnapshot.forEach(async (doc) => {
            console.log("Found constraint duo", doc.data().title);
            chars.push(doc.data().total);
            // Increment constraint total after getting current total
            if (inc) {
              console.log('Incremented')
              await updateDoc(doc.ref, {
                total: increment(1),
              })
            }
          });
          totals = chars[0];
        }
        else {
          console.log("Didn't find constraint Duo");
          await addConstraint(conID);
          totals = 1
        }
      console.log("TOTALS",totals)
      if (i === 0 && j === 0) {
        setConstrantTotal1(totals)
      }
      else if (i === 0 && j === 1) {
        setConstrantTotal2(totals)
      }
      else if (i === 0 && j === 2) {
        setConstrantTotal3(totals)
      }
      else if (i === 1 && j === 0) {
        setConstrantTotal4(totals)
      }
      else if (i === 1 && j === 1) {
        setConstrantTotal5(totals)
      }
      else if (i === 1 && j === 2) {
        setConstrantTotal6(totals)
      }
      else if (i === 2 && j === 0) {
        setConstrantTotal7(totals)
      }
      else if (i === 2 && j === 1) {
        setConstrantTotal8(totals)
      }
      else if (i === 2 && j === 2) {
        setConstrantTotal9(totals)
      }
  }
  
const getCharacterTotal = async (char: Character, i: number, j: number) => {
  const conID = generateConstraintId(rowTitles[i], columnTitles[j]);
  const total = incrementCharacterCount(conID, char.name);
  if (i === 0 && j === 0) {
    setCharacterTotal1(await total)
  }
  else if (i === 0 && j === 1) {
    setCharacterTotal2(await total)
  }
  else if (i === 0 && j === 2) {
    setCharacterTotal3(await total)
  }
  else if (i === 1 && j === 0) {
    setCharacterTotal4(await total)
  }
  else if (i === 1 && j === 1) {
    setCharacterTotal5(await total)
  }
  else if (i === 1 && j === 2) {
    setCharacterTotal6(await total)
  }
  else if (i === 2 && j === 0) {
    setCharacterTotal7(await total)
  }
  else if (i === 2 && j === 1) {
    setCharacterTotal8(await total)
  }
  else if (i === 2 && j === 2) {
    setCharacterTotal9(await total)
  }
}

const getCharacterWithHighestCount = async (constraintTitle: string) => {
  // Reference to the specific document within the 'constraints' collection
  const constraintRef = doc(db, 'constraints', constraintTitle);

  // Reference to the 'characters' subcollection within the specific document
  const charactersRef = collection(constraintRef, 'characters');

  // Query all documents in the 'characters' subcollection
  const querySnapshot = await getDocs(charactersRef);

  let maxCount = 0;
  let characterWithMaxCount: any = null;

  // Iterate through each document in the query snapshot
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const count = data.count;

    // Check if the count is greater than the current maximum count
    if (count > maxCount) {
      maxCount = count;
      characterWithMaxCount = { id: doc.id, ...data };
    }
  });
  if (characterWithMaxCount === null) {
    return null;
  }
  return characterWithMaxCount.name;
};


const getMostUsedCharacters = async () => {
  const charNames = []; 
  for (let i = 0; i < rowTitles.length; i++) {
      for (let j = 0; j < columnTitles.length; j++) {
          const conID = generateConstraintId(rowTitles[i], columnTitles[j]);
          charNames.push(getCharacterWithHighestCount(conID))
      }
  }
  const chars = []
  for (let i = 0; i < charNames.length; i++) {
    if (await charNames[i] === null) {
      chars.push({name: 'None yet for this constraint!', origin: 20, moveType: '', weapon: '', color: '', rarity: [], skills: [], img: '', duo: false, harmonic: false, dancer: false})
    }
    else {
      for (let j = 0; j < characters.length; j++) {
          if (await charNames[i] === characters[j].name) {
              chars.push(characters[j])
              break;
          }  
      }
    }
  }
  setMostUsed(chars)
}

const getHighestCountFromdb = async (constraintTitle: string) => {
  // Reference to the specific document within the 'constraints' collection
  const constraintRef = doc(db, 'constraints', constraintTitle);

  // Reference to the 'characters' subcollection within the specific document
  const charactersRef = collection(constraintRef, 'characters');

  // Query all documents in the 'characters' subcollection
  const querySnapshot = await getDocs(charactersRef);

  let maxCount = 0;
  let characterWithMaxCount: any = null;

  // Iterate through each document in the query snapshot
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const count = data.count;

    // Check if the count is greater than the current maximum count
    if (count > maxCount) {
      maxCount = count;
      characterWithMaxCount = { id: doc.id, ...data };
    }
  });
  if (characterWithMaxCount === null) {
    return 0
  }
  return characterWithMaxCount.count;
};

const getMostUsedCount = async () => {
  const counts = []; 
  for (let i = 0; i < rowTitles.length; i++) {
      for (let j = 0; j < columnTitles.length; j++) {
          const conID = generateConstraintId(rowTitles[i], columnTitles[j]);
          counts.push(getHighestCountFromdb(conID))
      }
  }
  // Idk man converts promise to number array
  const out: number[] = []
  for (let i = 0; i < counts.length; i++) {
    out.push(await counts[i]);
  }
  setMostUsedCounts(out);
}

  useEffect(() => {
    // Check if this is the first run of the effect
    if (isFirstRun.current) {
      console.log("This prints once on initial mount");
      getMostUsedCharacters();
      getMostUsedCount();
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j ++) {
          getConstraintTotal(i, j, false);
        }
      }
      // Set isFirstRun to false to indicate that the effect has been executed
      isFirstRun.current = false;
    }
  }, [isFirstRun]);

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
      const constraintTotal = getConstraintTotal(x,y, true);
      const charTotal = getCharacterTotal(character, x, y);
      console.log(charTotal, 'over', constraintTotal);
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
    if (guesses > 0) {
      for (let i = 0; i < usedSquares.length; i ++) {
        if (usedSquares[i][0] === k && usedSquares[i][1] === j) {
          return
        }
      }
      setCharSearchMode(true); 
      generate_ten_chars("");
    }
  }

  function smoothScrollTo(targetPosition: number, duration: number) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();
  
    function scrollAnimation(currentTime: number) {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easing = (progress: number) => progress * (2 - progress);
  
      window.scrollTo(0, startPosition + distance * easing(progress));
  
      if (elapsedTime < duration) {
        requestAnimationFrame(scrollAnimation);
      }
    }
  
    requestAnimationFrame(scrollAnimation);
  }
  
  // Inside your component
  useEffect(() => {
    if (showExSol) {
      // Scroll down 700 px smoothly over 1000 milliseconds (adjust duration as needed)
      smoothScrollTo(700, 1000);
    }
  }, [showExSol]);

  return (
    <main className={`w-full bg-slate-800 flex flex-col items-center justify-center ${!showExSol ? 'h-screen' : ''}`}>
      {/* Header */}
      <Header/>
      <NoticeModal isVisible = {noticeMode} onClose={() => setNoticeMode(false)}/>
      {/* Main section */}
      <div className="w-11/12 h-full bg-slate-200 rounded-tl-3xl rounded-tr-3xl pt-14">
        
        <div className="w-full pb-14"></div>
        <SquareGrid s1={sqaure1contents} s2={sqaure2contents} s3={sqaure3contents} s4={sqaure4contents} s5={sqaure5contents} s6={sqaure6contents} s7={sqaure7contents} s8={sqaure8contents} s9={sqaure9contents} setSquareID={setSquareID} setCharSearchMode={openSquare}
        cont1 = {constraintTotal1} cont2 = {constraintTotal2} cont3 = {constraintTotal3} cont4 = {constraintTotal4} cont5 = {constraintTotal5} cont6 = {constraintTotal6} cont7 = {constraintTotal7} cont8 = {constraintTotal8} cont9 = {constraintTotal9}
        cht1 = {characterTotal1} cht2 = {characterTotal2} cht3 = {characterTotal3} cht4 = {characterTotal4} cht5 = {characterTotal5} cht6 = {characterTotal6} cht7 = {characterTotal7} cht8 = {characterTotal8} cht9={characterTotal9}/>
        
        <CharacterListModal isVisible={charSearchMode} onClose={() => {setCharSearchMode(false); setInputText("");}} generate_ten_chars={generate_ten_chars} getTitleStrings={() => getTitleStrings()} handleChosenCharacter={handleChosenCharacter} inputText={inputText} charList={charList} usedChars={usedChars}/>
        
        <div className="text-slate-800 flex-col text-center pt-4 font-bold">Guesses Left: {guesses}</div>
        
        <EndgameModal isVisible = {isGameOver} onClose={() => {setGameOver(false); setExSol(true)}} didWin={didWin} score = {score}/>
        
        {showResutls && 
          <>
            <div className="text-black text-center pt-4 text-3xl">Game Over</div>
            <div className="text-black text-center pt2 text-xl">Score: {score}/9</div>
          </>
        }
        <SolGrid isVisible = {showExSol} chars={mostUsed} charTotals={mostUsedCounts} cont1={constraintTotal1} cont2={constraintTotal2} cont3={constraintTotal3}
        cont4={constraintTotal4} cont5={constraintTotal5} cont6={constraintTotal6} cont7={constraintTotal7} cont8={constraintTotal8} cont9={constraintTotal9}/>
        <Analytics/>
      </div>
    </main>
  )
} 