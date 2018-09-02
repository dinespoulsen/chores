import React from 'react';
import {ChoreStatus} from './ChoreStatus';
import {ChoreDoneButton} from './ChoreDoneButton';
import {ChoreDescription} from './ChoreDescription';
import {statusService} from '../statusService';

export class Chore extends React.Component {
  constructor(props) {
    super();
    this.state = {
      status: 0
    }
    this.service = new statusService();
    this.choreDoneClicked = this.choreDoneClicked.bind(this);
    this.addOnlineEvent = this.addOnlineEvent.bind(this);
  }

  choreDoneClicked () {
    this.setState({
      status: this.state.status + 1
    }, () => {
      this.service.setStatus(this.state.status)
    });
  }

  addOnlineEvent() {
    window.addEventListener('online', () => {
      this.service.setStatus(this.state.status);
    });
  }

  componentDidMount () {
    const service = new statusService();
    service.getStatus()
    .then((status) => {
      this.setState({
        status: status
      });
    });

    this.addOnlineEvent();
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
