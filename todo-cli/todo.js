// todo.js

function createTodoList() {
    const tasks = [];
  
    function add(task) {
      tasks.push(task);
    }
  
    function markAsComplete(title) {
      const foundItem = tasks.find(item => item.title === title);
      if (foundItem) {
        foundItem.completed = true;
      } else {
        console.error(`Todo item with title ${title} not found.`);
      }
    }
  
    function getOverdueTasks() {
      const currentDate = new Date().toISOString().split('T')[0];
      return tasks.filter(task => new Date(task.dueDate) < new Date(currentDate));
    }
  
    function getTasksDueToday() {
      const currentDate = new Date().toISOString().split('T')[0];
      return tasks.filter(task => task.dueDate === currentDate);
    }
  
    function getTasksDueLater() {
      const currentDate = new Date().toISOString().split('T')[0];
      return tasks.filter(task => new Date(task.dueDate) > new Date(currentDate));
    }
  
    function getTasksDueDate(dueDate) {
      return tasks.filter(task => task.dueDate === dueDate);
    }
  
    // Other methods...
  
    return {
      tasks,  // Initialize tasks
      add,
      markAsComplete,
      getOverdueTasks,
      getTasksDueToday,
      getTasksDueLater,
      getTasksDueDate,
      // Other methods...
    };
  }
  
  module.exports = createTodoList;
  