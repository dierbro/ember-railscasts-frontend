var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.resource('episodes', function() {
    this.route('page', {path: 'page/:page'});
    this.resource('episode', {path: '/:slug'}, function(){
      this.route('watch' );
      this.route('notes' );
      this.route('transcription' );
      this.resource('comments' );
      this.route('similar_episodes' );
    });
  });
});

export default Router;
