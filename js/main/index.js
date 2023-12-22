import { app, db } from "../../db/firebase.js";
import checkAuthIndex from "../functions/checkAuthIndex.js";
import showSuccessModal from "../functions/showSuccessModal.js";
import signOutUser from "../functions/signOutUser.js";
import addTask from "../functions/addTask.js";
import getAllTask from "../functions/getAllTask.js";
import displayAllTask from "../functions/displayAllTask.js";
import updateTask from "../functions/updateTask.js";
import deleteTask from "../functions/deleteTask.js";
import searchTask from "../functions/searchTask.js";

const emailPlaceholder = document.querySelector('#emailPlaceholder');
const taskContainer = document.querySelector('#taskContainer');

try {
    const { userEmail } = await checkAuthIndex();
    emailPlaceholder.textContent = userEmail;
} catch (redirectLoginPage) {
    window.location.href = redirectLoginPage;
}

// Display Task
console.log(emailPlaceholder.textContent)
try {
    const tasks = await getAllTask(emailPlaceholder.textContent);
    taskContainer.innerHTML = displayAllTask(tasks)
} catch (error) {
    console.error('Error fetching tasks:', error);
}


const titleInput = document.querySelector('#titleInput');
const titleError = document.querySelector('#titleError');

const taskInput = document.querySelector('#taskInput');
const taskError = document.querySelector('#taskError');

const dateInput = document.querySelector('#dateInput');
const dateError = document.querySelector('#dateError');

const submitTaskBtn = document.querySelector('#submitTaskBtn');

const signOutBtn = document.querySelector('#signOutBtn');

signOutBtn.addEventListener('click', () => {
    signOutUser();
})



submitTaskBtn.addEventListener('click', async () => {
    const titleValue = titleInput.value;
    const taskValue = taskInput.value;
    const dateValue = dateInput.value;

    let showErrors = false;

    if (titleValue == '') {
        titleError.textContent = "Please enter a title for your task.";
        titleInput.classList.remove('dark:border-gray-600');
        titleInput.classList.add('dark:border-red-600');
        showErrors = true;
    } else {
        titleError.textContent = "";
        titleInput.classList.remove('dark:border-red-600');
        titleInput.classList.add('dark:border-gray-600');
    }

    if (taskValue == '') {
        taskError.textContent = 'Please enter a description for your task.';
        taskInput.classList.remove('dark:border-gray-600');
        taskInput.classList.add('dark:border-red-600');
        showErrors = true;
    } else {
        taskError.textContent = "";
        taskInput.classList.remove('dark:border-red-600');
        taskInput.classList.add('dark:border-gray-600');
    }

    if (dateValue == '') {
        dateError.textContent = "Please enter a date for your task."
        dateInput.classList.remove('dark:border-gray-600');
        dateInput.classList.add('dark:border-red-600');
        showErrors = true;
    } else {
        dateError.textContent = "";
        dateInput.classList.remove('dark:border-red-600');
        dateInput.classList.add('dark:border-gray-600');
    }


    if (showErrors) {
        return;
    }

    await addTask(emailPlaceholder.textContent, titleInput.value, taskInput.value, dateInput.value);
    showSuccessModal("addTaskSuccessModal");
    const tasks = await getAllTask(emailPlaceholder.textContent);
    taskContainer.innerHTML = displayAllTask(tasks);

    titleInput.value = "";
    taskInput.value = "";
    dateInput.value = "";
})

const searchTaskInput = document.querySelector('#searchTaskInput');
searchTaskInput.addEventListener('input', async () => {
    const taskTitle = searchTaskInput.value

    if (taskTitle == "") {
        const tasks = await getAllTask(emailPlaceholder.textContent);
        taskContainer.innerHTML = displayAllTask(tasks);
    } else {
        const tasks = await getAllTask(emailPlaceholder.textContent);
        const filterTaskArr = searchTask(taskTitle, tasks);
        if (filterTaskArr < 1) {
            taskContainer.innerHTML = `<h3 class="text-center text-[24px] pb-5">No Task Found.</h3>`
        } else {
            taskContainer.innerHTML = displayAllTask(filterTaskArr);
        }
    }

})


