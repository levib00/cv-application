import React from 'react';

class NameSection extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <header>
        <h2>Your Name</h2>
        <div>
          <div>
            location: A place
          </div>
          <div>
            email: your@email.com
          </div>
          <div>
            Phone number: (123) 456-7890
          </div>
        </div>    
      </header>
    )
  }

}

export default NameSection;