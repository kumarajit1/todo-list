import React, { useState } from 'react';
import './TodoComponent.css';
import TodoList from './TodoList';

export default function Todo() {
    const[item, setItem]=useState("");
    const[total, setTotal]=useState([]);


    function handleChange(e){
        setItem(e.target.value);
    }
    const handleClick=()=>{
        setTotal((oldTotal)=>{
            return [...oldTotal, item];
        })
        setItem("");
    }
    const handleDelete=(id)=>{
        console.log("Clicked");
        setTotal((oldTotal)=>{
            return oldTotal.filter((arrItem,index)=>{
                return index!==id;
            })
        })
    }

    return (
        <>
            <div className='main'>
                <div className='section'>
                    <h2>Todo List</h2>
                    <input type='text' placeholder='Add items' value={item} onChange={handleChange} />
                    <button onClick={handleClick}> + </button>

                    <ol>
                        {/* <li>{item}</li> */}
                        {
                            total.map((itemv,index)=>{
                                return <TodoList 
                                text={itemv} 
                                key={index}
                                id={index}
                                onSelect={handleDelete}
                                />
                            })
                        }
                    </ol>
                </div>
            </div>
        </>
    )
}