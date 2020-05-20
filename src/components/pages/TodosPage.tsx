import React, { useState, useEffect } from 'react'
import {IList} from '../interfaces'
import { TodoForm } from '../TodoForm';
import { TodoList } from '../TodoList';

export const TodosPage: React.FC = () =>{
    const [todos, setTodos]=useState<IList[]>([]);
  const [value, setValue]=useState<string>('');

  useEffect(()=>{
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as IList[]
setTodos(saved)
  },[])

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
      }, [todos])

    const addHandler = (title: string)=>{
        const newTodo={
          title: title,
        id: Date.now(),
        completed: false
        }
        //setTodos([newTodo, ...todos])
        setTodos(prev=>[newTodo, ...todos])
        
        }
        
        const changeCompleted=(id:number)=>{
          setTodos(todos.map(todo=>{
            if(todo.id===id){
              todo.completed = !todo.completed
            }
            return todo;
          }))
        }
        const removeTodo = (id: number) : void=>{
          const shouldRemove = window.confirm('Вы уверены, что хотите удалить дело?')
          if(shouldRemove){
            setTodos(prev=> prev.filter(todo=>todo.id!==id))  //prev возв к коллбэку, уверенность что исп предыдущий state
          }
        }
    return(
        <React.Fragment>
    
        <TodoForm onAdd={addHandler}/>
        {todos.length ? <TodoList todos={todos} onChange={changeCompleted} Remove={removeTodo}/> : <p>No todos!</p>}
            </React.Fragment>)
}