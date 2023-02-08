import React from 'react';

class Entry extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const { role, company, responsibilities } = this.props.info
    return (
      <div>
        <div>
          {role} - {company}
        </div>
        <p>{responsibilities}</p>
      </div>
    )
  }

}

export default Entry;