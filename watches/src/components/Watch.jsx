import moment from 'moment';
import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function Watch({watchList, setWatches}) {
  const [degs, setDegs] = useState({hoursDeg: 0, minutesDeg: 0, secondsDeg: 0});
  // console.log(watchList)
  let timeout;
 
  const currentTimeToDeg = () => {
      const date = moment();
      const hoursDeg = (date.hours() % 12 - date.utcOffset() / 60 + 1) * 30;
      const minutesDeg = date.minutes() * 6;
      const secondsDeg = date.seconds() * 6;
      setDegs({...degs, hoursDeg: hoursDeg, minutesDeg: minutesDeg, secondsDeg: secondsDeg}) 
  }

  useEffect(currentTimeToDeg, []);

  useEffect(() => {
    timeout = setTimeout(currentTimeToDeg, 1000);
    return () => clearTimeout(timeout); 
  }, [degs]);


  return (
    <>
    {watchList.map(watch => (
      <div className="clock-group" key={watch.id}>
      <h3>{watch.city}</h3>
      <article className="clock">
        <button className="delete-btn" onClick={() => {
          setWatches(
            // eslint-disable-next-line react/prop-types
            watchList.filter(a => a.id !== watch.id)
          );
        }}>X</button>
        <div className="hours-container">
          <div className="hours" style={{transform: `rotate(${degs.hoursDeg + watch.timezone * 30}deg)`}}></div>
        </div>
        <div className="minutes-container">
          <div className="minutes" style={{transform: `rotate(${degs.minutesDeg}deg)`}}></div>
        </div>
        <div className="seconds-container">
          <div className="seconds" style={{transform: `rotate(${degs.secondsDeg}deg)`}}></div>
        </div>
      </article>
    </div>
    ))}

    
    </>
   
  )
}