import React from 'react';
import Page from './components/page';
import Header from './components/header';

class App extends React.Component {  
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
