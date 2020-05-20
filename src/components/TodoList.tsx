import React from 'react'
import { IList } from './interfaces'

type TodoListProps={
    todos: IList[]
    onChange(id:number): void
    Remove(id:number):void
}

export const TodoList: React.FC<TodoListProps>=({todos, onChange, Remove})=>{
    const RemoveHandler = (event: React.MouseEvent, id:number)=>{
        event.preventDefault    ()

        Remove(id)
    }
return(
    <ul>
{todos.map(todo => {
    const classes=['todo']
    if(todo.completed){
        classes.push('completed');
    }
    return(
    <li className={classes.join(' ')} key={todo.id} >
            <label>
                <input type='checkbox' checked={todo.completed} onChange={()=>onChange(todo.id)}/>
                <span>{todo.title}</span>
                <i className='material-icons red-text' onClick={event=>RemoveHandler(event, todo.id)}>delete</i>
            </label>
        </li>
        )})}
    </ul>
)
}
