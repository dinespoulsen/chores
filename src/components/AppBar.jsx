import React from 'react';
import {OfflineSwitch} from './OfflineSwitch';

export const AppBar = (props) => {
  return (
    <div className="app-bar">
      <OfflineSwitch toggleOffline={props.toggleOffline}/>
    </div>
  )
}
