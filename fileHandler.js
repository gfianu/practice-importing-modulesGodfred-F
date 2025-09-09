const fs = require('fs');

function saveTasks(filePath, tasks) {
    fs.writeFileSync(filePath, JSON.stringify(tasks));
}

function loadTasks(filePath) {
    return fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath)):[];    
}

module.exports = {
    saveTasks,
    loadTasks
};

