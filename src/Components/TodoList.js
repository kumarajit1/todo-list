import React from "react";

const TodoList = (props) => {

    
    return (
        <>
            <div>
            <i className="bi bi-x-circle-fill" onClick={()=>{
                props.onSelect(props.id)
            }}></i>
                <li>{props.text}</li>
            </div>
        </>
    )
}
export default TodoList;