
  export function setModelSelector(data) {
    const carNames=data.map(model=>model.name)
    const carYears=data.map(model=>model.year)
    return {
      type: 'SET_MODEL_SELECTOR',
      payload: {carNames:carNames,
        carYears:carYears,
      }
    }
  }
  
  export function selectCar(car){
    return {
      type: 'SELECT_CAR',
      payload: car
    }
  }
  
  export function addCar(car,data) {
    const selectedCar=data.filter(model=>model.name===car)
    return {
        type: 'ADD_CAR',
        payload: selectedCar[0]
      }
  }
  
  
  export const SET_MODEL_SELECTOR = 'SET_MODEL_SELECTOR'
  export const ADD_CAR = 'ADD_CAR'
  export const SELECT_CAR = 'SELECT_CAR'