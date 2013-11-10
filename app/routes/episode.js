var EpisodeRoute = Ember.Route.extend({
  model: function(params){
    return this.store.find('episode_detailed', params.slug);
  },
  setupController: function (controller, model) {
    var detailed =  this.store.find('episode_detailed', model.get("slug"));
    controller.set("model", detailed );
  },
  serialize: function(model) {
    return {
      slug: model.get("slug")
    };
  },
  actions: {
    goToEpisode: function(slug){
      var self = this;
      this.store.find('episode_detailed', slug)
      .then(function(episode){
        self.transitionTo('episode', episode);
      });
    }
  }
});

export default EpisodeRoute;

