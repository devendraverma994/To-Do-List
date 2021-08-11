import React from 'react';

const ToDoList = (props) =>{
    

    return (
        <div>
            <div className="todo_style">
                <i 
                    className="fa fa-times" 
                    arial-hidden="true" 
                    onClick={() =>{
                    props.onSelect(props.id);
                    }}
                />
                <li>{props.text}
                </li>
            </div>
        </div> 
    );
};

export default ToDoList;
