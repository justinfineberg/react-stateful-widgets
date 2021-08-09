import React, { useState } from 'react';
import { render } from 'react-dom/cjs/react-dom.production.min';


let list = ['Do Homework', 'Take out trash']
function ToDoList(props){

    const [itemList, setItemList] = useState(list);
    const [inputValue, setInputValue] = useState('');
    const [checkedOff, setCheckedOff] = useState(false);

    const changeInput = evt =>{
        setInputValue(evt.target.value)
    }

    const submitFunction = evt =>{
        console.log(inputValue)
        list.push(inputValue);
       setItemList(list)
       setInputValue('')
    }

    const spanStyle = {
        color: 'red',
        display: 'inline-block'
    }

    const listStyle = {
        listStyleImage: "linear-gradient(to left bottom, red, blue)",
        textDecoration: "none"
    }

    const checkedFunction = evt =>{
         
    }

    return (
        <div className="container">
            <h2> To Do List </h2>
            <ul>
                {
                itemList.map(item=>{
                    return (
                    <div>
                        <li onClick={e=>{setCheckedOff(true)}} style={listStyle} key={item}>{item}</li> 
                        <span style={spanStyle}>X</span>
                     </div>
                    )
                })
                }
            </ul>
            <input type="text" onChange={changeInput} value={inputValue} />
            <button onClick={submitFunction}> Submit </button>
        </div>
    )
}

export default ToDoList;