function TodoItem(props){
    // passing props, which we are getting from todo-list
    return(
        <div className={props.data.completed ? 'green todoItem': 'todoItem'} data-id = {props.data.id}>
            <h2>{props.data.item}</h2>
            <div className="todoButtons">
            <button onClick={ () => props.toComplete(props.data.id)} className="comp">{props.data.completed ? 'Not completed': 'Completed'}</button>
            <button onClick={() => props.toDelete(props.data.id)} className="delete">Delete</button>
            <button onClick={() => props.toEdit(props.data.id)} className="edit">Edit</button>
            </div>  
        </div>
    )
}
export default TodoItem;