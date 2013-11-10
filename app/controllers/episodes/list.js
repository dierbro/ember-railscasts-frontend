var ListController = Ember.ArrayController.extend({
  noMoreItems: function(){
    return this.get("paginationInfo.currentPage")>=this.get("paginationInfo.totalPages");
  }.property("content.[]"),
    
  paginationInfo: function(){
    return this.store.metadataFor("episode");
  }.property("content"),

  actions:{
    more: function(){
      if(this.get("noMoreItems"))
        return;

      var self = this;
      self.set('isLoadingMore', true);
      this.store.find('episode', {page: (this.get("paginationInfo.currentPage")+1)}).then(
        function(){
          self.set('isLoadingMore', false);
        });
    }
  }
});

export default ListController;
