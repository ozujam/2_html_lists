const { expect, should } = require('chai');
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

    describe('Unordered List', () => {
        it('ul tag should exists', () => {
            expect(document.querySelector('ul')).to.exist
        })
        it('ul should contain THREE li tags', () => {
            expect(document.querySelector('ul')).to.have.descendants('li').and.have.length(3)
        })
        it('lists should not be empty', () => {
            
            // find all unordered lists 
            const lists = document.querySelectorAll('ul li');
            const string1 = lists[0].textContent
            const string2 = lists[1].textContent
            const string3 = lists[2].textContent

            // expect lists to not be empty string
            expect(string1).to.not.equal('')
            expect(string2).to.not.equal('')
            expect(string3).to.not.equal('')
        })
    })
})