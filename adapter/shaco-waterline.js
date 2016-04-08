/**
 * Shaco
 * @author JerryC
 * @description The factory class that shaco.js rely on.
 */

'use strict';
let _ = require('lodash');

function create(objs) {
  let Model = this.Model;
  return Model.create(objs);
}

function destroy(objs) {
  let Model = this.Model;
  return Model.destroy(_.pick(objs, 'id'));
}

function getAttrElement() {
  let Model = this.Model;
  let attributes = Model._attributes;
  return _.mapValues(attributes, function (value) {
    return {
      length: value.length || 255,
      type: value.type,
      isUnique: value.unique || false
    }
  });
}

module.exports = {
  create: create,
  destroy: destroy,
  getAttrElement: getAttrElement
};