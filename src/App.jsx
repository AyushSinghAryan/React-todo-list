import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/TodoList";
import "./App.css"
function App() {
  const [todos, setTodos] = useState([]);
  console.log("todos", todos);
  // here take a task means a text ,if text is present on add button click, then we add with id as data ,text , ...todo means here previous todo are stored in array
  const addTodo = (task) => {
    if (task.trim()) {
      setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
    }
  };
  // toggleComplete in this we make completed or uncompleted todo by id match , if id match then toggle completed 
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  // deleteTodo remove todo by id match
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  // editTodo here we use id and text to update , if id matched then update the newText
  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <div>
      <Header />
      {/* passing as props so that child component todoList use these properties  */}
      <ToDoList
        todos={todos}
        addTodo={addTodo}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
}
export default App