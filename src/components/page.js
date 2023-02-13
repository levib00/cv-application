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
      clicked: false,
    }
    this.setArray = this.setArray.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeEditComponent = this.removeEditComponent.bind(this);
  }

  removeEditComponent(historyArray, newObject) { // TODO: rename historyArray
    if (historyArray === 'eduArray') {
      const array = [...this.state.eduArray]; // make a separate copy of the array
      const index = array.findIndex(item => React.isValidElement(item))
      if (index !== -1) {
        array.splice(index, 1);
        return [...array, newObject];
      }
    } else if (historyArray === 'expArray') {
      const array = [...this.state.expArray]; // make a separate copy of the array
      const index = array.findIndex(item => React.isValidElement(item))
      if (index !== -1) {
        array.splice(index, 1);
        return [...array, newObject];
      }
    }
  }

  setArray(historyArray, newObject) {
    this.setState({clicked: false})
    if (historyArray === 'eduArray') {
      this.setState({eduArray: this.removeEditComponent(historyArray, newObject)})
    } else if (historyArray === 'expArray') {
      this.setState({expArray: this.removeEditComponent(historyArray, newObject)})
    }
  }
  
  addItem(historyArray) {
    if (!this.state.clicked) {
      if (historyArray === this.state.eduArray) {
      this.setState({
        eduArray: [...historyArray, <EditEntry historyArray={'eduArray'} setArray={this.setArray} key={'eduAdd'}/>]
      })
      } else {
        this.setState({
          expArray: [...historyArray, <EditEntry historyArray={'expArray'} setArray={this.setArray} key={'expAdd'}/>]
        })
      }
      this.setState({clicked: true})
    }
  }
  
  render() {
    return (
      <div>
        <NameSection nameInfo={this.state.personalInfo}/>
        <div>
          <SectionHeader title='Experience' addItem={this.addItem} historyArray={this.state.expArray}/>
          <ListItems item={this.state.expArray}/>
        </div>
        <div>
          <SectionHeader title='Education' addItem={this.addItem} historyArray={this.state.eduArray}/>
          <ListItems item={this.state.eduArray}/>
        </div>
      </div>
    )
  }
}

export default Page;
