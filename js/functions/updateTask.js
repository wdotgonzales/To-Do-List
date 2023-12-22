import { db } from '../../db/firebase.js';
import { doc, updateDoc } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

const updateTask = async (taskId, updatedTaskData) => {
    try {
        const taskRef = doc(db, "tasks", taskId);
        await updateDoc(taskRef, updatedTaskData);
        console.log("Document updated successfully");
    } catch (e) {
        console.error("Error updating document: ", e);
    }
}

export default updateTask;