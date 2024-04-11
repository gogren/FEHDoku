import React from "react";
import { useState, useEffect } from "react";
import InfoModal from "./info";

interface HeaderProps {
    //curDate: string;
}

const Header = () => {
    const [infoMode, setInfoMode] = useState(false)

    const [curDate, setDate] = useState("")

    useEffect(() => {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        setDate(`(${month}-${day}-${year})`);
      }, []);

    return (
        <>
            <div className="w-screen">
                <div className="flex items-center justify-evenly p-4 text-center">
                    <div className="text-5xl text-yellow-300 w-32 title">FEH-doku</div>
                    <div className="text-2xl text-white w-48 font-sans date">
                        <div className="">Daily Puzzle</div>
                        <div className="">{curDate}</div>
                    </div>
                    <div className='w-32 items-center text-center'>
                        <div className="flex flex-col justify-end items-center info">
                            <button onClick={() => setInfoMode(true)} className="text-black bg-yellow-300 w-6 rounded-3xl font-bold hover:bg-yellow-500 hover:transform hover:-translate-y-1 transition duration-300">
                                i
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-screen h-0.5 bg-yellow-300"></div>
            <InfoModal isVisible={infoMode} onClose={() => {setInfoMode(false);}}></InfoModal>
        </>
    )
}

export default Header;