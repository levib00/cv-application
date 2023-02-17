import React from 'react';

class NameSection extends React.Component {
render() {
  return (
    <div>
      <h2>{this.props.nameInfo.name}</h2>
      <div>
        <div>
          Location: {this.props.nameInfo.location}
        </div>
        <div>
          Email: {this.props.nameInfo.email}
        </div>
        <div>
          Phone number: {this.props.nameInfo.phoneNumber}
        </div>
      </div>    
    </div>
    )
  }
}

export default NameSection;