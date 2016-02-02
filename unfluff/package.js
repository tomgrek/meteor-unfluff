
Package.describe({
  name: 'tomgrek:unfluff',
  version: '0.1.1',
  // Brief, one-line summary of the package.
  summary: 'Unfluff scraper packaged for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/tomgrek/meteor-unfluff',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "unfluff": "0.11.0"
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('underscore');

  api.addFiles('common.js', "server");
});
