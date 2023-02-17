import React from 'react';

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleEdit(e) {
    this.props.edit(e, this.props.whichArray)
  }

  handleRemove(e) {
    this.props.remove(e, this.props.whichArray)
  }

  render() {
    const { role, company, responsibilities } = this.props.info
    console.log(this.props.info)
    return (
      <div key={this.props.listKey}>
        <button onClick={this.handleRemove}>Remove</button>
        <button onClick={this.handleEdit}>edit</button> {/*// TODO: give the current text thats in the entry to the edit boxes when this is pressed. */}
        <div>
          {role} - {company}
        </div>
        <p>{responsibilities}</p>
      </div>
    )
  }
}

export default Entry;