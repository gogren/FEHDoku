import React from 'react';
import columnTitles from '@/todaysrules/colTitles';
import rowTitles from '@/todaysrules/rowTitles';
import Square from './Square';

interface SquareGridProps {
  setCharSearchMode: (i: number, j: number) => void;
  setSquareID: (id: number[]) => void;
  s1: string[];
  s2: string[];
  s3: string[];
  s4: string[];
  s5: string[];
  s6: string[];
  s7: string[];
  s8: string[];
  s9: string[];
  cont1: number;
  cont2: number;
  cont3: number;
  cont4: number;
  cont5: number;
  cont6: number;
  cont7: number;
  cont8: number;
  cont9: number;
  cht1: number;
  cht2: number;
  cht3: number;
  cht4: number;
  cht5: number;
  cht6: number;
  cht7: number;
  cht8: number;
  cht9: number;
}

function divideAndRound(num1: number, num2: number): string {
  if (num2 === -1 || num2 === 0 || num1 === -1) {
      return "";
  }

  const result = num1 / num2;
  const roundedResult = Math.round(result * 1000) / 10; // Round to the nearest tenth
  return `${roundedResult}%`;
}

// Oh god
function SquareGrid({setCharSearchMode, setSquareID, s1, s2, s3, s4, s5, s6, s7, s8, s9, cont1, cont2, cont3, cont4, cont5, cont6,
cont7, cont8, cont9, cht1, cht2, cht3, cht4, cht5, cht6, cht7, cht8, cht9}: SquareGridProps) {
  // Generate a 3x3 grid
  const grid = [];
  for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 3; j++) {
      if (i === 0 && j === 0) {
          // Could useState to store square id, then on close set useState to ""
          const freq = divideAndRound(cht1, cont1);
          row.push(
            <Square key={`square_${i}_${j}`} i={i} j={j} square={s1} setCharSearchMode={setCharSearchMode} setSquareID={setSquareID} freq={freq} ></Square>
          );
      }
      else if (i === 0 && j === 1) {
        const freq = divideAndRound(cht2, cont2);
        row.push(
          <Square key={`square_${i}_${j}`} i={i} j={j} square={s2} setCharSearchMode={setCharSearchMode} setSquareID={setSquareID} freq={freq}></Square>
        );
      }
      else if (i === 0 && j === 2) {
        const freq = divideAndRound(cht3, cont3);
        row.push(
          <Square key={`square_${i}_${j}`} i={i} j={j} square={s3} setCharSearchMode={setCharSearchMode} setSquareID={setSquareID} freq={freq}></Square>
        ); 
      }
      else if (i === 1 && j === 0) {
        const freq = divideAndRound(cht4, cont4);
        row.push(
          <Square key={`square_${i}_${j}`} i={i} j={j} square={s4} setCharSearchMode={setCharSearchMode} setSquareID={setSquareID} freq={freq}></Square>
        );
      }
      else if (i === 1 && j === 1) {
        const freq = divideAndRound(cht5, cont5);
        row.push(
          <Square key={`square_${i}_${j}`} i={i} j={j} square={s5} setCharSearchMode={setCharSearchMode} setSquareID={setSquareID} freq={freq}></Square>
        );
      }
      else if (i === 1 && j === 2) {
        const freq = divideAndRound(cht6, cont6);
        row.push(
          <Square key={`square_${i}_${j}`} i={i} j={j} square={s6} setCharSearchMode={setCharSearchMode} setSquareID={setSquareID} freq={freq}></Square>
        );
      }
      else if (i === 2 && j === 0) {
        const freq = divideAndRound(cht7, cont7);
        row.push(
          <Square key={`square_${i}_${j}`} i={i} j={j} square={s7} setCharSearchMode={setCharSearchMode} setSquareID={setSquareID} freq={freq}></Square>
        ); 
      }
      else if (i === 2 && j === 1) {
        const freq = divideAndRound(cht8, cont8);
        row.push(
          <Square key={`square_${i}_${j}`} i={i} j={j} square={s8} setCharSearchMode={setCharSearchMode} setSquareID={setSquareID} freq={freq}></Square>
        );
      }
      else if (i === 2 && j === 2) {
        const freq = divideAndRound(cht9, cont9);
        row.push(
          <Square key={`square_${i}_${j}`} i={i} j={j} square={s9} setCharSearchMode={setCharSearchMode} setSquareID={setSquareID} freq={freq}></Square>
        ); 
      }
    }

    // Add empty div to the end of each row for alignment
    row.push(<div key={`empty-${i}`} className="empty-div" />);

    grid.push(
      <div key={i} className="row flex items-center">
        <div className="row-title rounded-md flex justify-center items-center min-h-[1.5rem] text-[0.875rem]">
            {rowTitles[i].title}
        </div>
        <div className="row-content">{row}</div>
      </div>
    );
  }

  // Generate column titles
  const columnTitleElements = columnTitles.map((constraint, index) => (
    <div key={index} className="column-title text-[0.875rem] flex justify-center items-center text-center">
      {constraint.title}
    </div>
  ));

  columnTitleElements.unshift(<div key={'empty-col-div'} className='empty-col-div'></div>)

  return (
    <div className="grid-container pt-12">
      <div className="grid">
        {/* Empty divs for alignment */}
        <div className="empty-div" />
        <div className="column-titles">{columnTitleElements}</div>
        {grid}
      </div>
    </div>
  );
}

export default SquareGrid;
