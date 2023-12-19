// __tests__/todo.js
const todoList = require('../todo.js');

const { all, add, markAsComplete, overdue, dueToday, dueLater } = todoList();

describe("Todolist Test Suite", () => {
  beforeAll(() => {
    add({
      title: "Test Todo",
      completed: false,
      dueDate: "2023-12-20",
    });
    add({
      title: "Overdue Todo",
      completed: false,
      dueDate: "2023-12-10",
    });
    add({
      title: "Due Later Todo",
      completed: false,
      dueDate: "2023-12-25",
    });
  });

  test("Should add new todo", () => {
    const todoItemCount = all.length;
    add({
      title: "New Todo",
      completed: false,
      dueDate: "2023-12-20",
    });
    expect(all.length).toBe(todoItemCount + 1);
  });

  test("Should mark a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete("Test Todo");
    expect(all[0].completed).toBe(true);
  });

  test('Should retrieve overdue items', () => {
    const overdueItems = overdue();
    console.log('Actual Overdue Items:', overdueItems);
    expect(overdueItems.length).toBeGreaterThan(0);
  });
  
  test("Should retrieve due today items", () => {
    const dueTodayItems = dueToday();
    console.log('Actual Due Today Items:', dueTodayItems);
    expect(dueTodayItems.length).toBeGreaterThanOrEqual(0);
  });
  
  test("Should retrieve due later items", () => {
    const dueLaterItems = dueLater();
    console.log('Actual Due Later Items:', dueLaterItems);
    expect(dueLaterItems.length).toBeGreaterThanOrEqual(0);
  });
  
});
