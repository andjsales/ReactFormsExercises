import React, { useState } from 'react';

function NewTodoForm({ addTodo }) {
    const [task, setTask] = useState('');

    const handleChange = evt => {
        setTask(evt.target.value);
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        addTodo({ task, id: Math.random().toString() });
        setTask('');
    };

    return (
        <form onSubmit={ handleSubmit }>
            <label htmlFor="task">Task:</label>
            <input
                id="task"
                name="task"
                value={ task }
                onChange={ handleChange }
            />
            <button>Add Todo</button>
        </form>
    );
}

export default NewTodoForm;
