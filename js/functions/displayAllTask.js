const displayAllTask = (arr) => {
    const allTaskArr = arr.map(task => {
        return `<div
        class="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-[#27374D] border-2 border-white-500 rounded-md mb-3">

        <h2 id="titlePlaceholder" class="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            ${task.taskTitle}</h2>

        <p id="taskPlaceholder" class="mb-4 font-normal text-gray-700 dark:text-gray-400">${task.taskDescription}</p>

        <div class="flex gap-2">
            <div>
                <!-- Button Modal (Update)-->
                <button id="updateModalBtn" data-modal-target="crud-modal-${task.taskId}" data-modal-toggle="crud-modal-${task.taskId}"
                    class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-800 dark:hover:bg-green-700 dark:focus:ring-blue-800"
                    type="button">
                    Update Task
                </button>

                <!-- Modal Update -->

                <div id="crud-modal-${task.taskId}" tabindex="-1" aria-hidden="true"
                    class="hidden overflow-y-auto overflow-x-hidden fixed top-[50%] right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div class="relative p-4 w-full max-w-md max-h-full">
                        <!-- Modal content -->
                        <div class=" border-solid border-2 border-white-700 relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <!-- Modal header -->
                            <div
                                class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                    Update Task
                                </h3>
                                <button id="exitUpdateModal" type="button"
                                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-toggle="crud-modal-${task.taskId}">
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                            </div>
                            <!-- Modal body -->

                            <div class="grid gap-4 mb-4 grid-cols-2 px-[25px]">
                                <div class="col-span-2">
                                    <label for="updateTitleInput"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-[15px]">Title:</label>
                                    <input type="text" name="updateTitleInput" id="updateTitleInput"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Type product name" value="${task.taskTitle}">
                                    <p id="updateTitleErrorMessage"
                                        class="mt-2 text-sm text-red-600 dark:text-red-500"><span
                                            class="font-medium"></p>
                                </div>
                                <div class="col-span-2">
                                    <label for="updateTaskInput"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task:</label>
                                    <textarea id="updateTaskInput" rows="4" name="updateTaskInput"
                                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Write product description here" value="${task.taskDescription}">${task.taskDescription}</textarea>
                                    <p id="updateTaskErrorMessage"
                                        class="mt-2 text-sm text-red-600 dark:text-red-500"><span
                                            class="font-medium"></p>
                                </div>
                                <div class="col-span-2">
                                    <label for="updateDateInput"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date:</label>
                                    <input type="date" name="updateDateInput" id="updateDateInput"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Type product name" value="${task.taskDate}">
                                    <p id="updateDateErrorMessage"
                                        class="mt-2 text-sm text-red-600 dark:text-red-500"><span
                                            class="font-medium"></p>
                                </div>
                            </div>
                            <div class="px-[25px] pb-5">
                                <button task-id="${task.taskId}" data-modal-toggle="crud-modal-${task.taskId}" id="updateBtn" type="submit"
                                    class=" mt-3 w-full text-black bg-[#DDE6ED] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Update
                                    Task</button>
                            </div>


                        </div>
                    </div>
                </div>

            </div>

            <!-- Button Modal (Delete)-->
            <div>
                <button id="deleteBtnModal" data-modal-target="popup-modal-${task.taskId}" data-modal-toggle="popup-modal-${task.taskId}"
                    class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800"
                    type="button">
                    Delete Task
                </button>
                <!-- Delete Modal -->
                <div id="popup-modal-${task.taskId}" tabindex="-1"
                    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div class="relative p-4 w-full max-w-md max-h-full">
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 border-solid border-2">
                            <button id="exitDeleteModal_1" data-modal-target="popup-modal-${task.taskId}" type="button"
                                class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="popup-modal-${task.taskId}">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                            <div class="p-4 md:p-5 text-center">
                                <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you
                                    sure you want to delete this task?</h3>
                                <button id="deleteBtn" type="button" task-id="${task.taskId}" data-modal-target="popup-modal-${task.taskId}" data-modal-hide="popup-modal-${task.taskId}"
                                    class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2">
                                    Yes, I'm sure
                                </button>
                                <button id="exitDeleteModal_2" data-modal-target="popup-modal-${task.taskId}" data-modal-hide="popup-modal-${task.taskId}" type="button"
                                    class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No,
                                    cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="ml-auto mt-2">
                <p id="datePlaceholder" class="text-sm">${task.taskDate}</p>
            </div>
        </div>

    </div>`
    }).join('');

    return allTaskArr;
}

export default displayAllTask;


// const displayAllTask = (arr) => {
//     const allTaskArr = arr.map(task => {
//         return `<div
//         class="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-[#27374D] border-2 border-white-500 rounded-md mb-3">

//         <h2 id="titlePlaceholder" class="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
//             ${task.taskTitle}</h2>

//         <p id="taskPlaceholder" class="mb-4 font-normal text-gray-700 dark:text-gray-400">${task.taskDescription}</p>

