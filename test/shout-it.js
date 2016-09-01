/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

function shoutIt(text, done) {
  text = text.toUpperCase();
  done(text);
};
shoutIt.defaultEncoding = 'utf-8';

module.exports = shoutIt;
