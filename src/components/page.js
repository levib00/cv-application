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
      eduArray: [], //TODO: sort edu by date -> make allowance for 'present' to be current date.
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
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.getIndex = this.getIndex.bind(this);
  }

  getIndex(e) {
    let test = e.target.parentNode
    let nodeList = Array.from(e.target.parentNode.parentNode.children)
    console.log(e.target.parentNode.parentNode)
    let filteredNode = nodeList.filter(node => node === test)
    return nodeList.indexOf(filteredNode[0])
  }

  handleEdit(e) {
    let array = this.state.eduArray
    array[this.getIndex(e)] = <EditEntry historyArray={'eduArray'} setArray={this.setArray} key={'eduEdit'}/>
    this.setState({eduArray: [...array]}) //TODO: allow these to work with exp array too.
  }

  handleRemove(e) {
    let array = this.state.eduArray
    array.splice(this.getIndex(e), 1)
    this.setState({eduArray: [...array]})
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
          <ListItems item={this.state.expArray} edit={this.handleEdit} remove={this.handleRemove}/>
        </div>
        <div>
          <SectionHeader title='Education' addItem={this.addItem} historyArray={this.state.eduArray}/>
          <ListItems item={this.state.eduArray} edit={this.handleEdit} remove={this.handleRemove}/>
        </div>
      </div>
    )
  }
}

export default Page;
