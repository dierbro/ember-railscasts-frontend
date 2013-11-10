var IndexRoute = Ember.Route.extend({
  redirect: function(){
    this.transitionTo('episodes');
  }
});

export default IndexRoute;
