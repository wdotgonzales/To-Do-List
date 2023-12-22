import { db } from '../../db/firebase.js';
import { collection, query, where, onSnapshot, orderBy } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

const getAllTask = (email) => {
    return new Promise((resolve, reject) => {
        const q = query(
            collection(db, "tasks"),
            where("email", "==", email),
            orderBy("serverTimestamp" , "desc")
        );
        const getThemTask = onSnapshot(q, (querySnapshot) => {
            const tasks = [];
            querySnapshot.forEach((doc) => {
                tasks.push(doc.data());
            });
            resolve(tasks);
        }, (error) => {
            reject(error);
        });

        // Include the unsubscribe function in the promise
        return getThemTask;
    });
}

export default getAllTask;
