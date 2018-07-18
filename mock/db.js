/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
// const path = require('path');
const fs = require('fs');
const path = require('path');

const PATH = path.resolve(__dirname, 'data');
const files = fs.readdirSync(PATH);
const routes = {};

if (files) {
  files
    .filter(filename => path.extname(filename) === '.js')
    .forEach((filename) => {
      const group = require(`${PATH}/${filename}`);

      Object.keys(group).forEach((key) => {
        routes[key] = group[key];
      });
    });
}

module.exports = routes;
