function divideAndRound(num1: number, num2: number): number {
    if (num2 === -1 || num2 === 0 || num1 === -1) {
        return 0;
    }
    const result = num1 / num2;
    const roundedResult = Math.round(result * 1000) / 10; // Round to the nearest tenth
    return roundedResult;
  }

export default function getFinalScore(numerators: number[], denomonators: number[]) {
    let score = 0; 
    for (let i = 0; i < numerators.length; i++) {
        if (denomonators[i] === 0) {
            score += 100
        }
        else if (denomonators[i] !== -1 && numerators[i] !== -1) {
            score += 100 - divideAndRound(numerators[i], denomonators[i]);
        }   
    }
    return score;
}