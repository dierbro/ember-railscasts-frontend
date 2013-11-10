var EpisodeNotesRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('episode', this.store.find('episode_detailed', this.modelFor("episode").get("slug")));
  },

});

export default EpisodeNotesRoute;


