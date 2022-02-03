import './App.css';
import React, { Component } from 'react';
// import styled from 'styled-components'

class App extends Component {

  constructor() {
    super()
    this.state = {
      gender: 'female',
      age: 25,
      height: 150,
      weight:'',
      bmi:'',
      implications:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePlus = this.handlePlus.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
  }


  //Funxtion to handle the change in input and update the state
  handleChange(event) {
    const { name, value } = event.target
    this.setState({ [name]: value })
    console.log(this.state.gender)
  }

  //function after the form is submitted
  handleSubmit(event) {
    alert(
      'Gender was submitted: ' + this.state.gender + 
      '\nAge: ' + this.state.age + 
      '\nWeight: '+this.state.weight+
      '\nHeight: ' + this.state.height
    );
    event.preventDefault();
    if (this.state.weight==='' || isNaN(this.state.weight)){
      alert('Weight is invalid!')
    }
    else{
      let weight=parseFloat(this.state.weight);
      let height=parseFloat(this.state.height)/100;
      let bmi_cal=weight/Math.pow(height,2);
      this.setState({bmi: bmi_cal.toFixed(2)});
      if (bmi_cal<=18.5){
        this.setState({implications:'Underweight'});
      }
      else if (bmi_cal<=24.9){
        this.setState({implications:'Normal'});
      }
      else if (bmi_cal<=29.9){
        this.setState({implications:'Overweight'});
      }
      else if (bmi_cal<=34.9){
        this.setState({implications:'Obese Level I'});
      }
      else if (bmi_cal<=39.9){
        this.setState({implications:'Obese Level II'});
      }
      else{
        this.setState({implications:'Obese Level III'});
      }
    }
  }
    

  //function to increase the age
  handlePlus(e) {
    e.preventDefault();
    this.setState(prevState => {
      return {
        age: prevState.age + 1
      }
    })
  }

  //funtcion to decrease the age
  handleMinus(e) {
    e.preventDefault();
    this.setState(prevState => {
      return {
        age: prevState.age - 1
      }
    })
    console.log(this.state.age);
  }


  render() {
    return (
      <div className='box'>
        <form >
          <h2>BMI Calculator
          </h2>

          <label>Gender:</label>
          <label className="container">
            <input
              className='radio'
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            /> 
            <span class="checkmark"></span>
            Male
          </label>
          <label className="container">
            <input
              className='radio'
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            /> 
            <span class="checkmark"></span>
            Female
          </label>


          <br />

          <div style={{marginTop:20}}>
          <label>
          <span style={{marginRight:20}}>Age: </span>  
            <button onClick={(e) => { this.handlePlus(e) }}>+</button> {this.state.age} <button onClick={(e) => { this.handleMinus(e) }}>-</button>
          </label>
          </div>

          <br />


          <label>
          <span style={{marginRight:10}}>Weight: </span> 
            <input
              type="text"
              className='inputt'
              value={this.state.weight}
              name="weight"
              placeholder="Weight in kgs eg: 50"
              onChange={this.handleChange}
            />
            kg
          </label>


          <br />


          <label>
            <span style={{marginRight:20}}>Height: </span> 
            <input 
              type='range'
              min='100'
              max='300'
              value={this.state.height}
              onChange={this.handleChange}
              name='height'
            />{this.state.height}cm
          </label>


          <br />


          <button onClick={this.handleSubmit}>Submit</button>
        </form>
        <p>
        {this.state.bmi===''?
        ''
        :'Your BMI is: '+this.state.bmi+'. This implies that you are '+this.state.implications+'.'
        }
        </p>
      </div>

    )
  }
}

// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

export default App;
