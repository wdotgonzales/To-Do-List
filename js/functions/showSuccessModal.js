const showSuccessUpdatedModal = (element) => {
    const toastContainer = document.getElementsByClassName(element);

    // Show the toast by adding the "show" class
    toastContainer[0].classList.add("show");

    // Set a timeout to remove the "show" class after a few seconds (e.g., 3000 milliseconds = 3 seconds)
    setTimeout(function () {
        // Hide the toast by removing the "show" class
        toastContainer[0].classList.remove("show");
    }, 3000);
}

export default showSuccessUpdatedModal