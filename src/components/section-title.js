import React from "react";

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
      <div>
        <h3>{this.props.title}</h3>
        <button onClick={!clicked ? this.handleAdd : null}>Add +</button>
      </div>
    )
  }
}

export default SectionHeader;