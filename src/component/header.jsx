import {useState, useEffect} from 'react';


function Header(props){
    //passing props which we are getting from app
    const [todoValue, setTodoValue] = useState('');
    //using useEffect react hook to handle functionality if user wants to edit the existing item
    useEffect(() => { 
        if (props.editingTodo){ 
                setTodoValue(props.editingTodo.item); 
            } 
        else{
            setTodoValue('')
        }}, [props.editingTodo]);
    function handleChange(e){
     setTodoValue(e.target.value);
    }
    //getting user's input is onAddTodo as an argument 
    function handleClick(){
        if(todoValue !== ''){
            props.onAddTodo(todoValue.trim())
            setTodoValue('');
        }
        else{
            alert('please enter valid input')
        }
    }
    return (
        
        <div className='header'>
        <h1>Todo App</h1>
        <h3>Manage your daily tasks here!!</h3>
        <div className="userInput">
            <input type="text" placeholder="Enter your todo item here" onChange={handleChange} value={todoValue}/>
            <button onClick={handleClick} className='add'>{props.editingTodo ? 'Save' : 'Add'}</button>
        </div>
        
        </div>
    )
}

export default Header;