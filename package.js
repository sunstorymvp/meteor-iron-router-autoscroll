Package.describe({
  name: 'sunstory:meteor-iron-router-autoscroll',
  summary: 'Scroll window to top on route change.',
  version: '1.0.0',
  git: 'https://github.com/sunstorymvp/meteor-iron-router-autoscroll.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use(['coffeescript', 'jquery', 'underscore', 'iron:router']);
  api.addFiles('meteor-iron-router-autoscroll.coffee');
});
