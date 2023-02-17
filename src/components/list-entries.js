import React from "react";
import Entry from "./entry";
import { v4 as uuidv4 } from 'uuid';

class ListEntries extends React.Component {
  makeToListItems() {
    let placed = false
    let item = this.props.item
    item = item.sort(function(a,b){
      return new Date(a.endDate) - new Date(b.endDate)
    })
    const list = item.map(listItem => {
    
    if (React.isValidElement(listItem) && placed) {
      return null
    }
    else if (React.isValidElement(listItem) && !placed) {
      placed = true
      return listItem
    }
    return <Entry whichArray={this.props.whichArray} key={uuidv4()} info={listItem} edit={this.props.edit} remove={this.props.remove}/>
  })
    return list
  }
  
  render() {
    return (
    <div>
      {this.makeToListItems()}
    </div>
    )
  }
}

export default ListEntries;