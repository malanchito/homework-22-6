import * as React from 'react'


export default function ModelDetails (props) {
  
    return (
      <div className="choices">
        <ul>
          {props.modelsToShow.map(car => 
  <li key={car}>Name: {car.name} Manufacturer: {car.manufacturer} Year: {car.year} Origin: {car.origin}</li>
)}      </ul>
        <form onSubmit={props.addCar}>
        <label>
          <select value={props.selected} onChange={props.select}>
              {props.choices.map(model=><option key={model} value={model}>{model}</option>)}
          </select>
        </label>
        <input type="submit" value="Add" />
      </form>
      </div>
    )
    
  }