
import { connect, model } from 'mongoose';

connect("mongodb://localhost:27017/tasks");
const tasksSchema = {
    title: String,
    body: Boolean
};
const Task = model("Task", tasksSchema);


function addNotes(title, body) {
    
    const task= new Task({
        title: title,
        body: body
    });
    task.save();
}




function removeNote(title){
     Task.deleteOne({ title: title });
}

function listNotes(){
    const arr = Task.find({ body: false });
        for (var i = 0; i < arr.size(); i++) {
            Task.findOneAndUpdate({ body: false }, { body: true });
        }
}


// -----------------------------------Read Notes------------------------------------------------

function readNotes(){
    const arr =  Task.find({ body: false });
        for (var i = 0; i < arr.size(); i++) {
            console.log(arr[i]);
        }
}

export const addNotes = addNotes;
export const removeNote = removeNote;
export const listNotes = listNotes;
export const readNotes = readNotes;