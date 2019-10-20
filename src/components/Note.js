import React from 'react';

const Note = ({ note }) => {　//{}は分割代入
    return (
        <li>{note.content}</li>
    )
}

export default Note;