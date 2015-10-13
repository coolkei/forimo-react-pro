'use strict'

var React = require('react');
var componentMixin = require('./mixins/componentMixin');
var multiMixin = require('./mixins/multiMixin');
var inputMixin = require('./mixins/inputMixin');

module.exports = React.createClass({
  displayName: 'PhoneNumber',
  mixins: [componentMixin, multiMixin, inputMixin]
});