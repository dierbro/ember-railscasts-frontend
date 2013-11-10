var EpisodeWatchRoute = Ember.Route.extend({
  activate: function(){
    this.controllerFor("episode").set("playing", true);
  }
});

export default EpisodeWatchRoute;



