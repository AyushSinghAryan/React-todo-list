import { useState } from "react";
import "./todoItem.css";
function ToDoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);
    // on CLick on save button editeTodo function sets new text 
    const handleEdit = () => {
        editTodo(todo.id, newText);
        setIsEditing(false);
    };

    return (
        <li className="todoItemList">
            <button className="toggleBtn" onClick={() => toggleComplete(todo.id)}>
                {todo.completed ? "❌" : "✔️"}
            </button>
            {isEditing ? (
                <input className="editInput"
                    type="text"
                    value={newText}
                    // here we taking the text from input 
                    onChange={(e) => setNewText(e.target.value)}
                />
            ) : (
                <span
                    style={{ textDecoration: todo.completed ? "line-through" : "none" }}
                >
                    {todo.text}
                </span>
            )}
            <div>
                {isEditing ? (
                    <button className="saveBtn" onClick={handleEdit}>Save</button>
                ) : (
                    <button className="editBtn" onClick={() => setIsEditing(true)}>Edit</button>
                )}
                <button className="deleteBtn" onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
        </li>
    );
}

export default ToDoItem;