'use strict';

exports.eejsBlock_loading = (hookName, args, cb) => {
  const messages = [
    'A true adventurer uses Control key and S to save a revision',
    'Pads are automatically saved in real time',
    'The timeslider is a great way to see previous states of a pad',
    'Hundreds of plugins are available for Etherpad from the Plugin repository',
    'To get mew plugins visit /admin/plugins',
    'The Etherpad foundation is a not for profit organization that maintains the Etherpad universe',
    'Etherpad is free and open source software, you can easily host your own Etherpad server',
    'Get your own free Etherpad download at http://etherpad.org',
  ];
  const randomLoadingMsg = () => messages[Math.floor(Math.random() * messages.length)];
  args.content += `<div class='loading_message'>${randomLoadingMsg()}</div>`;
  cb();
};

exports.eejsBlock_styles = (hookName, args, cb) => {
  const path = '../static/plugins/ep_loading_message/static/css/loading_message.css';
  args.content += `<link href='${path}' rel='stylesheet'>`;
  cb();
};
