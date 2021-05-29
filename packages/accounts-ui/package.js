Package.describe({
  summary: "Simple templates to add login widgets to an app",
  version: "1.4.0-beta230.4",
});

Package.onUse(api => {
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-ui-unstyled', 'client');
  api.use('less', 'client');

  api.addFiles(['login_buttons.less'], 'client');
});
