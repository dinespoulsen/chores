import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './src/components/App';

ReactDOM.render(<App/>, document.getElementById('app'));

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('./serviceWorker.js')
           .then(() => console.log('Service Worker Registered'));
}
