import * as React from 'react';
import ModelDetails from './ModelDetails';
import { connect } from 'react-redux';
import { setModelSelector, addCar,selectCar} from '../actions/modelDetails'

const data = [
    {
      name: "Ivel Z3",
      manufacturer: "Ivasim",
      year: 1969,
      origin: "Croatia"
    },
    {
      name: "Bally Astrocade",
      manufacturer: "Bally Consumer Products",
      year: 1977,
      origin: "USA"
    },
    {
      name: "Sord M200 Smart Home Computer",
      manufacturer: "Sord Computer Corporation",
      year: 1971,
      origin: "Japan"
    },
    {
      name: "Commodore 64",
      manufacturer: "Commodore",
      year: 1982,
      origin: "USA"
    }
  ]

class ModelDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.setModelSelector(data)
  }

  handleChange=(event)=> {
   this.props.selectCar(event.target.value)
    event.preventDefault();
  }

  handleSubmit=(event)=> {
    this.props.addCar(this.props.modelSelected,data)
    event.preventDefault();
  }

  render() {
      if(!this.props.modelsToSelect){
          return "loading"
      }
    return <ModelDetails select={this.handleChange} selected={this.props.modelSelected}
    choices={this.props.modelsToSelect} years={this.props.carYears}
    modelsToShow={this.props.modelsAdded} addCar={this.handleSubmit}/>
  }
}

const mapStateToProps = (state) => {
    return {
    modelsToSelect:state.modelDetails.names,
    carYears:state.modelDetails.years,
    modelSelected:state.modelDetails.selected,
    carName: state.modelDetails.name,
    carManufacturer: state.modelDetails.manufacturer,
    carYear: state.modelDetails.year,
    carOrigin: state.modelDetails.origin,
    modelsAdded: state.modelDetails.modelsAdded
  }
}

export default connect(mapStateToProps, { setModelSelector, addCar,selectCar })(ModelDetailsContainer);