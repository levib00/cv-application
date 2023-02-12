import React from 'react';
import EditEntry from './edit-entry';
import EditNameSection from './edit-personal-info';
import ListItems from './list-entries';
import NameSection from './name-section';
import SectionHeader from './section-title';

class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      eduArray: [],
      expArray: [],
      values: {
          type: 'school',
          role: 'student',
          company: 'a school',
          responsibilities: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat ultricies massa quis fermentum. Phasellus mattis nulla justo, sed vestibulum turpis accumsan eu. Suspendisse sit amet metus non lacus fringilla consectetur. Nulla pretium iaculis nisi, ac vestibulum dolor facilisis sed. Pellentesque nibh tellus,',
          startDate: '2012',
          endDate: '2011'
      },
      personalInfo: {
        type : 'personal',
        name : 'a Name',
        location: 'here',
        email: 'an@email.here',
        phoneNumber: '(098) 765-4321'
      },
    }
    this.setArray = this.setArray.bind(this);
  }

  setArray(historyArray, newObject) {
    console.log(historyArray === this.state.eduArray)
    
    if (historyArray === this.state.eduArray) {
      this.setState({
      eduArray: [...historyArray, newObject],
      })
    } else {
      this.setState({
      expArray: [...historyArray, newObject],
      })
      console.log(this.state.expArray)
    }
 
  }
  
  render() {
    return (
      <div>
        <NameSection nameInfo={this.state.personalInfo}/>
        <div>
          <SectionHeader title='Experience'/>
          <ListItems item={this.state.expArray}/>
          <EditEntry historyArray={this.state.expArray} setArray={this.setArray}/>
        </div>
        <div>
          <SectionHeader title='Education'/>
          <ListItems item={this.state.eduArray}/>
          <EditEntry historyArray={this.state.eduArray} setArray={this.setArray}/>
        </div>
      </div>
    )
  }

}

export default Page;
