const Task = require('./task.js');

function addTask(tasks, task) {
    tasks.push(task);
}


let firstTask = new Task("get money");
console.log(firstTask.name);

// function addTask(tasks, task) {
//     tasks.push(task);
// }

function listTasks(tasks) {
    tasks.forEach((task)=> console.log(`\n${task}`));
}