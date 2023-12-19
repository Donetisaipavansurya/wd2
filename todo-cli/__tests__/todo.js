// __tests__/todo.js

const createTodoList = require('../todo');

describe('Todo List Test Suite', () => {
  let todoInst;

  beforeEach(() => {
    todoInst = createTodoList();

    // Adding tasks with various due date logics
    todoInst.add({
      title: 'New Task',
      completed: false,
      dueDate: new Date().toISOString().split('T')[0],
    });

    todoInst.add({
      title: 'Test Task',
      completed: false,
      dueDate: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    });
  });

  test('new todo item is added', () => {
    const initialTaskCount = todoInst.tasks.length;
    todoInst.add({
      title: 'Another Task',
      completed: false,
      dueDate: new Date().toISOString().split('T')[0],
    });
    expect(todoInst.tasks.length).toBe(initialTaskCount + 1);
  });

  test('Marked a todo as complete', () => {
    const taskIndex = 0;
    todoInst.markAsComplete('New Task');
    expect(todoInst.tasks[taskIndex].completed).toBe(true);
  });

  test('Retrieving of overdue items', () => {
    const overdueItems = todoInst.getOverdueTasks();
    expect(overdueItems.length).toBe(0);
  });

  test('Retrieving of due today items', () => {
    const dueTodayItems = todoInst.getTasksDueToday();
    expect(dueTodayItems.length).toBeGreaterThan(0);
    expect(dueTodayItems.every(task => task.dueDate === new Date().toISOString().split('T')[0])).toBe(true);
  });

  test('Retrieving of due later items', () => {
    const dueLaterItems = todoInst.getTasksDueLater();
    expect(dueLaterItems.length).toBe(1);
    expect(dueLaterItems.every(task => new Date(task.dueDate) > new Date())).toBe(true);
  });
});
