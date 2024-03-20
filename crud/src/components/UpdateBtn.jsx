import { useState, useEffect } from 'react'
import Card from './Card';
import NewNote from './NewNote'

function UpdateBtn() {
  const url = 'http://localhost:7070/notes';
  const noteList = [];
  const [notes, setNotes] = useState(noteList);
  
  useEffect(() => {
      fetch(url, {
      method: 'GET',
      headers: {
      'Content-Type': 'application/json',
    },
    }).then(response => response.json())
    .then(data => setNotes(data));
  },[])


  const handleClick = () => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => response.json())

      .then(data => setNotes(data));
  };

  return (
    <>
    <div className="title">
      <h2>Notes</h2>
      <button className='update-btn' onClick={handleClick}>↔</button>
    </div>
    <div className='container'>
      {notes ? notes.map(note => <Card key={note.id} note={note} setNotes={setNotes}/>) : <></>}
    </div>
    <NewNote setNotes={setNotes} />
    </>
  )
}
export default UpdateBtn;