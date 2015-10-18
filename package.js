Package.describe({
  name: "hoihei:hompimpah-mod",
  summary: "Hompimpah modification package for telescopeapp",
  version: "0.0.1",
  git: "https://github.com/hoihei/hompimpah.git"
});

Package.onUse(function (api) {

  // ---------------------------------- 1. Core dependency -----------------------------------
  api.use('telescope:core');
  api.use('telescope:share');
  api.use('telescope:theme-hubble');
  api.use('telescope:tagline-banner');
  // api.use('telescope:embedly');

  // ---------------------------------- 2. Files to include ----------------------------------

  // client & server

  api.addFiles([
    'lib/callbacks.js',
    'lib/modules.js'
  ], ['client', 'server']);


    // client
    api.addFiles([
      'client/stylesheet/posts.scss',
      'client/templates/modules/post_domain.js'
    ], ['client']);

    // server

    // i18n languages (must come last)

    api.addFiles([
      'i18n/id.i18n.json'
    ], ['client', 'server']);


});
