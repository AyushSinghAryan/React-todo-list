import ToDoItem from "./ToDoItem";
import { useState } from "react";
import "./todoList.css"

function ToDoList({ todos, addTodo, toggleComplete, deleteTodo, editTodo }) {
    // here we destructring the properties which comes from prop
    const [task, setTask] = useState("");
    // we are using form for addingTodo , and clear input area after submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() === "") return;

        addTodo(task);
        setTask("");
    };

    return (
        <div className="contanier">
            <div className="innerContainer">

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="Add a new task"
                    />
                    <button className="submitBtn" type="submit">Add</button>
                </form>
            </div>
            {/* if todo length greater then 0 then add the todo or pass todo TodoItem component to render  */}
            {todos.length > 0 && (
                <div className="ulContainer">
                    <ul>
                        {todos.map((todo) => (
                            <ToDoItem
                                key={todo.id}
                                todo={todo}
                                toggleComplete={toggleComplete}
                                deleteTodo={deleteTodo}
                                editTodo={editTodo}
                            />
                        ))}
                    </ul>
                </div>
            )}

        </div>
    );
}

export default ToDoList;