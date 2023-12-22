import { db } from '../../db/firebase.js';
import { collection, addDoc, doc, setDoc , serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

const addTask = async (email, taskTitle, taskDescription, taskDate) => {
    try {
        const docRef = await addDoc(collection(db, "tasks"), {
            taskTitle: taskTitle,
            taskDescription: taskDescription,
            taskDate: taskDate,
            email: email,
            serverTimestamp : serverTimestamp()
        });

        const taskRef = doc(db, "tasks", docRef.id);
        await setDoc(taskRef, { taskId: docRef.id }, { merge: true });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export default addTask;