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
                    <div className="tect-black place-self-center text-xl">{children}</div>
                </div>
            </div>
        </div>
    )
}

export default InfoModal