import React from 'react';

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.checkIfPresent = this.checkIfPresent.bind(this);
  }

  handleEdit(e) {
    this.props.edit(e, this.props.whichArray)
  }

  handleRemove(e) {
    this.props.remove(e, this.props.whichArray)
  }

  checkIfPresent(endDate) {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const dateString = year + '-' + ('0' + (month)).slice(-2) + '-' + ('0' + day).slice(-2);

    if (endDate === dateString) {
      return 'present'
    } else {
      return endDate
    }
  }

  render() {
    const { role, company, responsibilities, startDate, endDate } = this.props.info
    return (
      <div key={this.props.listKey}>
        <button onClick={this.handleRemove}>Remove</button>
        <button onClick={this.handleEdit}>edit</button> {/*// TODO: 4. give the current text thats in the entry to the edit boxes when this is pressed. do the same for personalInfo */}
        <div>
          <div>{role} - {company}</div> <div>{startDate} - {this.checkIfPresent(endDate)}</div>
        </div>
        <p>{responsibilities}</p>
      </div>
    )
  }
}

export default Entry;