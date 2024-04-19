import { db } from "./firebase";
import { collection, doc, getDocs } from "firebase/firestore";
import rowTitles from "@/todaysrules/rowTitles";
import columnTitles from "@/todaysrules/colTitles";
import generateConstraintId from "./generateConstraintId";
import characters from "@/database/characters";

const getCharacterWithHighestCount = async (constraintTitle: string) => {
    // Reference to the specific document within the 'constraints' collection
    const constraintRef = doc(db, 'constraints', constraintTitle);
  
    // Reference to the 'characters' subcollection within the specific document
    const charactersRef = collection(constraintRef, 'characters');
  
    // Query all documents in the 'characters' subcollection
    const querySnapshot = await getDocs(charactersRef);
  
    let maxCount = 0;
    let characterWithMaxCount: any = null;
  
    // Iterate through each document in the query snapshot
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const count = data.count;
  
      // Check if the count is greater than the current maximum count
      if (count > maxCount) {
        maxCount = count;
        characterWithMaxCount = { id: doc.id, ...data };
      }
    });
  
    return characterWithMaxCount.name;
  };
  

const getMostUsedCharacters = async () => {
    const charNames = []; 
    for (let i = 0; i < rowTitles.length; i++) {
        for (let j = 0; j < columnTitles.length; j++) {
            const conID = generateConstraintId(rowTitles[i], columnTitles[j]);
            charNames.push(getCharacterWithHighestCount(conID))
        }
    }
    const chars = []
    for (let i = 0; i < charNames.length; i++) {
        for (let j = 0; j < characters.length; j++) {
            if (await charNames[i] == characters[j]) {
                chars.push(characters[j])
                break;
            }  
        }
    }
    return chars; 
}
export default getMostUsedCharacters;