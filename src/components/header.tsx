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
            <div className="w-screen h-32">
                <div className="h-full flex items-center justify-evenly p-4 text-center">
                    <div className="text-md text-white hover:text-yellow-400 w-1/3 font-sans date hover:transform hover:-translate-y-1 transition duration-200">
                        <div className="font-medium">Daily Puzzle</div>
                        <div className="font-medium">{curDate}</div>
                    </div>
                    <div className="text-5xl text-yellow-200 hover:text-yellow-400 w-1/3 title font-extrabold hover:transform hover:-translate-y-1 hover:underline transition duration-200">FEH-doku</div>
                    <div className='w-1/3 h-full flex flex-row items-center text-center'>
                        <div className="w-1/2 h-full flex justify-center items-center">
                            <button className="p-3 border border-white rounded-full font-medium text-white text-sm hover:border-yellow-400 hover:text-yellow-400 hover:transform hover:-translate-y-1 transition duration-200">
                                <a href="https://www.buymeacoffee.com/trentjkelly">Buy me a coffee!</a>
                            </button>
                        </div>
                        <div className="w-1/2 h-full flex flex-col justify-center items-center info">
                            <button onClick={() => setInfoMode(true)} className="text-black bg-slate-200 w-6 rounded-3xl font-bold hover:bg-yellow-400 hover:transform hover:-translate-y-1 transition duration-300">
                                i
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <InfoModal isVisible={infoMode} onClose={() => {setInfoMode(false);}}></InfoModal>
        </>
    )
}

export default Header;