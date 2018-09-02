import React from 'react';
import {AppBar} from './AppBar';
import {AppBody} from './AppBody';

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isOffline: false
    };

    this.toggleOffline = this.toggleOffline.bind(this);
  }

  toggleOffline () {
    this.setState({
      isOffline: !this.state.isOffline
    });
  }

  render() {
    return (
      <div>
        <AppBar toggleOffline={this.toggleOffline}/>
        <AppBody/>
      </div>
    );
  }
}
