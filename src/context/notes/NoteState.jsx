
import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState =({children})=>{
    const host ="http://localhost:5000";
        const InitialNotes =[]
        const [notes , setNotes] = useState(InitialNotes);
        const [errorMsg, setErrorMsg] = useState({
            error:"",
            msg:""
        });
        const handleError = (error, msg) => {
        setErrorMsg({
            error: error.message || "Unknown Error",
            msg
        });
        };

        //Get All Notes
         const getNotes=async()=>{
            //API Call
            try {
                
            const response = await fetch(`${host}/api/notes/fetchallnotes` ,{
                method:'GET',
                headers:{
                    "Content-Type":"application/json",
                    "auth-token":localStorage.getItem('token'),
                }
            });
            const json = await response.json();
            setNotes(json);
            } catch (error) {
                handleError(error , 'Failed to Fetch All Notes');
                console.log(error);
            }
        }
        //Add a note
        const addNote=async(title , description , tag)=>{
            //API Call
            try {
            const response = await fetch(`${host}/api/notes/addnote` ,{
                method:'POST',
                headers:{
                    "Content-Type":"application/json",
                    "auth-token":localStorage.getItem('token'),
                },
                body:JSON.stringify({title , description , tag})
            });
            const note = await response.json();
            setNotes(notes.concat(note));
            console.log(note);
             } catch (error) {
                handleError(error , 'Failed to Add a note')
                console.log(error,"failed");
            }
        }

        //Delete a note
        const deleteNote= async (id)=>{
            //ToDo: API call 
            try {
            //eslint-disable-next-line
            const response = await fetch(`${host}/api/notes/deletenote/${id}` ,{
                method:'DELETE',
                headers:{
                    "Content-Type":"application/json",
                    "auth-token":localStorage.getItem('token'),
                }
            });
            const newNotes = notes.filter((note)=>{return note._id !== id});
            setNotes(newNotes);
            } catch (error) {
                handleError(error , 'Failed to Delete a note')
            }

        }

        //Edit a note
        const editNote=async (id , title , description , tag)=>{
            //API Call
            try {
            const response = await fetch(`${host}/api/notes/updatenote/${id}` ,{
                method:'PUT',
                headers:{
                    "Content-Type":"application/json",
                    "auth-token":localStorage.getItem('token'),
                },
                body:JSON.stringify({title , description , tag})
            });
            //eslint-disable-next-line
            const json = response.json();
            let newNotes =JSON.parse(JSON.stringify(notes));
            //logic to edit in client
            for (let index = 0; index < newNotes.length; index++) {
                let element = newNotes[index];
                if(element._id===id){
                    newNotes[index].title=title;
                    newNotes[index].description=description;
                    newNotes[index].tag=tag;
                    break;
                }
            }
            setNotes(newNotes);
            } catch (error) {
                handleError(error , 'Failed to Edit a note')
            }
        }

        //ToDo: View full Note (By YourSelf)

    return <NoteContext.Provider value={{notes ,addNote , deleteNote,editNote , getNotes ,errorMsg}}>
        {children}
        
    </NoteContext.Provider>
}

export default NoteState;