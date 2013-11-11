var ApplicationRoute = Ember.Route.extend({
  actions: {
    connect_with_github: function(){
      var height = 600;
      var width = 800;
      var left = 0;
      var top = 0;
      window.open("http://railscasts-backend.dierbro.com/auth/github", "_blank",
        "menubar=no,status=no,height=" + height + ",width=" + width +  ",left=" + left + ",top=" + top);
    },
    logout: function(){
      this.get("authManager").reset();
    }
  }
});

export default ApplicationRoute;
