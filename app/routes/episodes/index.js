var IndexRoute = Ember.Route.extend({
  redirect: function(){
    this.transitionTo('episodes.page', 1);
  }
});

export default IndexRoute;

