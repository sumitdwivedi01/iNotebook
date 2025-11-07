import React, { useContext } from 'react';
import NoteContext from '../context/notes/NoteContext';
import { useParams, Link } from "react-router-dom";
import { DarkContext } from "../context/Theme/DarkTheme";

const ViewNote = () => {
  const { id } = useParams();
  const { notes } = useContext(NoteContext);
  const { theme } = useContext(DarkContext);

  const note = notes.find((n) => n._id === id);

  if (!note) {
    return (
      <div className="container text-center mt-5">
        <h3 className="text-danger">⚠ Note not found!</h3>
        <Link 
          className={`btn ${theme==='dark'?'btn-outline-light':'btn-outline-dark'} mt-3`} 
          to="/"
        >
          ⬅ Back to Notes
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="mb-4">
        <Link className={`btn-view btn  px-4 py-2 rounded-pill `} 
          to="/">⬅ Back to Notes</Link>

      </div>
      <div 
        className="p-4 shadow-lg rounded-4"
        style={{
          borderRadius: "2rem",
          background: theme === 'dark' ? "#001630" : "#ffffffcc",
          color: theme === 'dark' ? "#f8f9fa" : "#212529",
          wordWrap: "break-word",        
          overflowWrap: "break-word",   
        }}
      >
        <span className={`badge ${theme==='dark'?'bg-light text-dark':'bg-dark text-light'} rounded-pill px-3 py-2 `} >{note.tag || "General"}</span>
        <h3 className="fw-bold my-3">{note.title}</h3>
        <p className="fs-6" style={{ lineHeight: "1.7" , whiteSpace: "pre-line"}}>{note.description}</p>
        <div className="d-flex justify-content-between align-items-center mt-3 flex-wrap">
          <small className={`text-${theme==='light'?'dark':'light'}`}>
            🕒 {new Date(note.date).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
          </small>
          
        </div>
      </div>
    </div>
  );
};

export default ViewNote;
