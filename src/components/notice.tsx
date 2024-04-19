import React from "react";

interface InfoModalProps {
    isVisible: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

const NoticeModal: React.FC<InfoModalProps> = ({ isVisible, onClose, children }) => {
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
                            <h1 className="text-center text-2xl pb-3 underline">Update:</h1>
                            <hr className="pb-1" />
                            <div className="text-left">
                            <ul className="list-disc text-left">
                                <li className="">
                                <p className='pb-2'>
                                    Character frequency added. Please contact <a className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer" href="https://www.reddit.com/user/Gogren/">u/Gogren</a>
                                    {" if you come across any issues."} 
                                </p>
                                <p className="pb-2">
                                    Thanks for being so supportive and for the great feedback! More features to come!
                                </p>
                                <hr className="pb-2" />
                                </li>
                            </ul>
                            </div>
                            <div className="flex flex-col items-center pb-2">
                            <button onClick={()=> onClose()} className="text-white bg-red-700 rounded-md shadow-md px-2 hover:bg-red-900 hover:transform hover:-translate-y-1 transition duration-300">Done</button>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoticeModal