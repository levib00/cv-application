import React from "react";
import EditCSS from '../styles/edit-form.module.css'

class EditNameSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.nameInfo.name,
      location: this.props.nameInfo.location,
      email: this.props.nameInfo.email,
      phoneNumber: this.props.nameInfo.phoneNumber,
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
    const { name, location, email, phoneNumber } = this.state
    return (
      <div>
        <h2><input required className={EditCSS.textBox} placeholder='Your name' type='text' name="name" value={name} onChange={this.handleChange}/></h2>
        <div className={EditCSS.formContainer}>
          <div>
            <div>
              <label className={EditCSS.inputBoxes} htmlFor="locationInput">
                Location:
                <input required className={EditCSS.textBox} placeholder='City' type='text' name="location" value={location} onChange={this.handleChange}/>
              </label>
            </div>
            <div>
              <label className={EditCSS.inputBoxes} htmlFor='emailInput'>
                Email:
                <input required className={EditCSS.textBox} placeholder="Email"  type='email' name="email" id='emailInput' value={email} onChange={this.handleChange}/>
              </label>
            </div>
            <div>
              <label className={EditCSS.inputBoxes} htmlFor='phoneNumberInput'>
                Phone number:
                <input required className={EditCSS.textBox} placeholder="Phone number"  type='tel' name="phoneNumber" id='phoneNumberInput' value={phoneNumber} onChange={this.handleChange}/>
              </label>
            </div>
          </div>
          <button className={EditCSS.btn} type='submit' onClick={this.handleSubmit}>Submit</button>
        </div> 
      </div>
    )
  }
}

export default EditNameSection;