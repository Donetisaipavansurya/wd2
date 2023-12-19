// todo-cli/todo.js
const todoList = () => {
    all = [];
  
    const add = (todoItem) => {
      all.push(todoItem);
      console.log(all)
    };
  
    const markAsComplete = (title) => {
        const foundItem = all.find((item) => item.title === title);
      
        if (foundItem) {
          foundItem.completed = true;
        } else {
          console.error(`Todo item with title ${title} not found.`);
        }
      };
      
  
      const overdue = () => {
        const today = new Date().toISOString().split("T")[0];
        return all.filter((todo) => {
          const todoDueDate = new Date(todo.dueDate).toISOString().split("T")[0];
          return !todo.completed && todoDueDate < today;
        });
      };
      
  
      const dueToday = () => {
        const today = new Date().toISOString().split("T")[0];
        return all.filter((item) => {
          const itemDueDate = new Date(item.dueDate).toISOString().split("T")[0];
          return itemDueDate === today;
        });
      };
      
      const dueLater = () => {
        const today = new Date().toISOString().split("T")[0];
        return all.filter((item) => {
          const itemDueDate = new Date(item.dueDate).toISOString().split("T")[0];
          return itemDueDate > today;
        });
      };
      
    
  
    const toDisplayableList = (list) => {
      let output = "";
      list.forEach((todo) => {
        output += `[${todo.completed ? 'x' : ' '}] ${todo.title}`;
        if (todo.dueDate) {
          output += ` ${todo.dueDate}`;
        }
        output += '\n';
      });
      return output;
    };
  
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList,
    };
  };
  
  // ####################################### #
  // DO NOT CHANGE ANYTHING BELOW THIS LINE. #
  // ####################################### #
  
  module.exports = todoList;