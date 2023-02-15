import React from "react";
import Entry from "./entry";
import { v4 as uuidv4 } from 'uuid';

class ListEntries extends React.Component {
  makeToListItems() {
    let placed = false
    const item = this.props.item
    const list = item.map(listItem => {
    
    if (React.isValidElement(listItem) && placed) {
      return null
    }
    else if (React.isValidElement(listItem) && !placed) {
      placed = true
      return listItem
    }
    return <Entry key={uuidv4()} info={listItem} edit={this.props.edit} remove={this.props.remove}/>
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