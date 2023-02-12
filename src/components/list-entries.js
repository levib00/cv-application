import React from "react";
import Entry from "./entry";
import { v4 as uuidv4 } from 'uuid';

class ListEntries extends React.Component {
  makeToListItems() {
    const item = this.props.item
    const list = item.map(listItem => <Entry key={uuidv4()} info={listItem}/>)
    console.log(list)
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