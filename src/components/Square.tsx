type SquareProps = {
    i: number;
    j: number;
    square: string[];
    setCharSearchMode: (i: number, j: number) => void;
    setSquareID: (id: number[]) => void;
};

const Square: React.FC<SquareProps> = ({ i, j, square, setCharSearchMode, setSquareID }) => {

    // Conditionals for rounding corners
    let roundedCorner : string = "square";

    if(i == 0 && j == 0) { //Left corner
        roundedCorner = "tlsquare";
    } else if (i == 2 && j == 0) {
        roundedCorner = "blsquare";
    } else if (i == 2 && j == 2) {
        roundedCorner = "brsquare";
    } else if (i == 0 && j == 2) {
        roundedCorner = "trsquare";
    }

    // Actual component
    return (
        <button onClick={() => { setCharSearchMode(i, j); setSquareID([i, j]); }} className={`${roundedCorner}`}>
            <div className={`flex flex-col items-center`}>
                {square[1] !== "" ? (
                    <>
                        <img src={`../images/${square[1]}`} alt="" className='h-auto pb-1 rounded-md char-img'/>
                        {/* <div className="text-white text-xs text-center char-text">{"Frequency: 69%"}</div> */}
                    </>
                ) : null}
                <div className="text-white text-xs text-center char-text">{square[0]}</div>
            </div>
        </button>
    );
};

export default Square;