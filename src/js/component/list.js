import React, {useState} from "react";

const AllList = () => {
    const [inputValue,setInputValue] = useState("")
    const [list,setList] = useState([])
	return (
		<div className="container">
            <h1>todos</h1>
			<ul>
                <li><input type="text" placeholder="No hay tareas, añadir tareas" onChange={(element)=> setInputValue(element.target.value)} value={inputValue} onKeyDown={(item)=> {if(item.key === "Enter"){
                                setList(list.concat([inputValue]));
                                setInputValue(""); }} ></input></li>
                <li>hola<i class="fa-solid fa-x"></i></li>

            </ul>
            <div>23 task</div>
		</div>
	);
};

export default AllList;