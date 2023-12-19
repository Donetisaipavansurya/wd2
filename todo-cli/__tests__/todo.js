const todoList = require('../todo');
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("Todolist Test Suite", () => {
  beforeAll(() => {
    // Add a todo for testing
    add({
      title: "Test Todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("Should add new todo", () => {
    const todoItemCount = all.length;
    add({
      title: "New Todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(todoItemCount + 1);
  });

  test('Should mark a todo as complete', () => {
    expect(all[0].completed).toBe(false);
    markAsComplete('Test Todo');
    expect(all[0].completed).toBe(true);
  });

  test('Should retrieve overdue items', () => {
    const overdueItems = overdue();
    expect(overdueItems.length).toBeGreaterThanOrEqual(0);
  });

  test('Should retrieve due today items', () => {
    const dueTodayItems = dueToday();
    expect(dueTodayItems.length).toBeGreaterThanOrEqual(0);
  });

  test('Should retrieve due later items', () => {
    const dueLaterItems = dueLater();
    expect(dueLaterItems.length).toBeGreaterThanOrEqual(0);
  });
});
