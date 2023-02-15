import React from 'react';

class NameSection extends React.Component {
  render() {
    const { name, location, email, phoneNumber } = this.props.nameInfo
    return (
      <div>
        <h2>{name}</h2>
        <button>Edit</button>
        <div>
          <div>
            Location: {location}
          </div>
          <div>
            Email: {email}
          </div>
          <div>
            Phone number: {phoneNumber}
          </div>
        </div>    
      </div>
    )
  }

}

export default NameSection;