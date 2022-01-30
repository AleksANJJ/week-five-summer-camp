import './App.css';
import { data } from './data';
import { useState } from 'react';

function App() {
  const [summerCamp, setSummerCamp] = useState(data);

const removeBtn = (id) => {
  let newSummerList = summerCamp.filter(sumCamp => sumCamp.id !== id);
  setSummerCamp(newSummerList);
  }

  

  return(
    <div className='heading'>
      <div className='container'>
        <h1>USA {summerCamp.length} Summer Camp 2022</h1>
      </div>
      {summerCamp.map((summer => {
        const {id, image, country, stat, campName, address, site, description, price} = summer;
        
        return (
          <div key ={id}>
            <div className='container'>
              <h2>{id} - {campName}</h2>
            </div>
            <div className='container'>
            <p>{country}, {stat}, {address}</p>
            </div>
            <div className='container'>
              <img src={image} width="400px" alt="foto"/>
            </div>
            <div className='container'>
              <p>{description}</p>
            </div>
            <div className='container'>
              <p>{site}</p>
            </div>
            <div className='container'>
              <h3>Price: {price}</h3>
            </div>
            <div className='btn'>
              <button onClick={() => removeBtn(id)} className='red'>Remove</button>
              <button className='blue'>Booking</button>
            </div>
          </div> )
        }))}
      <div className='container'>
        <button onClick={() => setSummerCamp([])} className='red'>Delete All</button>
      </div>
     
    </div>
    
  )
}

export default App;
