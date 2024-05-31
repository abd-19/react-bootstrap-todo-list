import React, {useState} from 'react';

function Todo() {

    const [ErrorMessage, setErrorMessage] = useState('');
    const [tasks, settasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addtask = (task) => {
        if(inputValue === ''){
            setErrorMessage('Please Enter Task');
            return;
        }
        else{
        const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
        const newtask = {id, task: inputValue, checked: false};
        const newtasks = [...tasks, newtask];
        settasks(newtasks);
        setInputValue('');
        setErrorMessage('');
        }
    }
    const deleteCheckedTasks = () => {
        const newTasks = tasks.filter((task) => !task.checked);
        settasks(newTasks);
    };

    const handelinput = (e) => {
        setInputValue(e.target.value);
        setErrorMessage('');
    }
    const toggleTaskChecked = (id) => {
        const newTasks = tasks.map((task) => 
            task.id === id ? { ...task, checked: !task.checked } : task
        );
        settasks(newTasks);
    };

    return (
        <>
        {ErrorMessage && ( 
                <div className="alert alert-danger" role="alert">
                    {ErrorMessage}
                </div>
        )}
        <div className="containerA ">
        <h1 >Todo List</h1>
        <div className="input-group mb-3">
        <input type="text" value={inputValue} onChange={handelinput} className="form-control" placeholder="Enter Task" />
        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={addtask}>Add Task</button>
        <button type="button" className="btn btn-danger" onClick={deleteCheckedTasks}>Delete</button>
        </div>
            <table className="table align-items-center " >
                <thead className="table-dark">
                    <tr>
                    <th scope="col " >id</th>
                    <th scope="col">task </th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map((task) => (
                            <tr key={task.id}>
                                <th >{task.id}</th>
                                <td>{
                                    task.checked ? <del>{task.task}</del> : task.task
                                    }</td>
                                <td>
                                    <input 
                                    
                                        type="checkbox" 
                                        className="btn-check"
                                        id={`btn-check-${task.id}-outlined`}
                                        checked={task.checked}
                                        onChange={() => toggleTaskChecked(task.id)}
                                    />
                                    <label className="btn btn-outline-secondary" for={`btn-check-${task.id}-outlined`}>Checked</label>
                                </td>
                            </tr>
                        ))
                    }  
                </tbody>
            </table>
        </div>
        
        </>
    );
}



export default Todo;