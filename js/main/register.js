import { app } from "../../db/firebase.js";
import signUpUser from "../functions/signUpUser.js";

import emailChecker from "../functions/emailChecker.js";
import passwordChecker from "../functions/passwordChecker.js";
import confirmPasswordChecker from "../functions/confirmPasswordChecker.js";

const email = document.querySelector('#email');
const emailErrorMessage = document.querySelector('#emailErrorMessage');
let emailByPass = false;

const password = document.querySelector('#password');
const passwordErrorMessage = document.querySelector('#passwordErrorMessage');
let passwordByPass = false;

const confirmPassword = document.querySelector('#confirmPassword');
const confirmPasswordErrorMessage = document.querySelector('#confirmPasswordErrorMessage');
let confirmPasswordByPass = false;

const registerBtn = document.querySelector('#registerBtn');


email.addEventListener('input', (e) => {
    const emailValue = e.target.value;

    if (!emailChecker(emailValue)) {
        emailErrorMessage.textContent = 'Email format is incorrect!';
        emailByPass = false;
        email.classList.remove('dark:border-gray-600');
        email.classList.add('dark:border-red-600');

    } else {
        emailErrorMessage.textContent = "";
        emailByPass = true;
        email.classList.remove('dark:border-red-600');
        email.classList.add('dark:border-gray-600');
    }
})

password.addEventListener('input', (e) => {
    const passwordValue = e.target.value;

    if (!passwordChecker(passwordValue).decision) {
        passwordErrorMessage.textContent = `${passwordChecker(passwordValue).text}`
        passwordByPass = false;
        password.classList.remove('dark:border-gray-600');
        password.classList.add('dark:border-red-600');
    } else {
        passwordErrorMessage.textContent = `${passwordChecker(passwordValue).text}`
        passwordByPass = true;
        password.classList.remove('dark:border-red-600');
        password.classList.add('dark:border-gray-600');
    }

    if (!confirmPasswordChecker(password.value, confirmPassword.value)) {
        confirmPasswordErrorMessage.textContent = 'Your password and confirm password is not the same.';
        confirmPasswordByPass = false;
        confirmPassword.classList.remove('dark:border-gray-600');
        confirmPassword.classList.add('dark:border-red-600');
    } else {
        confirmPasswordErrorMessage.textContent = '';
        confirmPasswordByPass = true;
        confirmPassword.classList.remove('dark:border-red-600');
        confirmPassword.classList.add('dark:border-gray-600');
    }
})

confirmPassword.addEventListener('input', (e) => {
    const confirmPasswordValue = e.target.value;

    if (!confirmPasswordChecker(password.value, confirmPasswordValue)) {
        confirmPasswordErrorMessage.textContent = 'Your password and confirm password is not the same.';
        confirmPasswordByPass = false;
        confirmPassword.classList.remove('dark:border-gray-600');
        confirmPassword.classList.add('dark:border-red-600');
    } else {
        confirmPasswordErrorMessage.textContent = '';
        confirmPasswordByPass = true;
        confirmPassword.classList.remove('dark:border-red-600');
        confirmPassword.classList.add('dark:border-gray-600');
    }
})


registerBtn.addEventListener('click', () => {

    if (email.value == "") {
        emailErrorMessage.textContent = 'Please enter your email address.';
        email.classList.remove('dark:border-gray-600');
        email.classList.add('dark:border-red-600');
    }

    if (password.value == "") {
        passwordErrorMessage.textContent = "Please enter your password."
        password.classList.remove('dark:border-gray-600');
        password.classList.add('dark:border-red-600');
    } 

    if (confirmPassword.value == "") {
        confirmPasswordErrorMessage.textContent = 'Your password and confirm password is not the same.';
        confirmPassword.classList.remove('dark:border-gray-600');
        confirmPassword.classList.add('dark:border-red-600');
    }
    

    if (!emailByPass) {
        return;
    }

    if (!passwordByPass) {
        return;
    }

    if (!confirmPasswordByPass) {
        return;
    }


    const registerErrorMessage = document.querySelector('#registerErrorMessage');

    signUpUser(email.value, confirmPassword.value)
        .then((user) => {
            registerErrorMessage.textContent = "You are now registered! Try to login.";
            registerErrorMessage.classList.remove("text-red-600");
            registerErrorMessage.classList.remove("dark:text-red-500");
            registerErrorMessage.classList.add("text-green-600");
            registerErrorMessage.classList.add("dark:text-green-500");

            email.value = "";
            password.value = "";
            confirmPassword.value = "";
        })
        .catch((error) => {
            // Handle sign-up error
            console.log(error.code);

            if (error.code == "auth/email-already-in-use") {
                registerErrorMessage.textContent = "Email is already in use.";
                registerErrorMessage.classList.add("text-red-600");
                registerErrorMessage.classList.add("dark:text-red-500");
                registerErrorMessage.classList.remove("text-green-600");
                registerErrorMessage.classList.remove("dark:text-green-500");
            }
        });

})