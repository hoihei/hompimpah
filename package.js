Package.describe({
  name: "hoihei:hompimpah-theme",
  summary: "Hompimpah theme package",
  version: "0.0.1",
  git: "https://github.com/hoihei/hompimpah.git"
});

Package.onUse(function (api) {

  // ---------------------------------- 1. Core dependency -----------------------------------
  api.use('telescope:core');

  // ---------------------------------- 2. Files to include ----------------------------------

  // client & server

  api.addFiles([
    'lib/callbacks.js'
  ], ['client', 'server']);


    // client

    // server

    // i18n languages (must come last)

    api.addFiles([
      'i18n/id.i18n.json'
    ], ['client', 'server']);


});
