import React, { useState, useRef } from 'react'
interface TodoFormProps{
    onAdd(title: string): void
}
export const TodoForm: React.FC<TodoFormProps> = (props) =>{
// const [title, setTitle]=useState<string>('')
const ref = useRef<HTMLInputElement>(null)
// const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
//     setTitle(event.target.value)
// }

const keyPressHandler=(event: React.KeyboardEvent)=>{
    if(event.key==='Enter'){
        props.onAdd(ref.current!.value);
ref.current!.value='';
        // console.log(title)
        // setTitle('')
    }
}
    return(
        <div className='input-field mt2 c'>
            <input 
            // onChange={changeHandler}
            // value={title}
             type='text' id='title' placeholder='Введите название'
            onKeyPress={keyPressHandler}
            ref={ref}
            />
            <label htmlFor='title' className='active px1'>
                Enter the name of delo.
            </label>
        </div>
    )
}