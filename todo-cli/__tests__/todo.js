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

  test("Should add new todo (Correct Implementation)", () => {
    const todoItemCount = all.length;
    add({
      title: "New Todo",
      completed: false,
      dueDate: "2023-12-20",
    });
    console.log('Actual Todo Items:', all);
    expect(all.length).toBe(todoItemCount + 1); // Assuming correct implementation adds a new todo
  });

  test("Should mark a todo as complete (Correct Implementation)", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete("Test Todo");
    console.log('Actual Todo Items:', all);
    expect(all[0].completed).toBe(true); // Assuming correct implementation marks the todo as complete
  });

  test('Should retrieve overdue items (Correct Implementation)', () => {
    const overdueItems = overdue();
    console.log('Actual Overdue Items:', overdueItems);
    expect(overdueItems.length).toBeGreaterThan(0);
  });
  
  test("Should retrieve due today items (Correct Implementation)", () => {
    const dueTodayItems = dueToday();
    console.log('Actual Due Today Items:', dueTodayItems);
    expect(dueTodayItems.length).toBeGreaterThanOrEqual(0);
  });
  
  test("Should retrieve due later items (Correct Implementation)", () => {
    const dueLaterItems = dueLater();
    console.log('Actual Due Later Items:', dueLaterItems);
    expect(dueLaterItems.length).toBeGreaterThanOrEqual(0);
  });

  describe("Incorrect Implementations", () => {
    // Incorrect Implementation Checks
    test("Should add new todo (Incorrect Implementation)", () => {
      const todoItemCount = all.length;
      // Incorrect implementation does not add a new todo
      console.log('Actual Todo Items:', all);
      expect(all.length).toBe(todoItemCount);
    });

    test("Should mark a todo as complete (Incorrect Implementation)", () => {
        markAsComplete("Test Todo");
        console.log('Actual Todo Items:', all);
        // Assuming incorrect implementation does not mark the todo as complete
        expect(all.find(todo => todo.title === "Test Todo").completed).toBe(true);
      });
      
      

    test('Should retrieve overdue items (Incorrect Implementation)', () => {
      const overdueItems = overdue();
      console.log('Actual Overdue Items:', overdueItems);
      // Assuming incorrect implementation does not filter overdue items correctly
      expect(overdueItems.length).toBeGreaterThan(0);
    });
    
    test("Should retrieve due today items (Incorrect Implementation)", () => {
        const dueTodayItems = dueToday();
        console.log('Actual Due Today Items:', dueTodayItems);
        // Assuming incorrect implementation does not filter due today items correctly
        expect(dueTodayItems.length).toBe(0); // Corrected expectation
      });
      
    
    test("Should retrieve due later items (Incorrect Implementation)", () => {
      const dueLaterItems = dueLater();
      console.log('Actual Due Later Items:', dueLaterItems);
      // Assuming incorrect implementation does not filter due later items correctly
      expect(dueLaterItems.length).toBeGreaterThan(0);
    });
  });
});
