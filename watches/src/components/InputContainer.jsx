import { useState } from 'react';
import Watch from './Watch';


export default function InputContainer() {
  const [watches, setWatches] = useState([]);
  const [indexId, setIndexId] = useState(0);

  const onSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    setIndexId(indexId + 1)
    formJson.id = indexId;
    setWatches([...watches, formJson]);
  }

  // console.log(watches);

  return (
    <>
    <form method="post" onSubmit={onSubmit} className="input-container">
      <div className="input-group">
        <label htmlFor="city">Название:</label>
        <input type="text" id="city" name="city" placeholder="Введите название города"/>
      </div>
      <div className="input-group">
        <label htmlFor="timezone">Временная зона:</label>
        <input type="number" id="timezone" name="timezone" placeholder="Cмещение в часах" />
      </div>        
      <button type="onSubmit" className="add-btn">Добавить</button>
    </form>
    <div className="clock-container">
      {watches.length !== 0 ? <Watch watchList={watches} setWatches={setWatches}/> : <></>}
    </div>
    </>
  )
}