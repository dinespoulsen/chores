const fs = require('browserify-fs');

function statusFetch (url) {
  return fetch(url)
        .then(response=>{
          return response.json();
        })
        .then(data => data.status);
}

export class statusService {
  constructor() {

  }

  getStatus () {
    let url = `http://localhost:3000/status`;

    return new Promise((resolve, reject) => {
      if ('caches' in window) {
        caches.match(url).then((response) => {
          if (response) {
            response.json().then((data) => {
              resolve(data.status);
            });
          } else {
            resolve(statusFetch(url));
          }
        });
      } else {
        reolve(statusFetch(url));
      }
    });
  }

  setStatus (status) {
    fetch(`http://localhost:3000/status`, {
      method: 'post',
      body: JSON.stringify({status}),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    })
    .then(response=>{
      return response.json();
    })
    .then(data => console.log(data.status));
  }
}
