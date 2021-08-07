import array from '../menu.json';
const Handlebars = require('handlebars');
const menuItem = Handlebars.compile(
  '{{id}} {{name}} {{description}} {{image}} {{price}} {{ingredients}}',
);