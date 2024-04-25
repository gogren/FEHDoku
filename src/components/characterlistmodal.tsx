import React from "react";
import { Character } from "@/database/characters";

interface InfoModalProps {
    isVisible: boolean;
    onClose: () => void;
    children?: React.ReactNode;
    generate_ten_chars: (test: string) => void;
    getTitleStrings: () => string;
    handleChosenCharacter: (char: Character) => void;
    inputText: string;
    charList: Character[];
    usedChars: string[];
}
// Take in sqaure ID and its constraints as args?
const CharacterListModal: React.FC<InfoModalProps> = ({ isVisible, onClose, children, generate_ten_chars, getTitleStrings, handleChosenCharacter, inputText, charList, usedChars }) => {
    if (!isVisible ) return null;
    // Without this, modal will close if you tap anywhere
    const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;
        if (target.id === 'wrapper') onClose();
    }


    return (
        <div id="wrapper" onClick={handleClose} className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className="w-[470px]">
                <div className="bg-white p-2 rounded-md shadow-md flex flex-col">
                    <button onClick={()=> onClose()} className="text-white bg-red-700 rounded-md shadow-md px-2 hover:bg-red-900 hover:transform hover:-translate-y-1 transition duration-300 place-self-start">Back</button>
                    <div className="text-black place-self-center text-xl pb-4">
                        <form className="flex flex-col items-center">
                            <div className="text-center text-black pb-2">{getTitleStrings()}</div>
                            <input placeholder="Search Character" type="text" value={inputText} onChange={e => {generate_ten_chars(e.target.value);}} className="text-black bg-gray-200 rounded-md shadow-md pl-3 pr-3 border border-black w-[300px]" />
                        </form>
                        <div className="flex flex-col pt-3 max-h-[400px] overflow-y-auto border-b-4 rounded-b-lg mt-2 rounded-md">
                            {charList.length === 0 && <div className="self-center pt-6">No Characters Found</div>}
                            {charList.map((character) => {
                            const isUsed = usedChars.includes(character.name);
                            return (
                                <button key={character.name} onClick={() => {handleChosenCharacter(character);}} className={`flex justify-between border border-black rounded-md shadow-md hover:bg-gray-300 ${isUsed ? 'text-gray-500 line-through' : ''}`}>
                                <img src={"/images/" + character.img} className="border border-black rounded-md shadow-md w-12 h-auto" />
                                <div className="p-1">
                                    {character.name}
                                </div>
                                </button>
                            )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterListModal