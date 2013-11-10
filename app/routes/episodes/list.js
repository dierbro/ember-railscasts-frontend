var ListRoute = Ember.Route.extend({
  model: function(params){
    return this.store.find('episode');
  },
  actions: {
    goToList: function(page){
      this.transitionTo('episodes.page', page);
    }  
  }
});

export default ListRoute;


