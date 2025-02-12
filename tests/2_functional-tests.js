const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
    //#1
    test('post text and locale fields', function (done) {
        chai
          .request(server)
          .keepOpen()
          .post('/api/translate')
          .send({
            text: 'Mangoes are my favorite fruit.',
            locale: 'american-to-british'
          })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.type, "application/json");
            assert.include(res.body.translation, 'favourite');
            done();
          });
     });

    //#2
    test('post text and invalid locale fields', function (done) {
        chai
          .request(server)
          .keepOpen()
          .post('/api/translate')
          .send({
            text: 'Mangoes are my favorite fruit.',
            locale: 'to-british'
          })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.type, "application/json");
            assert.deepEqual(res.body, { error: 'Invalid value for locale field' });
            done();
          });
    });

    //#3
    test('post missing text field', function (done) {
        chai
          .request(server)
          .keepOpen()
          .post('/api/translate')
          .send({
            locale: 'american-to-british'
          })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.type, "application/json");
            assert.deepEqual(res.body, { error: 'Required field(s) missing' });
            done();
          });
    });

    //#4
    test('post missing local field', function (done) {
        chai
          .request(server)
          .keepOpen()
          .post('/api/translate')
          .send({
            text: 'Mangoes are my favorite fruit.'
          })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.type, "application/json");
            assert.deepEqual(res.body, { error: 'Required field(s) missing' });
            done();
          });
    });

    //#5
    test('post empty text field', function (done) {
        chai
          .request(server)
          .keepOpen()
          .post('/api/translate')
          .send({
            text: '',
            locale: 'american-to-british'
          })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.type, "application/json");
            assert.deepEqual(res.body, { error: 'No text to translate' });
            done();
          });
    });

    //#6
    test('text that needs no translations', function (done) {
        chai
          .request(server)
          .keepOpen()
          .post('/api/translate')
          .send({
            text: 'Mangoes are my favourite fruit.',
            locale: 'american-to-british'
          })
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.type, "application/json");
            assert.equal(res.body.translation, "Everything looks good to me!");
            done();
          });
     });
});
