import express from "express";
import fetchuser from "../middleware/fetchuser.js"; 
import Notes from "../modles/Notes.js";
import {body , validationResult} from "express-validator";
const router = express.Router();

 //Route 1 : Fetch all notes of the user : GET "api/notes/fetchallnotes" Login required
 router.get('/fetchallnotes',fetchuser, async (req , res)=>{
   try {
      
      const notes = await Notes.find({user: req.user.id})
      res.json(notes);

     } catch (error) {
      console.error(error.message);
      res.status(500).send({error:"Internal server error"});
    }
 })
 
 //Route 2 : Add a new Note using : POST "api/notes/addnote" Login required
 router.post('/addnote',fetchuser ,[
   body('title','Enter a Valid title ').isLength({min:1}),
   body('description','description must have atleast 3 characters').isLength({min:3})
 ], async (req , res)=>{

   try {
      
   const {title , description , tag}= req.body;

   //if there is any error return bad req and print the error message

       const error =validationResult(req);
       if(!error.isEmpty()){
         return res.status(400).json({errors: error.array()});
       }
      
       const note = new Notes({
         title , description , tag , user:req.user.id
       })
       const savedNote = await note.save();

       res.json(savedNote);
      } 
      catch (error) {
      console.error(error.message);
      res.status(500).send({error:"Internal server error"});            
         }
 }) 

 //Route 3 : update a existing Note using : PUT "api/notes/updatenote" Login required
 router.put('/updatenote/:id',fetchuser , async (req , res)=>{
    const{title , description , tag } = req.body;
    try {
    // create a new user
    const newNote={};
    if(title){newNote.title=title};
    if(description){newNote.description=description};
    if(tag){newNote.tag=tag};
    
    newNote.date = Date.now();

    //find the note to be updated and update it 
    let note = await Notes.findById(req.params.id);
    if(!note){return res.status(404).send("not Found")};
    if(note.user.toString()!==req.user.id){return res.status(401).send("not allowed")};
    note = await Notes.findByIdAndUpdate(req.params.id , {$set:newNote},{new:true});
    res.json({note})

    } 
    catch (error) {
      console.error(error.message);
      res.status(500).send({error:"Internal server error"});            
        
    }
 })

  //Route 4 : Delete a existing Note using : DELETE "api/notes/deletenote" Login required
 router.delete('/deletenote/:id',fetchuser , async (req , res)=>{
   
  try {

    //find the note to be deleted and delete it 
    let note = await Notes.findById(req.params.id);

    if(!note)
      {return res.status(404).send("not Found")};

    //Allow deletion if the owner owns this note
    if(note.user.toString()!==req.user.id)
      {return res.status(401).send("not allowed")};

    note = await Notes.findByIdAndDelete(req.params.id);
    res.json({"Success" : "Note has been deleted" , note:note})
    
   }
   catch (error) {
      console.error(error.message);
      res.status(500).send({error:"Internal server error"});            
        
    }
 })



 export default router;
