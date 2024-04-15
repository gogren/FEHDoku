import { useState } from "react";
import SquareGrid from "./SquareGrid";
import getExampleSolution from "@/app/getSolution";

interface SolGridProps {
    isVisible: boolean
}

const SolGrid = ({isVisible}: SolGridProps) => {
    if (!isVisible) {
        return null;
    }
    const solChars = getExampleSolution(); 
    return (
        <div className="flex flex-col items-center pt-28 pb-36">
            <p className="text-black text-2xl font-bold">Example Solution</p>
            <SquareGrid 
                s1 = {[solChars[0].name, solChars[0].img]}
                s2 = {[solChars[1].name, solChars[1].img]}
                s3 = {[solChars[2].name, solChars[2].img]}
                s4 = {[solChars[3].name, solChars[3].img]}
                s5 = {[solChars[4].name, solChars[4].img]}
                s6 = {[solChars[5].name, solChars[5].img]}
                s7 = {[solChars[6].name, solChars[6].img]}
                s8 = {[solChars[7].name, solChars[7].img]}
                s9 = {[solChars[8].name, solChars[8].img]}
                setCharSearchMode={() => {}} // Passing empty function
                setSquareID={() => {}}
                />
        </div>
    )
}

export default SolGrid;