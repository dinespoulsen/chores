import React from 'react';

export const ChoreDoneButton = (props) => {
  return (
    <div className="chore-done-button">
      <button onClick={props.doneClicked}>Job done</button>
    </div>
  )
}
