const fs = require('fs');
const request = require('request');

const url = process.argv[2];
const path = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.log('Error:', error);
  }
  fs.writeFile(path, body, err => {
    if (err) {
      console.log('Error:', err);
    } else {
      fs.stat(path, (err, stats) => {
        if (err) {
          console.log('Error:', err)
        } else {
          console.log(`Downloaded and saved ${stats.size} bytes to ${path}`)
        }
      })
    }
  })
});