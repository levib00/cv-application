import React from "react";

class EditNameSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: '',
      email: '',
      phoneNumber: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {    
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    const newObject = {
      name: this.state.name,
      location: this.state.location,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
    }
    
    this.props.handleSubmitPersonalInfo(newObject)
    event.preventDefault();
  }

  render() {
    const { name, location, email, phoneNumber } = this.props.nameInfo
    return (
      <div>
        <h2><input type='text' name="name" value={name} onChange={this.handleChange}/></h2>
        <div>
          <div>
            <label htmlFor="locationInput">
              Location:
              <input type='text' name="location" value={location} onChange={this.handleChange}/>
            </label>
          </div>
          <div>
            <label htmlFor='emailInput'>
              Email: 
              <input type='email' name="email" id='emailInput' value={email} onChange={this.handleChange}/>
            </label>
          </div>
          <div>
            <label htmlFor='phoneNumberInput'>
              Phone number: 
              <input type='tel' name="phoneNumber" id='phoneNumberInput' value={phoneNumber} onChange={this.handleChange}/>
            </label>
          </div>
        </div> 
        <input type='submit' value='submit' onClick={this.handleSubmit}/>   
      </div>
    )
  }
}

export default EditNameSection;