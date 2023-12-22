const passwordChecker = (password) => {
    // Conditions to comply.
    if (password.length < 8) {
        return {
            text : 'Password should be 8+ characters.',
            decision : false
        };
    }

    const specialCharacters = /[!@#$%^&*()_+]/;
    if (specialCharacters.test(password)) {
        return {
            text : 'Avoid symbols in password.',
            decision : false
        }
    }

    if (password.includes(' ')) {
        return {
            text : 'Avoid spaces in passwords.',
            decision : false
        }
    }

    // If password is now valid.
    return {
        text : '',
        decision : true
    };
}

export default passwordChecker;
