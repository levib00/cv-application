import React from 'react';
import Entry from './entry';
import NameSection from './name-section';
import SectionHeader from './section-title';

class Page extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div>
        <NameSection />
        <div>
          <SectionHeader />
          <Entry />
          <Entry />
        </div>
        <div>
          <SectionHeader />
          <Entry />
          <Entry />
        </div>
      </div>
    )
  }

}

export default Page;
