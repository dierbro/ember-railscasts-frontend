var EpisodesPageController = Ember.ArrayController.extend({
  paginationInfo: function(){
    return this.store.metadataFor("episode");
  }.property("content")
});

export default EpisodesPageController;
