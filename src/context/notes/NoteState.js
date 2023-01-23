import NoteContext from "./NoteContext";
import React, { useState } from "react";

const NoteState = (props) => {

    const notesInitial = [
        {
            "_id": "63c3ecc3fdasf7664176d1ff23793",
            "user": "63c3e5c2cfc02df7da9494e8",
            "title": "life at barcelona",
            "description": "i played with messi and my other lengends like me iam so happy about that",
            "tag": "barcelona",
            "date": "2023-01-15T12:08:35.800Z",
            "__v": 0
        },
        {
            "_id": "63c3ecfsdzc37664176d1ff23793",
            "user": "63c3e5c2cfc02df7da9494e8",
            "title": "life at barcelona",
            "description": "i played with messi and my other lengends like me iam so happy about that",
            "tag": "barcelona",
            "date": "2023-01-15T12:08:35.800Z",
            "__v": 0
        },
        {
            "_id": "63c3ecccsd37664176d1ff23793",
            "user": "63c3e5c2cfc02df7da9494e8",
            "title": "life at barcelona",
            "description": "i played with messi and my other lengends like me iam so happy about that",
            "tag": "barcelona",
            "date": "2023-01-15T12:08:35.800Z",
            "__v": 0
        },
        {
            "_id": "63c3ecc37asdf664176d1ff23793",
            "user": "63c3e5c2cfc02df7da9494e8",
            "title": "life at barcelona",
            "description": "i played with messi and my other lengends like me iam so happy about that",
            "tag": "barcelona",
            "date": "2023-01-15T12:08:35.800Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial)


    // Add a Note
    const addNote = (title, description, tag) => {
        // TODO: API Call
        console.log("Adding a new note")
        const note = {
            "_id": "61322f1fea19553781a8ca8d0e08",
            "user": "6131dc5e3e4037cd4734a0664",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
        };
        setNotes(notes.concat(note))
    }

    // Delete a Note
    const deleteNote = (id) => {
        // TODO: API Call
        console.log("deleting note with id" + id)
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)

    }
    // Edit a Note
    const editNote = (id,title,description,tag) => {

    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;