import React from 'react';
import {ChoreStatus} from './ChoreStatus';
import {ChoreDoneButton} from './ChoreDoneButton';
import {ChoreDescription} from './ChoreDescription';

export class Chore extends React.Component {
  constructor(props) {
    super();
    this.state = {
      status: 0
    }

    this.choreDoneClicked = this.choreDoneClicked.bind(this);
  }

  choreDoneClicked () {
    this.setState({
      status: this.state.status + 1
    })
  }

  render () {
    return (
      <div className="chore-container">
        <ChoreStatus status={this.state.status}/>
        <ChoreDescription/>
        <ChoreDoneButton doneClicked={this.choreDoneClicked}/>
      </div>
    )
  }
}
