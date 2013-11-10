var App;

module('Acceptances - EpisodesIndex', {
  setup: function(){
    fakehr.start();
    App = startApp();
  },
  teardown: function(){
    Ember.run(App, 'destroy');
    fakehr.reset();
  }
});

test('episodes index redirects to episodes/page/1', function(){
  expect(1);

  visit('/episodes')
  .httpRespond("get", RESTAdapterHost+"episodes?page=1", {episodes: []})
  .then(function(){
    var episodes = find('.episodes');
    ok(exists(episodes), "has episodes container");
  });
});

