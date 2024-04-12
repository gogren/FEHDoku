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
}
function SquareGrid({setCharSearchMode, setSquareID, s1, s2, s3, s4, s5, s6, s7, s8, s9}: SquareGridProps) {
  // Generate a 3x3 grid
  const grid = [];
  for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 3; j++) {
      if (i === 0 && j === 0) {
          // Could useState to store square id, then on close set useState to ""
          row.push(
            <Square i={i} j={j} square={s1} setCharSearchMode={setCharSearchMode} setSquareID={setSquareID} ></Square>
          );
      }
      else if (i === 0 && j === 1) {
        row.push(
          <Square i={i} j={j} square={s2} setCharSearchMode={setCharSearchMode} setSquareID={setSquareID} ></Square>
        );
      }
      else if (i === 0 && j === 2) {
        row.push(
          <Square i={i} j={j} square={s3} setCharSearchMode={setCharSearchMode} setSquareID={setSquareID} ></Square>
        ); 
      }
      else if (i === 1 && j === 0) {
        row.push(
          <Square i={i} j={j} square={s4} setCharSearchMode={setCharSearchMode} setSquareID={setSquareID} ></Square>
        );
      }
      else if (i === 1 && j === 1) {
        row.push(
          <Square i={i} j={j} square={s5} setCharSearchMode={setCharSearchMode} setSquareID={setSquareID} ></Square>
        );
      }
      else if (i === 1 && j === 2) {
        row.push(
          <Square i={i} j={j} square={s6} setCharSearchMode={setCharSearchMode} setSquareID={setSquareID} ></Square>
        );
      }
      else if (i === 2 && j === 0) {
        row.push(
          <Square i={i} j={j} square={s7} setCharSearchMode={setCharSearchMode} setSquareID={setSquareID} ></Square>
        ); 
      }
      else if (i === 2 && j === 1) {
        row.push(
          <Square i={i} j={j} square={s8} setCharSearchMode={setCharSearchMode} setSquareID={setSquareID} ></Square>
        );
      }
      else if (i === 2 && j === 2) {
        row.push(
          <Square i={i} j={j} square={s9} setCharSearchMode={setCharSearchMode} setSquareID={setSquareID} ></Square>
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
  const columnTitleElements = columnTitles.map((constraint) => (
    <div key={constraint.id} className="column-title text-[0.875rem] flex justify-center items-center text-center">
      {constraint.title}
    </div>
  ));

  columnTitleElements.unshift(<div className='empty-col-div'></div>)

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
