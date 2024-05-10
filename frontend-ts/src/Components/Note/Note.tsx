import React from "react"
import "./Note.css"

export interface NoteType {
    id: number;
    title: string;
    content: string;
    created_at: string;
}

interface NoteProps {
    note: NoteType;
    onDelete: (id: number) => void;
}

const Note: React.FC<NoteProps> = ({ note, onDelete }) => {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");

    // function Note({note, onDelete}) {
    //     const formattedDate = new Date(note.created_at).toLocaleDateString("en-US")

    return (
        <div className="note-container">
            <p className="note-title">{note.title}</p>
            <p className="note-content">{note.content}</p>
            <p className="note-date">{formattedDate}</p>
            <button className="delete-button" onClick={() => onDelete(note.id)}>
                Delete
            </button>
        </div>
    );
}

export default Note