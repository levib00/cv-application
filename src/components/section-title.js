import React from "react";
import SectionCSS from '../styles/section.module.css'

class SectionHeader extends React.Component {
  constructor(props) {
    super(props)
    this.handleAdd = this.handleAdd.bind(this)
    this.state = {
      clicked: false
    }
  }
  
  handleAdd() {
    this.props.addItem(this.props.historyArray);
  }
  
  render() {
    const clicked = this.state.clicked
    return (
      <div className={SectionCSS.section}>
        <h2>{this.props.title}</h2>
        <button className={SectionCSS.btn} onClick={!clicked ? this.handleAdd : null}>Add</button>
      </div>
    )
  }
}

export default SectionHeader;