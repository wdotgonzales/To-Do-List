import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const checkAuthIndex = () => {
    return new Promise((resolve, reject) => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                resolve({
                    userEmail : user.email
                })
            } else {
                const redirectLoginPage = "login.html";
                reject(redirectLoginPage);
            }
        });
    })
};

export default checkAuthIndex;