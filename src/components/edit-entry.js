import React from 'react';

class EditEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      role: '',
      company: '',
      responsibilities: '',
      startDate: '',
      endDate:'',
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
          <label htmlFor='roleInput'>
            <input type='text' id='roleInput' name='role' value={this.state.value} onChange={this.handleChange}/>
          </label>
            - 
          <label htmlFor='companyInput'>
            <input type='text' id='companyInput' name='company' value={this.state.value} onChange={this.handleChange}/>
          </label>
        </div>
        <p>
          <label htmlFor='responsibilitiesInput'>
            <input type='text' name='responsibilities' id='responsibilitiesInput' value={this.state.value} onChange={this.handleChange}/>
          </label>
        </p>
        <input type='submit' value='submit' onClick={this.handleSubmit}/>
      </div>
    )
  }
}

export default EditEntry;