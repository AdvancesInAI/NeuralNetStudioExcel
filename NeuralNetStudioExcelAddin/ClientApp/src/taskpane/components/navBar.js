import React, { Component } from 'react';
import { Nav } from 'office-ui-fabric-react/lib/Nav';

export default class NavBar extends Component {

  render() {
    return (
      <Nav
        groups={[
          {
            links: [
              { name: 'Home', key: 'Home', url: '/' },
              { name: 'Activity', key: 'Activity', url: '/activity' },
              { name: 'News', key: 'News', url: '/news' },
              { name: 'Documents', key: 'Documents', url: '/documents' }
            ]
          }
        ]}
      />
    );
  }
}