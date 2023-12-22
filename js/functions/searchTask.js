const searchTask = (taskTitle , tasksArr) => {
    const filter = tasksArr.filter((task) => task.taskTitle.toLowerCase().includes(taskTitle.toLowerCase()));
    console.log(filter);
    return filter;
}

export default searchTask;