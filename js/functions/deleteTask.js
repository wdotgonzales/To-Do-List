import { db } from '../../db/firebase.js';
import { doc, deleteDoc } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

const deleteTask = async (taskId) => {
    try {
        const taskRef = doc(db, "tasks", taskId);
        await deleteDoc(taskRef);
    } catch (e) {
        console.error("Error deleting document: ", e);
    }
}

export default deleteTask;