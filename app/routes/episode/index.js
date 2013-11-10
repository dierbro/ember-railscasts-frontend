var IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('episode.notes', this.modelFor('episode'));
  }
});

export default IndexRoute;

