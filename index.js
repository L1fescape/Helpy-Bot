var HelpyBot = require('./lib');

new HelpyBot({
  token: process.env.SLACK_TOKEN,
  debug: true,
  scripts: [
    'hello',
    'pugme',
    'ackbar',
    'smash',
    'thuglife'
  ]
});
