const { expect } = require('chai');
const chai = require('chai');
const { JSDOM } = require('jsdom');

chai.use(require('chai-dom'));
require('jsdom-global')();

describe('index.html', () => {
    
    beforeEach((done) => {
        JSDOM.fromFile('index.html')
        .then((dom) => {
          global.document = dom.window.document
        })
        .then(done, done);
    });

    
})