import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const signOutUser = () => {
    const auth = getAuth();
    signOut(auth)
        .then(() => {
            window.location.href = "login.html";
        })
        .catch((error) => {
            // An error happened.
            console.error(error);
        });
}

export default signOutUser;