var PageRoute = Ember.Route.extend({
  model: function(params){
    return this.store.find('episode', {page: params.page});
  },
  actions: {
    goToPage: function(page){
      this.transitionTo('episodes.page', page);
    }  
  }
});

export default PageRoute;

