import getExampleSolution from "@/app/getSolution";
import React from 'react';
import EndGameSquare from "./EndgameSquare";

interface SquareGridProps {
  s1: string[];
  s2: string[];
  s3: string[];
  s4: string[];
  s5: string[];
  s6: string[];
  s7: string[];
  s8: string[];
  s9: string[];
}

interface SolGridProps {
    isVisible: boolean
}

const SolGrid = ({isVisible}: SolGridProps) => {
    if (!isVisible) {
        return null;
    }
    console.log("Got this far");
    const solChars = getExampleSolution(); 
  // Generate a 3x3 grid
  const grid: React.JSX.Element[] = []; 
  for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 3; j++) {
      if (i === 0 && j === 0) {
          // Could useState to store square id, then on close set useState to ""
          row.push(
            <EndGameSquare key={`square_${i}_${j}`} i={i} j={j} square={[solChars[0].name, solChars[0].img]}/>
          );
      }
      else if (i === 0 && j === 1) {
        row.push(
          <EndGameSquare key={`square_${i}_${j}`} i={i} j={j} square={[solChars[1].name, solChars[1].img]}/>
        );
      }
      else if (i === 0 && j === 2) {
        row.push(
          <EndGameSquare key={`square_${i}_${j}`} i={i} j={j} square={[solChars[2].name, solChars[2].img]}/>
        ); 
      }
      else if (i === 1 && j === 0) {
        row.push(
          <EndGameSquare key={`square_${i}_${j}`} i={i} j={j} square={[solChars[3].name, solChars[3].img]}/>
        );
      }
      else if (i === 1 && j === 1) {
        row.push(
          <EndGameSquare key={`square_${i}_${j}`} i={i} j={j} square={[solChars[4].name, solChars[4].img]}/>
        );
      }
      else if (i === 1 && j === 2) {
        row.push(
          <EndGameSquare key={`square_${i}_${j}`} i={i} j={j} square={[solChars[5].name, solChars[5].img]}/>
        );
      }
      else if (i === 2 && j === 0) {
        row.push(
          <EndGameSquare key={`square_${i}_${j}`} i={i} j={j} square={[solChars[6].name, solChars[6].img]}/>
        ); 
      }
      else if (i === 2 && j === 1) {
        row.push(
          <EndGameSquare key={`square_${i}_${j}`} i={i} j={j} square={[solChars[7].name, solChars[7].img]}/>
        );
      }
      else if (i === 2 && j === 2) {
        row.push(
          <EndGameSquare key={`square_${i}_${j}`} i={i} j={j} square={[solChars[8].name, solChars[8].img]}/>
        ); 
      }
    }

    grid.push(
        <div key={i} className="row flex items-center">
          <div className="row-content">{row}</div>
        </div>
      );
    }
  

  // Generate column titles

  return (
    <div className="flex flex-col items-center pt-28 pb-36">
        <p className="text-black text-2xl font-bold">Example Solution</p>
        <div className="grid-container pt-12">
        <div className="grid">
            {/* Empty divs for alignment? */}
            <div className="empty-div" />
            {grid}
        </div>
        </div>
    </div>
  );
}

export default SolGrid;