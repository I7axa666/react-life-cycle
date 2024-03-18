function Card(props) {
  const {note, setNotes } = props;
  const url = `http://localhost:7070/notes/`

  const onClick = () => {
    
    fetch(url + note.id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    fetch(url, {
      method: 'GET',
      headers: {
      'Content-Type': 'application/json',
    },
    }).then(response => response.json())
    .then(data => setNotes(data));

  }
  
  return (
    <div className="card" id={note.id}>
      <div className="card-body">
        <button className="delete-btn" 
        onClick={onClick}>X</button>
        <textarea name="note"  cols="30" rows="10" defaultValue={note.content}></textarea>
      </div>
    </div>
  )
}


export default Card;