import React, { useState } from 'react'
import axios from 'axios'; 

export const Piton: React.FC = () =>{
const [data, setData]=useState<string>();
function callAxios (){
  //debugger;
    axios.get('https://localhost:44321/api/FilePiton/',  
  )  
    .then((response) => { 
      //debugger; 
      console.log(response.data)
     setData(response.data) 
    })  
    console.log("response.data")
   
}
    return(
      <div>
        <div>
        <button type="button" onClick={()=> callAxios()}>Рассчитать файл питон</button>
        </div>
<br/>
<p>Результат расчета питоновского файла: {data}</p>
<br/>
<br/>
{/* <div>
<button type="button" onClick={()=> callAxios()}>Рассчитать файл питон</button>
        </div>
<br/>
<h3>Результат расчета питоновского файла: {data}</h3> */}
        </div>
    )
}