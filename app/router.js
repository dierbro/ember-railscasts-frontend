var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.resource('episodes', function() {
    this.route('page', {path: 'page/:page'});
    this.resource('episode', {path: '/:slug'}, function(){});
  });
});

export default Router;
