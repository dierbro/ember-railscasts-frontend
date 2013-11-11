var ApplicationController = Ember.Controller.extend({
  currentUser: function(){
    return this.get('authManager').get("apiKey.user");
  }.property("authManager.apiKey.user.id"),

    isAuthenticated: function(){
      return this.get('authManager').isAuthenticated();
    }.property("authManager.apiKey")

});

export default ApplicationController;
