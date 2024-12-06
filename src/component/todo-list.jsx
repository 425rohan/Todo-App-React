import TodoItem from "./todo-item";


function TodoList(props){
    //passing props which we are getting from app
    return(
    <div className="todoList">
    {props.todos.map((todo) => {
        return <TodoItem  key={todo.id} data={todo} toComplete={props.onComplete} toDelete ={props.onDelete} toEdit= {props.onEdit}/>
    })}
    </div>
    )
}

export default TodoList;