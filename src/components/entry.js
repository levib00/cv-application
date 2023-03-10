import React from 'react';
import SectionCSS from '../styles/section.module.css'

class Entry extends React.Component {
  // This component is the element that shows under 'Experience' or 'Education'
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
    // If the current date is input into the end date box the date is changed to 'Present'
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const dateString = year + '-' + ('0' + (month)).slice(-2) + '-' + ('0' + day).slice(-2);

    if (endDate === dateString) {
      return 'Present'
    } else {
      return endDate
    }
  }

  render() {
    const { role, company, responsibilities, startDate, endDate } = this.props.info
    return (
      <div key={this.props.listKey}>
        <button className={SectionCSS.btn} onClick={this.handleRemove}>Remove</button>
        <button className={SectionCSS.btn} onClick={this.handleEdit}>edit</button> {/*// TODO: 4. give the current text thats in the entry to the edit boxes when this is pressed. do the same for personalInfo */}
        <div className={SectionCSS.infoLine}>
          <div>{role} - {company}</div> <div>{startDate} - {this.checkIfPresent(endDate)}</div>
        </div>
        <p>{responsibilities}</p>
      </div>
    )
  }
}

export default Entry;