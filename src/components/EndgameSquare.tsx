type SquareProps = {
    i: number;
    j: number;
    square: string[];
    freq: string;
    openSquare: () => void;
    setSquareID: (id: number[]) => void;
};

const EndGameSquare: React.FC<SquareProps> = ({ i, j, square, freq, openSquare, setSquareID}) => {

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
        <button onClick={() => {openSquare(); setSquareID([i, j])}} className={`${roundedCorner}`}>
            <div className={`flex flex-col items-center`}>
                <div className="hover:scale-110 transition-transform duration-300 flex flex-col items-center">
                    {square[1] !== "" ? (
                        <>
                            <img src={`../images/${square[1]}`} alt="" className='h-auto rounded-md char-img'/>
                            {/* <div className="text-white text-xs text-center char-text">{"Frequency: 69%"}</div> */}
                        </>
                    ) : null}
                    <div className="squaretitle text-black text-xs text-center char-text leading-tight">{square[0]}</div>
                </div>
                <div className="frequency text-xs bg-slate-400 rounded-lg px-1">{freq}</div>
            </div>
        </button>
    );
};

export default EndGameSquare;