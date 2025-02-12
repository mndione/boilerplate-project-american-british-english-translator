'use strict';

const { text } = require('body-parser');
const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const text = req.body.text;
      const locale = req.body.locale;
      //missing req fields  
      if(text === undefined || locale === undefined) {
        res.json({ error: 'Required field(s) missing' });
        return;
      }

      //empty text  
      if(text === '') {
        res.json({ error: 'No text to translate' });
        return;
      }

      //incorrect locale  
      if(locale !== 'american-to-british' && locale !== 'british-to-american') {
        res.json({ error: 'Invalid value for locale field' });
        return;
      }

      let textTransaleted = translator.translate(text, locale);
      
      if(textTransaleted == text){
        textTransaleted = "Everything looks good to me!";
      }

      res.json({text, translation: textTransaleted });

    });
};
