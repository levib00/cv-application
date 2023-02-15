import React from "react";

class EditNameSection extends React.Component {
  render() {
    const { name, location, email, phoneNumber } = this.props.nameInfo
    return (
      <div>
        <h2>{name}</h2>
        <div>
          <div>
            <label htmlFor="locationInput">
              Location:
              <input type='text' value={location}/>
            </label>
          </div>
          <div>
            <label htmlFor='emailInput'>
              Email: 
              <input type='text' id='emailInput' value={email}/>
            </label>
          </div>
          <div>
            <label htmlFor='phoneNumberInput'>
              Phone number: 
              <input type='text' id='phoneNumberInput' value={phoneNumber}/>
            </label>
          </div>
        </div>    
      </div>
    )
  }
}

export default EditNameSection;