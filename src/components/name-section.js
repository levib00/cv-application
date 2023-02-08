import React from 'react';

class NameSection extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const { name, location, email, phoneNumber } = this.props.info
    return (
      <header>
        <h2>{name}</h2>
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
      </header>
    )
  }

}

export default NameSection;