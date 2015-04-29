Package.describe({
  name: 'anbuselvan:accounts-ui-mailcheck',
  version: '0.0.4',
  // Brief, one-line summary of the package.
  summary: 'The famous Mailcheck package for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/anbuselvan/accounts-ui-mailcheck.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('jquery', 'client');

  api.addFiles([
    'vendor/mailcheck/src/mailcheck.min.js',
    'accounts-ui-mailcheck.css',
    'accounts-ui-mailcheck.js'
  ], 'client');

  api.export('MeteorMailCheck', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('anbuselvan:accounts-ui-mailcheck');
  api.addFiles('accounts-ui-mailcheck-tests.js');
});
