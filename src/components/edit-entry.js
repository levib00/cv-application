import React from 'react';

class EditEntry extends React.Component {
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
        <div>
          <div>
            <label htmlFor='roleInput'>
              <input type='text' id='roleInput' name='role' value={this.state.role} onChange={this.handleChange}/>
            </label>
              -
            <label htmlFor='companyInput'>
              <input type='text' id='companyInput' name='company' value={this.state.company} onChange={this.handleChange}/>
            </label>
          </div>
          <div>
          <label htmlFor='startDateInput'>
              <input type='date' id='startDateInput' name='startDate' value={this.state.startDate} onChange={this.handleChange}/>
            </label>
              -
            <label htmlFor='endDateInput'>
              <input type='date' id='endDateInput' name='endDate' value={this.state.endDate} onChange={this.handleChange}/>
            </label>
          </div>
        </div>
        <p>
          <label htmlFor='responsibilitiesInput'>
            <textarea type='text' name='responsibilities' id='responsibilitiesInput' value={this.state.responsibilities} onChange={this.handleChange}/>
          </label>
        </p>
        <input type='submit' value='submit' onClick={this.handleSubmit}/>
      </div>
    )
  }
}

export default EditEntry;