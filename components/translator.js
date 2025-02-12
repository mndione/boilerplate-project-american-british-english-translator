const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    constructor(){
        this.translate = this.translate.bind(this);
        this.timeTranslate = this.timeTranslate.bind(this);
        // this.timeReplace = this.timeReplace.bind(this);
        this.textTranslate = this.textTranslate.bind(this);
        this.textReplace = this.textReplace.bind(this);
    }
    
    translate(text, locale){
        // apply time translate
        text = this.timeTranslate(text, locale);

        //apply title translate
        text = this.textTranslate(text, locale, americanToBritishTitles);
        
        //apply spelling translate
        text = this.textTranslate(text, locale, americanToBritishSpelling);
        
        //apply only
        if(locale === 'american-to-british'){
            text = this.textTranslate(text, locale, americanOnly, 1);
        }
        else{
            text = this.textTranslate(text, locale, britishOnly, 1);
        }
        
        return text;
    }

    timeTranslate(text, locale){
        let regex;
        let separator;
        if(locale === 'american-to-british'){
            regex = /([\d]{1,2}):([\d]{2})/g;
            separator = '.';
        }
        else{
            regex = /([\d]{1,2}).([\d]{2})/g;
            separator = ':';
        }
        return text.replaceAll(regex, "<span class='highlight'>$1"+separator+"$2</span>");
    }
    /*
    timeReplace(separator) {
        return (match, p1, p2, offset, string) => p1 + separator + p2;
    }
    */
   
    textTranslate(text, locale, dictionnary, only = 0){
        let search;
        let replacement;
        
        if(only || locale === 'american-to-british'){
            search = Object.keys(dictionnary);
            replacement = Object.values(dictionnary);
        }
        else{
            search = Object.values(dictionnary);
            replacement = Object.keys(dictionnary);
        }
        
        if(dictionnary == americanToBritishTitles){
            replacement = replacement.map(el => el.substring(0,1).toUpperCase() + el.substring(1).toLowerCase());
        }
        
        for(let i=0; i<search.length; i++){
            //console.log(search[i], replacement[i], text.replaceAll(search[i], replacement[i]));
            const regex = new RegExp(`(\\w*)(${search[i]})(\\w*)`,'gi');
            //console.log(text.match(regex), regex, text);
            text = text.replace(regex,  this.textReplace(replacement[i]));
        }

        return text;
   }

   textReplace(replacement){
    return (match, p1, p2, p3, offset, string) => {
     if(match==p2) return "<span class='highlight'>" + replacement + "</span>"
     return match;
    }
  }
}

module.exports = Translator;