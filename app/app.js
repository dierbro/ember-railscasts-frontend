import Resolver from 'resolver';
import AuthManager from 'appkit/utils/auth_manager';

var App = Ember.Application.extend({
  LOG_ACTIVE_GENERATION: true,
  LOG_MODULE_RESOLVER: true,
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'appkit', // TODO: loaded via config
  Resolver: Resolver.default,
  authenticationComplete: function(api_key, user_id){
    var store = this.__container__.lookup("store:main");
    var user = store.find("user", user_id);
    this.__container__.lookup("authManager:main").authenticate(api_key, user);
  }

});

Ember.RSVP.configure('onerror', function(error) {
  // ensure unhandled promises raise awareness.
  // may result in false negatives, but visibility is more imporant
  if (error instanceof Error) {
    Ember.Logger.assert(false, error);
    Ember.Logger.error(error.stack);
  }
});

App.initializer({
  name: 'authManager',
  after: 'store',
  initialize: function(container, application) {
    application.register('authManager:main', AuthManager);
    container.lookup('authManager:main');
    application.inject('route', 'authManager', 'authManager:main');
    application.inject('controller', 'authManager', 'authManager:main');
    window.addEventListener("message", function(e){
      if(e.origin==="http://railscasts-backend.dierbro.com")
        application.authenticationComplete(e.data.api_key, e.data.user_id);
    }, false);
  }
});

Ember.Handlebars.helper('pretty-date', function(date){
  return moment(date).format('D MMMM YYYY');
});

export default App;
