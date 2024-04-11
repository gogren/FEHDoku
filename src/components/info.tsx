import React from "react";

interface InfoModalProps {
    isVisible: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

const InfoModal: React.FC<InfoModalProps> = ({ isVisible, onClose, children }) => {
    if (!isVisible ) return null;
    // Without this, modal will close if you tap anywhere
    const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;
        if (target.id === 'wrapper') onClose();
    }


    return (
        <div id="wrapper" onClick={handleClose} className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className="w-[500px]">
                <div className="bg-white p-2 rounded-md shadow-md flex flex-col">
                    <button onClick={()=> onClose()} className="text-gray-600 rounded-md place-self-start text-xl"> X </button>
                    <div className="tect-black place-self-center text-xl">
                        <div className="overflow-y-auto max-h-96">
                            <h1 className="text-center text-2xl pb-3">Welcome to FEH-Doku!</h1>
                            <hr className="pb-1" />
                            <div className="text-left">
                            <ul className="list-disc text-left">
                                <li className="">
                                <p className='pb-2'>
                                    Note: This site is in early development and currently NOT curated for play on mobile devices, please feel free to let me know of any errors you come across.
                                </p>
                                <hr className="" />
                                <div className="pb-2 bg-gray-200">
                                    <h2 className="text-center text-2xl pt-2">How to Play</h2>
                                    <p>
                                    • Goal is to fill all nine boxes in only nine guesses.
                                    </p>
                                    <p className="">
                                    • No duplicate heroes.
                                    </p>
                                    <p>
                                    • No changing your answer.
                                    </p>
                                    <p className=''>
                                    • Each box will have at least one correct answer, and every puzzle will have a valid solution.
                                    </p>
                                    <p>
                                    • If a skill is listed as a constraint, heroes must have that skill in their base skill set.
                                    </p>
                                    <p>
                                    • Harmonic heros' game of origin is only the primary hero's game of origin.
                                    </p>
                                    <p>
                                    Example: Harmonic Edelgard's origin: Three Houses. Not Radiant Dawn.
                                    </p>
                                    <p className='pb-2'>
                                    • Singer/Dreamers/etc. are all included in the "Dancers" constraint.
                                    </p>
                                </div>

                                <hr className="pb-1" />
                                <p className="text-center pb-1">
                                    Thank you to u/Kaz_Kirigiri's asset collection for all the character images!
                                </p>
                                </li>
                            </ul>
                            </div>
                            <div className="flex flex-col items-center">
                            <button onClick={()=> onClose()} className="text-white bg-red-700 rounded-md shadow-md px-2 hover:bg-red-900 hover:transform hover:-translate-y-1 transition duration-300">Done</button>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoModal