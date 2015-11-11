var natural = require('natural');
var common = require('./corpus/common')
  .common;
var path = require('path');

var classifier = new natural.BayesClassifier();

[{
  name: 'slayer',
  corpus: 'slayer.json'
}, {
  name: 'carcass',
  corpus: 'carcass.json'
}, {
  name: 'immortal',
  corpus: 'immortal.json'
}, {
  name: 'manowar',
  corpus: 'manowar.json'
}]
.map(function(genre) {
  var sentences = require(path.resolve('./corpus', genre.corpus))
    .text
    .map(function(sentence) {
      return sentence
        .toLowerCase()
        .split(' ')
        .filter(function(word) {
          return word.length && common.indexOf(word) === -1
        })
        .join(' ');
    })
    .map(function(sentence) {
      classifier.addDocument(sentence, genre.name);
    });
});

classifier.train();

classifier.save('./classifiers/classifier.json', function(err, classifier) {
    console.log('saved classifiers');
});
