import React from "react";

class SectionHeader extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
      </div>
    )
  }

}

export default SectionHeader;