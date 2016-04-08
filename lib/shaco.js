/**
 * Shaco
 * @author JerryC
 * @description The main class of Shaco.
 */

'use strict';
let Factory = require('./factory.js');
let faker = require('./faker');

class Shaco {
  constructor(adapter){
    this.factories = [];
    this.faker = faker;

    // TODO
    this.adapter = adapter;
  }

  createFactory(model, name){
    let _this = this;
    let factory = new Factory(model, name, _this.adapter);
    this.factories.push(factory);
  }

  destroyAllFactory(){
    let _this = this;

    // how to clear an javascript array?
    // see http://stackoverflow.com/questions/1232040/how-do-i-empty-an-array-in-javascript
    _this.factories.splice(0, _this.factories.length)
  }
}

module.exports = Shaco;