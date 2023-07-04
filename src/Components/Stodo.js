import React from 'react';
import { useState } from 'react';

const Stodo=()=>{

    const[item, setItem]=useState("");
    const[total, setTotal]=useState([]);


    const handleChange=(e)=>{
        setItem(e.target.value);
    }
    const handleClick=(e)=>{
        setTotal((oldTotal)=>{
            return [...oldTotal, item];
        })
        setItem("");
    }
    const handleDelete=(id)=>{
        console.log("Hi");
        setTotal((oldTotal)=>{
            return oldTotal.filter((arrItem,index)=>{
                return index!==id;
            })
        })
    }


    return(
        <div>
            <h2>Todo List--</h2>
            <input type='text' onChange={handleChange} value={item} />
            <button type='text' onClick={handleClick}>Submit</button>

            <hr></hr>
            <ol>
                {
                    total.map((itemv, index)=>
                    <li key={index} id={index}>{itemv}<span onClick={()=>handleDelete(index)}>-</span></li>
                    )
                }
            </ol>
        </div>
    )
}
export default Stodo;


