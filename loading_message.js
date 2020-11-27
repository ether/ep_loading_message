const eejs = require('ep_etherpad-lite/node/eejs/');

const messages = [
  'A true adventurer uses Control key and S to save a revision',
  'Pads are automatically saved in real time',
  'The timeslider is a great way to see previous states of a pad',
  'Hundreds of plugins are available for Etherpad from the Plugin repository',
  'To get mew plugins visit /admin/plugins',
  "The Etherpad foundation is a not for profit organization that maintains the Etherpad software and it's community",
  'Etherpad is free and open source software, you can easily host your own Etherpad server on all major operating systems',
  'Get your own free Etherpad download at http://etherpad.org',
];

const before = "<div class='loading_message'>";
const during = randomLoadingMsg();
const after = '</div>';
const messageBlock = before + during + after;

function randomLoadingMsg() {
  return messages[Math.floor(Math.random() * messages.length)];
}

exports.eejsBlock_loading = function (hook_name, args, cb) {
  args.content += messageBlock;
};

exports.eejsBlock_styles = function (hook_name, args, cb) {
  args.content += "<link href='../static/plugins/ep_loading_message/static/css/loading_message.css' rel='stylesheet'>";
  return cb();
};
