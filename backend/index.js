import connectToMongo from "./db.js";
import express from "express";
import authRouter from "./Routes/auth.js" //import auth from auth.js to use here
import notesRouter from "./Routes/notes.js"
import cors from 'cors';
 
connectToMongo();
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json())


app.use('/api/auth',authRouter);
app.use('/api/notes', notesRouter);

app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port}`)
});