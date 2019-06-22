import { SET_MODEL_SELECTOR, ADD_CAR, SELECT_CAR } from '../actions/modelDetails'

export default (state = [], action = {}) => {
  switch(action.type) {
    case SET_MODEL_SELECTOR:
        return { 
            ...state,
            names: action.payload.carNames,
            years: action.payload.carYears,
            selected: action.payload.carNames[0],
            modelsAdded: []
        }
    case SELECT_CAR:
        return {
            ...state,
            selected: action.payload
        }
    case ADD_CAR:
        return {
            ...state,
            modelsAdded:state.modelsAdded.concat(action.payload)
        }
    default:
        return state
  }
}