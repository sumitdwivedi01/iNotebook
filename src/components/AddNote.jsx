import React, { useContext, useState } from 'react';
import NoteContext from '../context/notes/NoteContext';
import { DarkContext } from "../context/Theme/DarkTheme";
const AddNote = ({showAlert}) => {
  const {theme} = useContext(DarkContext);
  const context = useContext(NoteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "default" });
  const handleSubmitClick = () => {
    addNote(note.title, note.description, note.tag);
    document.getElementById("tag").value ="";
    document.getElementById("title").value ="";
    document.getElementById("description").value ="";
    showAlert("A New Note Added Successfully","success");
  }
  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  const [FocusedField, setFocusedField] = useState("");
  const handleFocus =(field)=>{
    setFocusedField(field);
  }
  return (
    <>
      <div className={`container my-3} text-${theme==='dark'?'light':'dark'} p-3 rounded-3`} 
      style={{
        backroundColor:`${theme==='dark'?'#0F172A':'white'}`,
        border:`2px solid ${theme==='dark'?'white':'#7d9be1ff'}`

      }}>
        <h2>Add a Note</h2>
        <form className={`my-3 text-${theme==='dark'?'light':'dark'}`}>

          <div className="mb-3">
            <label htmlFor="tag" className={`form-label  ${FocusedField==='tag'?'text-primary':''}`}  >Tag</label>
            <input type="text" className="form-control" id="tag" name="tag" onChange={handleChange} onFocus={()=>{handleFocus("tag")}} onBlur={()=>{setFocusedField("")}} placeholder="Enter Your Tag" />
          </div>

          <div className="mb-3">
            <label htmlFor="title" className={`form-label ${FocusedField==='title'?'text-primary':''}`}>Title</label>
            <input type="text" className={`form-control ${FocusedField==='title'?'text-primary':''}`} id="title" name="title" aria-describedby="emailHelp" onChange={handleChange} onFocus={()=>{handleFocus("title")}} onBlur={()=>{setFocusedField("")}} placeholder="Enter Your Title"/>
          </div>

          <div className="mb-3">
            <label htmlFor="description" className={`form-label ${FocusedField==='description'?'text-primary':''}`}>Description</label>
            <textarea type="text" className="form-control" id="description" name="description" onChange={handleChange} onFocus={()=>{handleFocus("description")}} onBlur={()=>{setFocusedField("")}}  placeholder="Enter Your Description"/>
          </div>

          <button disabled={note.description.length<5 || note.title.length<3} type="button" className="btn btn-primary" onClick={handleSubmitClick}>Add Note</button>
        </form>
      </div>
    </>
  )
}

export default AddNote
