var natural = require('natural');
var util = require('util');
natural
  .BayesClassifier
  .load('./classifiers/classifier.json', null, function(err, classifier) {

    ['Back and vile in your smile, one that has no length',
      'Turning all pernicious mind on the dark inside',
      'Middle age, middle seas, tell me waters cease',
      'Someone tries to ripple us to new force soldiery',
      'Means apparently, rip entangled blood', 'Feelings blacken up',
      'What is real, roaming through the seed, till we adjourn',
      'Turning all pernicious mind on the dark inside',
      'Ready to scrape the wheel',
      'It was an honour to mark Remembrance Day with the Home Secretary on board HMS Bulwark, in Malta.',

      'Inside the EU it\'s British jobs for EU workers.',
      'A Leave vote in the referendum must mean leaving the EU - and nothing less.',
      'kill it with fire', 'consume the blood',
      'dark spirits will come for my soul', 'Spirit of the wheel',
      'Raw against the bone', 'snow', 'belgium', 'hitler', 'war', 'blood',
      'penis',
      'candy', 'tree', 'dark',
      'faint', 'revenge',
      'insane', 'weak', 'satan', 'frost', 'mountain', 'love', 'hate', 'anger',
      'steel', 'metal', 'sweat', 'body', 'victory', 'defeat', 'forest',
      'leaves',
      'dead', 'envy', 'tears'
    ].map(function(word) {
      console.log(util.format('`%s` : %s', word, classifier.classify(word)
        .toUpperCase()));
    });
  });
