var App;

module('Acceptances - EpisodesPage', {
  setup: function(){
    fakehr.start();
    App = startApp();
  },
  teardown: function(){
    Ember.run(App, 'destroy');
    fakehr.reset();
  }
});

test('episodes/page/1 shows pagination element', function(){
  expect(1);

  visit('/episodes')
  .httpRespond("get", RESTAdapterHost+"episodes?page=1", {episodes: [], meta:{currentPage: 1, totalPages: 20}})
  .then(function(){
    var pagination = find('.episodes .pagination');
    ok(exists(pagination), "has pagination");
  });
});


