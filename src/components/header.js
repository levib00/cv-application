import React from 'react';
import HeaderCss from '../styles/header.module.css'

class Header extends React.Component {
  render() {
    return (
      <header className={HeaderCss.header}>
        <h2>CV Creator</h2>        
      </header>
    )
  }

}

export default Header;