'use strict';

let shaco = require('shaco');
let User;
// create factory
shaco.createFactory(User, 'user', {
  name: {faker: 'name'},
  phone: {faker: 'phone'},
  uid: {faker: 'uuid'}
});