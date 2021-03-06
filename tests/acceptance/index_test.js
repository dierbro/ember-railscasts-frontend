var App;

module('Acceptances - Index', {
  setup: function(){
    fakehr.start();
    App = startApp();
  },
  teardown: function(){
    Ember.run(App, 'destroy');
    fakehr.reset();
  }
});

test('index redirects to episodes', function(){
  expect(1);

  visit('/')
  .httpRespond("get", RESTAdapterHost+"episodes?page=1", {episodes: []})
  .then(function(){
    var episodes = find('.episodes');
    ok(exists(episodes), "has episode container");
  });
});
