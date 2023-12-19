const todoList = require('../todo');
const  {all, markAsComplete, add} = todoList();
describe("Todolist Test Suite", () => {
    beforeAll(() => {
        add(
            {
                title: "Todo todo",
                completed: false,
                dueDate:  new Date().toLocaleDateString("en-CA")
            }
        );     
    })
    test("Should add new todo", () => {
        const todoItemCount = all.length;
        add(
            {
                title: "Todo todo",
                completed: false,
                dueDate:  new Date().toLocaleDateString("en-CA")
            }
        );
        expect(all.length).toBe(todoItemCount +1);
    });

    test('Should mark a todo as complete', () => {
        // Your setup code here
        expect(all[0].completed).toBe(false);
        markAsComplete('Todo todo'); // Use the correct title here
        expect(all[0].completed).toBe(true);
      });
      
})