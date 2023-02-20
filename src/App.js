import React from 'react';
import Page from './components/page';
import Header from './components/header';
import AppCss from './styles/app.module.css'

class App extends React.Component {  
  render() {
    return (
      <div className={AppCss.app}>
        <Header />
        <Page />
      </div>
    )
  }

}

export default App;
