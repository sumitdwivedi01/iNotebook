import React, { useContext, useEffect, useRef, useState } from 'react';
import NoteContext from '../context/notes/NoteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import { DarkContext } from "../context/Theme/DarkTheme";
import {useNavigate} from 'react-router-dom';

function Notes({showAlert}) {
    const {theme} = useContext(DarkContext);
    const context = useContext(NoteContext);
    const navigate = useNavigate()
    const { notes, getNotes , editNote ,errorMsg } = context;
    const [note, setNote] = useState({id:"", title: "", description: "", tag: "" });
    useEffect(() => {
        if(localStorage.getItem('token')){
            getNotes();
        }
        else{
            navigate("/login");
        }
        //eslint-disable-next-line
    }, [])

    useEffect(() => {
    if (errorMsg.error) {
        showAlert(errorMsg.msg, "danger");
    }
    //eslint-disable-next-line
    }, [errorMsg]);

    const [isDark, setIsDark] = useState(false);
    useEffect(() => {
      setIsDark(theme==='dark'?true:false)
    }, [theme])
    

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, title: currentNote.title, description: currentNote.description, tag: currentNote.tag })
    }
    const ref = useRef(null);
    const refClose = useRef(null);


    const handleChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    const handleClick = (e) => {
        e.preventDefault();
        if(errorMsg.error===""){

            editNote(note.id , note.title , note.description, note.tag);
            refClose.current.click();
            showAlert("Note Updated Successfully","success");
            document.body.classList.remove("lock-scroll");
        }
        else{
            showAlert(errorMsg.msg);
        }
        
    }

    return (
        <>
            <AddNote showAlert={showAlert}/>
            <button ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" tabIndex="-1" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content"  style={{background:isDark
                ?'#000B18'
                :"linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%)",
                color:isDark?'white':'#000B18'
            }}>
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label"> <small> <b>Tag</b></small></label>
                                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label"><h3>Title</h3></label>
                                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={handleChange} />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label"><h5>Description</h5></label>
                                    <textarea type="text" className="form-control" id="description" name="description" value={note.description} onChange={handleChange} style={{ "height": "100px" }}/>
                                </div>


                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.description.length<5 && note.title.length<3} type="button" onClick={handleClick} className="btn btn-primary">update note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3 rounded-3 p-3" style={{
        backroundColor:`${theme==='dark'?'#0F172A':'white'}`,
        border:`2px solid ${theme==='dark'?'white':'#7d9be1ff'}`
        

      }}>
                <h2>All Your Notes</h2>
                <div className="container px-5 py-1">
                    <h5 className="text-secondary">
                    {notes.length===0 && 'Add Your First Note to display here!'}
                    </h5>
                </div>
                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note} updateNote={updateNote} showAlert={showAlert} />
                })}
            </div>

        </>
    )
}

export default Notes


