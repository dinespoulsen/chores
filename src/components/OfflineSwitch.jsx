import React from 'react';
import Switch from 'react-switch';

export class OfflineSwitch extends React.Component {
  constructor() {
    super();
    this.state = {
      checked: true,
      isOffline: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({
      checked,
      isOffline: !this.state.isOffline
    });
  }

  render() {
    return (
      <label htmlFor="normal-switch" className="switch-container">
        <span className="switch-text">{this.state.isOffline ? "Offline" : "Online" }</span>
        <Switch
          onChange={this.handleChange}
          checked={this.state.checked}
          id="normal-switch"
          uncheckedIcon={false}
          checkedIcon={false}
        />
      </label>
    );
  }
}
