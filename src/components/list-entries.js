import React from "react";
import Entry from "./entry";
import { v4 as uuidv4 } from 'uuid';
// uuidv4 is used to generate unique keys for list items.

class ListEntries extends React.Component {
  makeToListItems() {
    let placed = false // prevents more than one add/edit form being active at a time.
    let item = this.props.item
    item = item.sort(function(a,b) { // sorts entries from oldest end date to newest.
      return new Date(a.endDate) - new Date(b.endDate)
    })
    const list = item.map(listItem => {
    if (React.isValidElement(listItem) && placed) {
      return null
    }
    else if (React.isValidElement(listItem) && !placed) {
      placed = true
      return listItem // if list item is an EditEntry component add it to the list.
    } // otherwise list the entry.
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