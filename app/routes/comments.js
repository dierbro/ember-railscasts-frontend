/*
 * comments.js
 * Copyright (C) 2013 diego <diego@diego-ThinkPad-W530>
 *
 * Distributed under terms of the MIT license.
 */
var CommentsRoute = Ember.Route.extend({
    model: function(params) {
      var episodeId = this.modelFor("episode").get('id'); 
      return this.store.find('comment', {episode_id: episodeId});
    }
});

export default CommentsRoute;

