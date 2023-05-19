import React, {useState} from "react";

const AllList = () => {
    const [inputValue,setInputValue] = useState("")
    const [list,setList] = useState([])
    
    const removeListItem = (index) => {
        setList((prevList) => {
          const newList = prevList.filter((_, i) => i !== index);
          return newList;
        });
      };


    const liList = list.map((element, i) => {
        return <li key={i}>{element}<i className="fa-solid fa-x position-absolute end-0 mx-3" onClick={() => removeListItem(i)}></i></li>
})
 

	return (
		<div className="container">
            <h1>todos</h1>
			<ul className="position-relative">
                <li><input type="text" placeholder="No hay tareas, añadir tareas" onChange={(element)=> setInputValue(element.target.value)} value={inputValue} onKeyDown={(item)=> {if(item.key === "Enter"){
                                setList(list.concat([inputValue]));
                                setInputValue("");}}}></input></li>
                <li>{liList}</li>
            </ul>
            <div> {list.length} task</div>
		</div>
	);
};

export default AllList;