import { app } from "../../db/firebase.js";
import signInUser from "../functions/signInUser.js";
import emailChecker from "../functions/emailChecker.js";
import passwordChecker from "../functions/passwordChecker.js";

const email = document.querySelector('#email');
const emailErrorMessage = document.querySelector('#emailErrorMessage');
let emailbyPass = false;

const loginErrorMessage = document.querySelector('#loginErrorMessage');

const password = document.querySelector('#password');
const passwordErrorMessage = document.querySelector('#passwordErrorMessage');

const submitBtn = document.querySelector('#submitBtn');


email.addEventListener('input', (e) => {
    const emailValue = e.target.value;

    if (!emailChecker(emailValue)) {
        emailErrorMessage.textContent = 'Email format is incorrect!';
        emailbyPass = false;
        email.classList.remove('dark:border-gray-600');
        email.classList.add('dark:border-red-600');
    } else {
        emailErrorMessage.textContent = "";
        emailbyPass = true;
        email.classList.remove('dark:border-red-600');
        email.classList.add('dark:border-gray-600');
    }
})

password.addEventListener('input', (e) => {
    const passwordValue = e.target.value;

    if (password.value == "") {
        passwordErrorMessage.textContent = 'Enter your password please!';
        password.classList.remove('dark:border-gray-600');
        password.classList.add('dark:border-red-600');
    } else {
        passwordErrorMessage.textContent = '';
        password.classList.remove('dark:border-red-600');
        password.classList.add('dark:border-gray-600');
    }
})


submitBtn.addEventListener('click', () => {

    if (email.value == "") {
        emailErrorMessage.textContent = 'Enter your email address please!';
        email.classList.remove('dark:border-gray-600');
        email.classList.add('dark:border-red-600');
    }

    if (password.value == "") {
        passwordErrorMessage.textContent = 'Enter your password please!';
        password.classList.remove('dark:border-gray-600');
        password.classList.add('dark:border-red-600');
    }

    if (!emailbyPass) {
        return;
    }

    signInUser(email.value, password.value)
        .then((userCredential) => {
            window.location.href = "index.html";
        })
        .catch((error) => {
            if (error.code == "auth/invalid-credential") {
                loginErrorMessage.textContent = "Invalid email or password!";
            }
        });
})
