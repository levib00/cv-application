import React from 'react';
import Entry from './entry';
import NameSection from './name-section';
import SectionHeader from './section-title';

class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      experience: {},
      education: {
        school1: {
          role: 'student',
          company: 'a school',
          responsibilities: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat ultricies massa quis fermentum. Phasellus mattis nulla justo, sed vestibulum turpis accumsan eu. Suspendisse sit amet metus non lacus fringilla consectetur. Nulla pretium iaculis nisi, ac vestibulum dolor facilisis sed. Pellentesque nibh tellus,'
        }
      },
      personalInfo: {
        name : 'a Name',
        location: 'here',
        email: 'an@email.here',
        phoneNumber: '(098) 765-4321'
      },
    }
  }
  
  render() {
    return (
      <div>
        <NameSection info={this.state.personalInfo}/>
        <div>
          <SectionHeader title='Experience'/>
          <Entry info={this.state.education.school1}/>
          <Entry info={this.state.education.school1}/>
        </div>
        <div>
          <SectionHeader title='Education'/>
          <Entry info={this.state.education.school1}/>
          <Entry info={this.state.education.school1}/>
        </div>
      </div>
    )
  }

}

export default Page;
