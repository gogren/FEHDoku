
import React from 'react';
import columnTitles from '@/todaysrules/colTitles';
import rowTitles from '@/todaysrules/rowTitles';

interface SquareGridProps {
  setCharSearchMode: () => void;
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
            <button  onClick={() => {setCharSearchMode(); setSquareID([i,j])}} key={`${i}-${j}`} className="tlsquare">
              <div className="flex flex-col items-center">
                {s1[1] !== "" ? (
                <img src={"../images/" + s1[1]} alt="" className='h-auto pb-1 rounded-md char-img'/>
                ) : null}
                <div className="text-white text-xs text-center char-text">{s1[0]}</div>
              </div>
            </button>
          );
      }
      else if (i === 0 && j === 1) {
        row.push(
          <button onClick={() => {setCharSearchMode(); setSquareID([i,j])}} key={`${i}-${j}`} className="square">
          <div className="flex flex-col items-center">
            {s2[1] !== "" ? (
              <img src={"../images/" + s2[1]} alt="" className='char-img h-auto pb-1 rounded-md'/>
            ) : null}
            <div className="text-white text-xs text-center char-text">{s2[0]}</div>
          </div>
        </button>
        );
      }
      else if (i === 0 && j === 2) {
        row.push(
          <button key={`${i}-${j}`} onClick={() => {setCharSearchMode(); setSquareID([i,j])}} className="trsquare">
          <div className="flex flex-col items-center">
            {s3[1] !== "" ? (
                <img src={"../images/" + s3[1]} alt="" className='char-img h-auto pb-1 rounded-md'/>
              ) : null}
            <div className="text-white text-xs text-center char-text">{s3[0]}</div>
          </div>
        </button>
        ); 
      }
      else if (i === 1 && j === 0) {
        row.push(
          <button key={`${i}-${j}`} onClick={() => {setCharSearchMode(); setSquareID([i,j])}} className="square">
          <div className="flex flex-col items-center">
            {s4[1] !== "" ? (
                <img src={"../images/" + s4[1]} alt="" className='char-img h-auto pb-1 rounded-md'/>
              ) : null}
            <div className="text-white text-xs text-center char-text">{s4[0]}</div>
          </div>
        </button>
        );
      }
      else if (i === 1 && j === 1) {
        row.push(
          <button key={`${i}-${j}`} onClick={() => {setCharSearchMode(); setSquareID([i,j])}} className="square">
          <div className="flex flex-col items-center">
            {s5[1] !== "" ? (
                <img src={"../images/" + s5[1]} alt="" className='char-img h-auto pb-1 rounded-md'/>
              ) : null}
            <div className="text-white text-xs text-center char-text">{s5[0]}</div>
          </div>
        </button>
        );
      }
      else if (i === 1 && j === 2) {
        row.push(
          <button key={`${i}-${j}`} onClick={() => {setCharSearchMode(); setSquareID([i,j])}} className="square">
          <div className="flex flex-col items-center">
            {s6[1] !== "" ? (
                <img src={"../images/" + s6[1]} alt="" className='char-img h-auto pb-1 rounded-md'/>
              ) : null}
            <div className="text-white text-xs text-center char-text">{s6[0]}</div>
          </div>
        </button>
        );
      }
      else if (i === 2 && j === 0) {
        row.push(
          <button key={`${i}-${j}`} onClick={() => {setCharSearchMode(); setSquareID([i,j])}} className="blsquare">
          <div className="flex flex-col items-center">
            {s7[1] !== "" ? (
                <img src={"../images/" + s7[1]} alt="" className='char-img h-auto pb-1 rounded-md'/>
              ) : null}
            <div className="text-white text-xs text-center char-text">{s7[0]}</div>
          </div>
        </button>
        ); 
      }
      else if (i === 2 && j === 1) {
        row.push(
          <button key={`${i}-${j}`} onClick={() => {setCharSearchMode(); setSquareID([i,j])}} className="square">
          <div className="flex flex-col items-center">
            {s8[1] !== "" ? (
                <img src={"../images/" + s8[1]} alt="" className='char-img h-auto pb-1 rounded-md'/>
              ) : null}
            <div className="text-white text-xs text-center char-text">{s8[0]}</div>
          </div>
        </button>
        );
      }
      else if (i === 2 && j === 2) {
        row.push(
          <button key={`${i}-${j}`} onClick={() => {setCharSearchMode(); setSquareID([i,j])}} className="brsquare">
          <div className="flex flex-col items-center">
            {s9[1] !== "" ? (
                <img src={"../images/" + s9[1]} alt="" className='char-img h-auto pb-1 rounded-md'/>
              ) : null}
            <div className="text-white text-xs text-center char-text">{s9[0]}</div>
          </div>
        </button>
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
