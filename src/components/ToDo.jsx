import axios from 'axios';
import React from 'react'
import {} from 'react-icons/ai'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { baseURL } from '../utils/constant';
const ToDo = ({ text, id, setUpdateUI, setShowPopup, setPopupContent }) => {
const deleteToDo = ()=>{
    axios.delete(`${baseURL}/delete/${id}`).then((res)=>{
        console.log(res.data)
        setUpdateUI((previousState)=> !previousState)
    })
}

const updateToDo = () => {
    setPopupContent({ text, id });
    setShowPopup(true);
  };

  return (
    <div className='toDo'>{text}
    <div className='icons'>
    <MdEdit className='icon' onClick={updateToDo} />
    <MdDelete className='icon' onClick={deleteToDo} />
    </div>
    </div>
  )
}

export default ToDo