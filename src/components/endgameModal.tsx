import React from "react"

interface EndgameModalProps {
    isVisible: boolean;
    didWin: boolean;
    onClose: () => void;
    children?: React.ReactNode;
    score: number
}

const EndgameModal: React.FC<EndgameModalProps> = ({isVisible, onClose, children, didWin, score}) => {
    if (!isVisible) return null;

    const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;
        if (target.id === 'wrapper') onClose();
    }

    if (didWin) {
        return (
            <div id='wrapper' onClick={handleClose} className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
                <div className="w-[500px]">
                    <div className="bg-white text-center rounded-md shadow-md flex flex-col p-2">
                        <div className="pb-2 text-2xl">Game Won!</div>
                        <div className="pb-1">Final Score: {score}/900</div>
                        <hr className="pb-2" />
                        <img src="/images/victory.webp" alt="" className="w-[300px] h-auto self-center rounded-md pb-2" />
                        <p>Thank you for giving this game a shot!</p>
                        <p>This site is still very early in development, and I'm still continuing to learn a lot about web development, so any criticism or advice is greatly appreciated!</p>
                        <hr className="pb-2" />
                        <button onClick={()=> onClose()} className="text-white bg-red-700 rounded-md shadow-md px-3 py-1 hover:bg-red-900 hover:transform hover:-translate-y-1 transition duration-300 place-self-center">Done</button>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div id='wrapper' onClick={handleClose} className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className="w-[500px]">
                <div className="bg-white text-center rounded-md shadow-md flex flex-col p-2">
                    <div className="pb-1 text-2xl">Game Over</div>
                    <div className="pb-2 text-xl">Final Score: {score}/900</div>
                    <hr />
                    <img src="/images/lost.webp" alt="" className="w-[100px] h-auto self-center pt-3" />
                    <p>Thank you for giving this game a shot!</p>
                    <p className="pb-1">This site is still very early in development, and I'm still continuing to learn a lot about web development, so any criticism or advice is greatly appreciated!</p>
                    <hr className="pb-2" />
                    <button onClick={()=> onClose()} className="text-white bg-red-700 rounded-md shadow-md px-3 py-1 hover:bg-red-900 hover:transform hover:-translate-y-1 transition duration-300 place-self-center">Done</button>
                </div>
            </div>
        </div>
    )
}

export default EndgameModal;