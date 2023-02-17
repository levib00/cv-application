import React from 'react';
import EditEntry from './edit-entry';
import EditNameSection from './edit-personal-info';
import ListItems from './list-entries';
import ShowNameSection from './show-personal-info';
import SectionHeader from './section-title';

class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      eduArray: [], //TODO: sort edu by date -> make allowance for 'present' to be current date.
      expArray: [],
      personalInfo: [],
      clicked: false,
    }
    this.setArray = this.setArray.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeEditComponent = this.removeEditComponent.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.getIndex = this.getIndex.bind(this);
    this.handleSubmitPersonalInfo = this.handleSubmitPersonalInfo.bind(this);
    this.handleEditPersonalInfo = this.handleEditPersonalInfo.bind(this);
  }

  handleEditPersonalInfo() {
    this.setState({personalInfo: <EditNameSection handleSubmitPersonalInfo={this.handleSubmitPersonalInfo} nameInfo={this.state.personalInfo}/>})
  }

  handleSubmitPersonalInfo(newObject) {
    this.setState({personalInfo: newObject})
  }

  getIndex(e) {
    let test = e.target.parentNode
    let nodeList = Array.from(e.target.parentNode.parentNode.children)
    let filteredNode = nodeList.filter(node => node === test)
    return nodeList.indexOf(filteredNode[0])
  }

  handleEdit(e, whichArray) {
    if (whichArray === 'expArray') {
      let array = this.state.expArray
      array[this.getIndex(e)] = <EditEntry historyArray={'expArray'} setArray={this.setArray} key={'expEdit'}/>
      this.setState({expArray: [...array]})
    } else if (whichArray === 'eduArray'){
      let array = this.state.eduArray
      array[this.getIndex(e)] = <EditEntry historyArray={'eduArray'} setArray={this.setArray} key={'eduEdit'}/>
      this.setState({eduArray: [...array]})
    }
  }

  handleRemove(e, whichArray) {
    if(whichArray === 'expArray') {
      let array = this.state.expArray
      array.splice(this.getIndex(e), 1)
      this.setState({expArray: [...array]})
    } else if (whichArray === 'eduArray') {
      let array = this.state.eduArray
      array.splice(this.getIndex(e), 1)
      this.setState({eduArray: [...array]})
    }
    
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
        <div>
          <ShowNameSection nameInfo={this.state.personalInfo}/>
          <button onClick={this.handleEditPersonalInfo}>Edit</button>
        </div>
        <div>
          <SectionHeader title='Experience' addItem={this.addItem} historyArray={this.state.expArray}/>
          <ListItems whichArray={'expArray'} item={this.state.expArray} edit={this.handleEdit} remove={this.handleRemove}/>
        </div>
        <div>
          <SectionHeader title='Education' addItem={this.addItem} historyArray={this.state.eduArray}/>
          <ListItems whichArray={'eduArray'} item={this.state.eduArray} edit={this.handleEdit} remove={this.handleRemove}/>
        </div>
      </div>
    )
  }
}

export default Page;
