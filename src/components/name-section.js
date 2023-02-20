import React from 'react';
import InfoCSS from '../styles/personal-info.module.css'

class NameSection extends React.Component {
render() {
  return (
    <div>
      <h2>{this.props.nameInfo.name}</h2>
      <div>
        <div className={InfoCSS.line}>
          Location: {this.props.nameInfo.location}
        </div>
        <div className={InfoCSS.line}>
          Email: {this.props.nameInfo.email}
        </div>
        <div className={InfoCSS.line}>
          Phone number: {this.props.nameInfo.phoneNumber}
        </div>
      </div>    
    </div>
    )
  }
}

export default NameSection;