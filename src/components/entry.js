import React from 'react';

class Entry extends React.Component {
  render() {
    const { role, company, responsibilities } = this.props.info
    return (
      <div key={this.props.listKey}>
        <div>
          {role} - {company}
        </div>
        <p>{responsibilities}</p>
      </div>
    )
  }
}

export default Entry;