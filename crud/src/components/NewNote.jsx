import { useState } from 'react'

function NewNote() {
  const url = 'http://localhost:7070/notes';
  const [defaultText, setDefaultText] = useState('Введите заметку');
  const onChange = (event) => {
    setDefaultText(event.target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    formJson.id = 0;
    

    const body = JSON.stringify(formJson)

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });
    setDefaultText('Введите новую заметку');
  };


  return (
    <div className='input-container'>
    <h3>New Notes</h3>
    <div className="card">
      <div className="card-body">
        <form method="post" onSubmit={onSubmit} name="postContent">
          <button type ="submit" className="send-btn">►</button>
          <textarea name="content"  cols="30" rows="10" value={defaultText} onChange={onChange}></textarea>
        </form>
      </div>
    </div>
  </div>
  )
}

export default NewNote;