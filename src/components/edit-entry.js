import React from 'react';
import EditCSS from '../styles/edit-form.module.css'

class EditEntry extends React.Component {
  // This is the form that handles edits and added entries.
  constructor(props) {
    super(props)
    this.state = {
      role: this.props.entryInfo.role,
      company: this.props.entryInfo.company,
      responsibilities: this.props.entryInfo.responsibilities,
      startDate: this.props.entryInfo.startDate,
      endDate: this.props.entryInfo.endDate,
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    const newObject = {
      role: this.state.role,
      company: this.state.company,
      responsibilities: this.state.responsibilities,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
    }
    
    this.props.setArray(this.props.historyArray, newObject)
    event.preventDefault();
  }
  
  render() {
    return (
      <div>
        <div className={EditCSS.inputLine}>
          <div className={EditCSS.inputBoxes}>
            <label htmlFor='roleInput'>
              <input required className={EditCSS.textBox} placeholder={this.props.historyArray === 'expArray' ? 'position' : 'Area of Study'} type='text' id='roleInput' name='role' value={this.state.role} onChange={this.handleChange}/>
            </label>
              -
            <label htmlFor='companyInput'>
              <input required className={EditCSS.textBox} placeholder={this.props.historyArray === 'expArray' ? 'company' : 'School'} type='text' id='companyInput' name='company' value={this.state.company} onChange={this.handleChange}/>
            </label>
          </div>
          <div className={EditCSS.inputBoxes}>
            <label htmlFor='startDateInput'>
              <input required className={EditCSS.textBox} onFocus={(e) => (e.target.type = "date")} placeholder={'Start date'} type='text' id='startDateInput' name='startDate' value={this.state.startDate} onChange={this.handleChange}/>
            </label>
              -
            <label htmlFor='endDateInput'>
              <input required className={EditCSS.textBox} onFocus={(e) => (e.target.type = "date")} placeholder={'Start date'} type='text' id='endDateInput' name='endDate' value={this.state.endDate} onChange={this.handleChange}/>
            </label>
          </div>
        </div>
        <p>
          <label htmlFor='responsibilitiesInput'>
            <textarea className={EditCSS.textArea} placeholder='responsibilities or notable achievements.' type='text' name='responsibilities' id='responsibilitiesInput' value={this.state.responsibilities} onChange={this.handleChange}/>
          </label>
        </p>
        <button className={EditCSS.btn} type='submit' onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default EditEntry;