//         <div class="flex gap-2">
//             <div>
//                 <!-- Button Modal (Update)-->
//                 <button id="updateModalBtn" data-modal-target="crud-modal-${task.taskId}" data-modal-toggle="crud-modal-${task.taskId}"
//                     class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-800 dark:hover:bg-green-700 dark:focus:ring-blue-800"
//                     type="button">
//                     Update Task
//                 </button>

//                 <!-- Modal Update -->

//                 <div id="crud-modal-${task.taskId}" tabindex="-1" aria-hidden="true"
//                     class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
//                     <div class="relative p-4 w-full max-w-md max-h-full">
//                         <!-- Modal content -->
//                         <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
//                             <!-- Modal header -->
//                             <div
//                                 class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
//                                 <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
//                                     Update Task
//                                 </h3>
//                                 <button id="exitUpdateModal" type="button"
//                                     class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
//                                     data-modal-toggle="crud-modal-${task.taskId}">
//                                     <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
//                                         fill="none" viewBox="0 0 14 14">
//                                         <path stroke="currentColor" stroke-linecap="round"
//                                             stroke-linejoin="round" stroke-width="2"
//                                             d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
//                                     </svg>
//                                     <span class="sr-only">Close modal</span>
//                                 </button>
//                             </div>
//                             <!-- Modal body -->

//                             <div class="grid gap-4 mb-4 grid-cols-2 px-[25px]">
//                                 <div class="col-span-2">
//                                     <label for="updateTitleInput"
//                                         class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-[15px]">Title:</label>
//                                     <input type="text" name="updateTitleInput" id="updateTitleInput"
//                                         class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                                         placeholder="Type product name" value="${task.taskTitle}">
//                                     <p id="updateTitleErrorMessage"
//                                         class="mt-2 text-sm text-red-600 dark:text-red-500"><span
//                                             class="font-medium"></p>
//                                 </div>
//                                 <div class="col-span-2">
//                                     <label for="updateTaskInput"
//                                         class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task:</label>
//                                     <textarea id="updateTaskInput" rows="4" name="updateTaskInput"
//                                         class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                                         placeholder="Write product description here" value="${task.taskDescription}">${task.taskDescription}</textarea>
//                                     <p id="updateTaskErrorMessage"
//                                         class="mt-2 text-sm text-red-600 dark:text-red-500"><span
//                                             class="font-medium"></p>
//                                 </div>
//                                 <div class="col-span-2">
//                                     <label for="updateDateInput"
//                                         class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date:</label>
//                                     <input type="date" name="updateDateInput" id="updateDateInput"
//                                         class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                                         placeholder="Type product name" value="${task.taskDate}">
//                                     <p id="updateDateErrorMessage"
//                                         class="mt-2 text-sm text-red-600 dark:text-red-500"><span
//                                             class="font-medium"></p>
//                                 </div>
//                             </div>
//                             <div class="px-[25px] pb-5">
//                                 <button task-id="${task.taskId}" data-modal-toggle="crud-modal-${task.taskId}" id="updateBtn" type="submit"
//                                     class=" mt-3 w-full text-black bg-[#DDE6ED] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Update
//                                     Task</button>
//                             </div>


//                         </div>
//                     </div>
//                 </div>

//             </div>

//             <!-- Button Modal (Delete)-->
//             <div>
//                 <button id="deleteBtnModal" data-modal-target="popup-modal-${task.taskId}" data-modal-toggle="popup-modal-${task.taskId}"
//                     class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800"
//                     type="button">
//                     Delete Task
//                 </button>
//                 <!-- Delete Modal -->
//                 <div id="popup-modal-${task.taskId}" tabindex="-1"
//                     class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
//                     <div class="relative p-4 w-full max-w-md max-h-full">
//                         <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
//                             <button id="exitDeleteModal_1" data-modal-target="popup-modal-${task.taskId}" type="button"
//                                 class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
//                                 data-modal-hide="popup-modal-${task.taskId}">
//                                 <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
//                                     fill="none" viewBox="0 0 14 14">
//                                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
//                                         stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
//                                 </svg>
//                                 <span class="sr-only">Close modal</span>
//                             </button>
//                             <div class="p-4 md:p-5 text-center">
//                                 <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
//                                     aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
//                                     viewBox="0 0 20 20">
//                                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
//                                         stroke-width="2"
//                                         d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
//                                 </svg>
//                                 <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you
//                                     sure you want to delete this task?</h3>
//                                 <button id="deleteBtn" type="button" task-id="${task.taskId}" data-modal-target="popup-modal-${task.taskId}" data-modal-hide="popup-modal-${task.taskId}"
//                                     class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2">
//                                     Yes, I'm sure
//                                 </button>
//                                 <button id="exitDeleteModal_2" data-modal-target="popup-modal-${task.taskId}" data-modal-hide="popup-modal-${task.taskId}" type="button"
//                                     class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No,
//                                     cancel</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div class="ml-auto mt-2">
//                 <p id="datePlaceholder" class="text-sm">${task.taskDate}</p>
//             </div>
//         </div>

//     </div>`
//     }).join('');

//     return allTaskArr;
// }

// export default displayAllTask;