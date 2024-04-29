import getExampleSolution from "@/app/getSolution";
import React, { useState } from 'react';
import EndGameSquare from "./EndgameSquare";
import { Character } from "@/database/characters";
import Link from "next/link";


interface SolGridProps {
    setSquareID: (id: number[]) => void;
    openSquare: () => void;
    isVisible: boolean;
    chars: Character[];
    charTotals: number[];
    cont1: number
    cont2: number
    cont3: number
    cont4: number
    cont5: number
    cont6: number
    cont7: number
    cont8: number
    cont9: number
}

function divideAndRound(num1: number, num2: number): string {
    if (num2 === -1 || num1 === -1) {
        return "";
    }
    if (num2 === 0) {
        return "0%"
    }
    const result = num1 / num2;
    const roundedResult = Math.round(result * 1000) / 10; // Round to the nearest tenth
    if (roundedResult >= 100) {
        if (num1  == 1 || num1 == num2) {
            return "100%"
        }
        const result = (num1 - 1) / num2;
        const roundedResult = Math.round(result * 1000) / 10;
        return `${roundedResult}%`;
    }
    return `${roundedResult}%`;
  }

const SolGrid = ({isVisible, chars, charTotals, cont1, cont2, cont3, cont4, cont5, cont6, cont7, cont8, cont9, openSquare, setSquareID}: SolGridProps) => {
    if (!isVisible) {
        return null;
    }
    const [solutionMode, setSolutionMode] = useState(false);
    let solChars: Character[];
    if (solutionMode) {
        solChars = getExampleSolution();
    }
    else {
        solChars = chars;
    }
  // Generate a 3x3 grid
    const grid: React.JSX.Element[] = []; 
    for (let i = 0; i < 3; i++) {
        const row = [];
        for (let j = 0; j < 3; j++) {
        if (i === 0 && j === 0) {
            let freq: string;
            if (!solutionMode) {freq = divideAndRound(charTotals[0], cont1);} else {freq = ''}
            row.push(
                <EndGameSquare key={`square_${i}_${j}`} i={i} j={j} square={[solChars[0].name, solChars[0].img]} freq={freq} openSquare={openSquare} setSquareID={setSquareID}/>
            );
        }
        else if (i === 0 && j === 1) {
            let freq: string;
            if (!solutionMode) {freq = divideAndRound(charTotals[1], cont2);} else {freq = ''}
            row.push(
            <EndGameSquare key={`square_${i}_${j}`} i={i} j={j} square={[solChars[1].name, solChars[1].img]} freq={freq} openSquare={openSquare} setSquareID={setSquareID}/>
            );
        }
        else if (i === 0 && j === 2) {
            let freq: string;
            if (!solutionMode) {freq = divideAndRound(charTotals[2], cont3);} else {freq = ''}
            row.push(
            <EndGameSquare key={`square_${i}_${j}`} i={i} j={j} square={[solChars[2].name, solChars[2].img]} freq={freq} openSquare={openSquare} setSquareID={setSquareID}/>
            ); 
        }
        else if (i === 1 && j === 0) {
            let freq: string;
            if (!solutionMode) {freq = divideAndRound(charTotals[3], cont4);} else {freq = ''}
            row.push(
            <EndGameSquare key={`square_${i}_${j}`} i={i} j={j} square={[solChars[3].name, solChars[3].img]} freq={freq} openSquare={openSquare} setSquareID={setSquareID}/>
            );
        }
        else if (i === 1 && j === 1) {
            let freq: string;
            if (!solutionMode) {freq = divideAndRound(charTotals[4], cont5);} else {freq = ''}
            row.push(
            <EndGameSquare key={`square_${i}_${j}`} i={i} j={j} square={[solChars[4].name, solChars[4].img]} freq={freq} openSquare={openSquare} setSquareID={setSquareID}/>
            );
        }
        else if (i === 1 && j === 2) {
            let freq: string;
            if (!solutionMode) {freq = divideAndRound(charTotals[5], cont6);} else {freq = ''}
            row.push(
            <EndGameSquare key={`square_${i}_${j}`} i={i} j={j} square={[solChars[5].name, solChars[5].img]} freq={freq} openSquare={openSquare} setSquareID={setSquareID}/>
            );
        }
        else if (i === 2 && j === 0) {
            let freq: string;
            if (!solutionMode) {freq = divideAndRound(charTotals[6], cont7);} else {freq = ''}
            row.push(
            <EndGameSquare key={`square_${i}_${j}`} i={i} j={j} square={[solChars[6].name, solChars[6].img]} freq={freq} openSquare={openSquare} setSquareID={setSquareID}/>
            ); 
        }
        else if (i === 2 && j === 1) {
            let freq: string;
            if (!solutionMode) {freq = divideAndRound(charTotals[7], cont8);} else {freq = ''}
            row.push(
            <EndGameSquare key={`square_${i}_${j}`} i={i} j={j} square={[solChars[7].name, solChars[7].img]} freq={freq} openSquare={openSquare} setSquareID={setSquareID}/>
            );
        }
        else if (i === 2 && j === 2) {
            let freq: string;
            if (!solutionMode) {freq = divideAndRound(charTotals[8], cont9);} else {freq = ''}
            row.push(
            <EndGameSquare key={`square_${i}_${j}`} i={i} j={j} square={[solChars[8].name, solChars[8].img]} freq={freq} openSquare={openSquare} setSquareID={setSquareID}/>
            ); 
        }
        }

        grid.push(
            <div key={i} className="row flex items-center">
            <div className="row-content">{row}</div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center pt-28 pb-36">
            <div className="flex flex-row border-2 border-black rounded-xl">
                <button onClick={() => setSolutionMode(false)} className={`px-4 py-2 rounded-l-lg max-w-28 ${solutionMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-400 text-black'}`}>Most Common</button>
                <button onClick={() => setSolutionMode(true)} className={`px-4 py-2 rounded-r-lg max-w-28 ${solutionMode ? 'bg-gray-400 text-black' : 'bg-gray-700 text-white hover:bg-gray-600'}`}>Example Solution</button>
            </div>
            <div className="grid-container pt-12">
                <div className="grid">
                {/* Empty divs for alignment? */}
                <div className="empty-div" />
                {grid}
            </div>
            </div>
            <div className="pt-10">
                {/*
                <Link href = "/makePuzzle" target="_blank" rel="noopener noreferrer" className="rounded-md bg-slate-500 p-2 text-white shadow-md">Create a Puzzle</Link>
                */}
            </div>
        </div>
    );
}

export default SolGrid;