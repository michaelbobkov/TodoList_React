import { useState } from "react";

function AddTodo ({addTodo}){
    const [content, setContent] = useState('')
    const handleChange = (e) => {
        setContent(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // call function to add a todo
        addTodo(content);
        setContent('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label>Add a new todo:</label>
            <input type="text" onChange={handleChange} value={content} />
            </form>
        </div>
    )
}
  
  
  export default AddTodo