taskContainer.addEventListener('click', async (event) => {
    if (event.target.id == "updateModalBtn") {
        const modalId = event.target.getAttribute('data-modal-target');
        const modal = document.getElementById(modalId);
        modal.classList.remove('hidden');

        modal.style.top = `10%`;
        modal.style.left = `35%`;

    } else if (event.target.id == "exitUpdateModal") {
        const modalId = event.target.getAttribute('data-modal-toggle');
        const modal = document.getElementById(modalId);
        modal.classList.add('hidden');
    } else if (event.target.id == "updateBtn") {
        const modalId = event.target.getAttribute('data-modal-toggle');
        const findModal = document.getElementById(modalId);
        const updateTitleValue = findModal.querySelector('#updateTitleInput').value;
        const updateTaskValue = findModal.querySelector('#updateTaskInput').value;
        const updateDateValue = findModal.querySelector('#updateDateInput').value;

        const updateTitleInput = findModal.querySelector('#updateTitleInput');
        const updateTitleErrorMessage = findModal.querySelector('#updateTitleErrorMessage');

        const updateTaskInput = findModal.querySelector('#updateTaskInput');
        const updateTaskErrorMessage = findModal.querySelector('#updateTaskErrorMessage');

        const updateDateInput = findModal.querySelector('#updateDateInput');
        const updateDateErrorMessage = findModal.querySelector('#updateDateErrorMessage');


        let showErrors = false;

        if (updateTitleInput.value == '') {
            updateTitleErrorMessage.textContent = "Please enter a title for your task.";
            updateTitleInput.classList.remove('dark:border-gray-600');
            updateTitleInput.classList.add('dark:border-red-600');
            showErrors = true;
        } else {
            updateTitleErrorMessage.textContent = "";
            updateTitleInput.classList.remove('dark:border-red-600');
            updateTitleInput.classList.add('dark:border-gray-600');
        }

        if (updateTaskInput.value == '') {
            updateTaskErrorMessage.textContent = 'Please enter a description for your task.';
            updateTaskInput.classList.remove('dark:border-gray-600');
            updateTaskInput.classList.add('dark:border-red-600');
            showErrors = true;
        } else {
            updateTaskErrorMessage.textContent = "";
            updateTaskInput.classList.remove('dark:border-red-600');
            updateTaskInput.classList.add('dark:border-gray-600');
        }

        if (updateDateInput.value == '') {
            updateDateErrorMessage.textContent = "Please enter a date for your task."
            updateDateInput.classList.remove('dark:border-gray-600');
            updateDateInput.classList.add('dark:border-red-600');
            showErrors = true;
        } else {
            updateDateErrorMessage.textContent = "";
            updateDateInput.classList.remove('dark:border-red-600');
            updateDateInput.classList.add('dark:border-gray-600');
        }


        if (showErrors) {
            return;
        }

        // Update Input
        console.log(updateTitleValue, updateTaskValue, updateDateValue);
        const taskId = event.target.getAttribute('task-id');

        const updatedData = {
            taskTitle: updateTitleValue,
            taskDescription: updateTaskValue,
            taskDate: updateDateValue,
        };

        try {
            await updateTask(taskId, updatedData);
            const tasks = await getAllTask(emailPlaceholder.textContent);
            taskContainer.innerHTML = displayAllTask(tasks);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }

        showSuccessModal("updateTaskSuccessModal");

        // Close modal
        const modal = document.getElementById(modalId);
        modal.classList.add('hidden');

    } else if (event.target.id == 'deleteBtnModal') {
        const modalId = event.target.getAttribute('data-modal-target');
        const modal = document.getElementById(modalId);
        modal.classList.remove('hidden');

        modal.style.top = `20%`;
        modal.style.left = `35%`;

    } else if (event.target.id == "exitDeleteModal_1") {
        const modalId = event.target.getAttribute('data-modal-target');
        const modal = document.getElementById(modalId);
        modal.classList.add('hidden');
    } else if (event.target.id == "exitDeleteModal_2") {
        const modalId = event.target.getAttribute('data-modal-target');
        const modal = document.getElementById(modalId);
        modal.classList.add('hidden');
    } else if (event.target.id == "deleteBtn") {

        const taskId = event.target.getAttribute("task-id");
        try {
            deleteTask(taskId);
            const tasks = await getAllTask(emailPlaceholder.textContent);
            taskContainer.innerHTML = displayAllTask(tasks);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }

        showSuccessModal("deleteSuccessModal");
        const modalId = event.target.getAttribute('data-modal-target');
        const modal = document.getElementById(modalId);
        modal.classList.add('hidden');
    }
})




// Delete
// const deleteBtn = document.querySelector('#deleteBtn');

// deleteBtn.addEventListener('click', () => {
//     showSuccessModal("deleteSuccessModal");
// })
















