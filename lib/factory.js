/**
 * Shaco
 * @author JerryC
 * @description The factory class that shaco.js rely on.
 */

'use strict';

class Factory {
  constructor(model, name, overwrite){
    this.name = name || model.name;

    // store for instance what factory was generated.
    this.instances = [];

    // to store unique attributes of model.
    // {attrName: [value, value, ...]}
    this.uniqueAttrs = [];

    //TODO
    // exchange attribute of given model to unified format.
    // may be need to generate adapter specific for different ORM framework
    this.modelAttr = {};

    // TODO
    // merge method of overwrite and inline method.

  }

  generate(amount, template){
    // generate unique instances.
    // check out the unique attributes.
    // if has repetition remove and generate again.
  }

  create(amount, template){
    // use this.generate method to generate instance.
    // persist the instances with model.create method
  }

  destroy(uniqueID){
    // pop instances array of given uniqueID
  }

  destroyAll(){
    // empty instances array
    // empty uniqueAttrs array
  }
}

module.exports = Factory;