import React from 'react';

class Entry extends React.Component {
  render() {
    const { role, company, responsibilities } = this.props.info
    return (
      <div key={this.props.listKey}>
        <button onClick={this.props.remove}>Remove</button>
        <button onClick={this.props.edit}>edit</button> {/*// TODO: give the current text thats in the entry to the edit boxes when this is pressed. */}
        <div>
          {role} - {company}
        </div>
        <p>{responsibilities}</p>
      </div>
    )
  }
}

export default Entry;