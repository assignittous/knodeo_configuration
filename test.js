var config;

config = require('./index').Configuration;

config.load('test.cson');

console.log(config.current);
