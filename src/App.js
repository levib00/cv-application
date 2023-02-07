import React from 'react';
import Page from './components/page';
import Header from './components/header';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div>
        <Header />
        <Page />
      </div>
    )
  }

}

export default App;
