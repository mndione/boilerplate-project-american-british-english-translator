const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

const translator = new Translator();

suite('Unit Tests', () => {
    
    //#1
    test('Mangoes are my favorite fruit. to British English', () => {
        assert.include(translator.translate('Mangoes are my favorite fruit.', 'american-to-british'), 'favourite');

    });

    //#2
    test('I ate yogurt for breakfast. to British English', () => {
        assert.include(translator.translate('I ate yogurt for breakfast.', 'american-to-british'), 'yoghurt');

    });

    //#3
    test('We had a party at my friend\'s condo. to British English', () => {
        assert.include(translator.translate('We had a party at my friend\'s condo.', 'american-to-british'), 'flat');

    });

    //#4
    test('Can you toss this in the trashcan for me? to British English', () => {
        assert.include(translator.translate('Can you toss this in the trashcan for me?', 'american-to-british'), 'bin');

    });

    //#5
    test('The parking lot was full. to British English', () => {
        assert.include(translator.translate('The parking lot was full.', 'american-to-british'), 'car park');

    });

    //#6
    test('Like a high tech Rube Goldberg machine. to British English', () => {
        assert.include(translator.translate('Like a high tech Rube Goldberg machine.', 'american-to-british'), 'Heath Robinson device');

    });

    //#7
    test('To play hooky means to skip class or work. to British English', () => {
        assert.include(translator.translate('To play hooky means to skip class or work.', 'american-to-british'), 'bunk off');

    });

    //#8
    test('No Mr. Bond, I expect you to die. to British English', () => {
        assert.include(translator.translate('No Mr. Bond, I expect you to die.', 'american-to-british'), 'Mr');

    });

    //#9
    test('Dr. Grosh will see you now. to British English', () => {
        assert.include(translator.translate('Dr. Grosh will see you now.', 'american-to-british'), 'Dr');

    });

    //#10
    test('Lunch is at 12:15 today. to British English', () => {
        assert.include(translator.translate('Lunch is at 12:15 today.', 'american-to-british'), '12.15');

    });

    //#11
    test('We watched the footie match for a while. to  American English', () => {
        assert.include(translator.translate('We watched the footie match for a while.', 'british-to-american'), 'soccer');

    });

    //#12
    test('Paracetamol takes up to an hour to work. to  American English', () => {
        assert.include(translator.translate('Paracetamol takes up to an hour to work.', 'british-to-american'), 'Tylenol');

    });

    //#13
    test('First, caramelise the onions. to  American English', () => {
        assert.include(translator.translate('First, caramelise the onions.', 'british-to-american'), 'caramelize');

    });

    //#14
    test('I spent the bank holiday at the funfair. to  American English', () => {
        assert.include(translator.translate('I spent the bank holiday at the funfair.', 'british-to-american'), 'carnival');

    });

    //#15
    test('I had a bicky then went to the chippy. to  American English', () => {
        assert.include(translator.translate('I had a bicky then went to the chippy.', 'british-to-american'), 'cookie');

    });

    //#16
    test('I\'ve just got bits and bobs in my bum bag. to  American English', () => {
        assert.include(translator.translate('I\'ve just got bits and bobs in my bum bag.', 'british-to-american'), 'odds and ends');

    });

    //#17
    test('The car boot sale at Boxted Airfield was called off. to  American English', () => {
        assert.include(translator.translate('The car boot sale at Boxted Airfield was called off.', 'british-to-american'), 'swap meet');

    });

    //#18
    test('Have you met Mrs Kalyani? to  American English', () => {
        assert.include(translator.translate('Have you met Mrs Kalyani?', 'british-to-american'), 'Mrs.');

    });

    //#19
    test('Prof Joyner of King\'s College, London. to  American English', () => {
        assert.include(translator.translate('Prof Joyner of King\'s College, London.', 'british-to-american'), 'Prof.');

    });

    //#20
    test('Tea time is usually around 4 or 4.30. to  American English', () => {
        assert.include(translator.translate('Tea time is usually around 4 or 4.30.', 'british-to-american'), '4:30');

    });

    //#21
    test('Highlight translation in Mangoes are my favorite fruit.', () => {
        assert.include(translator.translate('Mangoes are my favorite fruit.', 'american-to-british'), '<span class="highlight">favourite</span>');

    });

    //#22
    test('Highlight translation in I ate yogurt for breakfast.', () => {
        assert.include(translator.translate('I ate yogurt for breakfast.', 'american-to-british'), '<span class="highlight">yoghurt</span>');

    });

    //#23
    test('Highlight translation in We watched the footie match for a while.', () => {
        assert.include(translator.translate('We watched the footie match for a while.', 'british-to-american'), '<span class="highlight">soccer</span>');

    });

    //#24
    test('Highlight translation in Paracetamol takes up to an hour to work.', () => {
        assert.include(translator.translate('Paracetamol takes up to an hour to work.', 'british-to-american'), '<span class="highlight">Tylenol</span>');

    });
});
