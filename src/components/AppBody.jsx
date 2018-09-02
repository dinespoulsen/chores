import React from 'react';
import {Chore} from './Chore';

export class AppBody extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render () {
    return (
      <div className="app-body">
        <Chore/>
      </div>
    );
  }
}
