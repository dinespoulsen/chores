import React from 'react';
import {AppBar} from './AppBar';
import {AppBody} from './AppBody';

export class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <AppBar/>
        <AppBody/>
      </div>
    );
  }
}
