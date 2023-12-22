const confirmPasswordChecker = (password , repeatPassword) => {
    if(password !== repeatPassword){
        return false;
    }

    return true;
}

export default confirmPasswordChecker;