import React from "react";
import NameSection from "./name-section";

class ShowNameSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.showInfo = this.showInfo.bind(this)
  }
  
  showInfo() {
    let placed = false
    const item = this.props.nameInfo
      if (React.isValidElement(item) && placed) {
        return null
      }
      else if (React.isValidElement(item) && !placed) {
        placed = true
        return item
      } else {
        return <NameSection nameInfo={this.props.nameInfo}/>
      }
  }
  
    render() {
      return (
        <div>
          {this.showInfo()}
        </div>
      )
    }
  
  }
  
  export default ShowNameSection;