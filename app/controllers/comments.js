var CommentsController = Ember.ArrayController.extend({
  commentsTree: function(){
    var roots = [], self = this;

    this.forEach(
      function(comment, index){
    
        if (comment.get('ancestry') !== null) {  
          self.store.find('comment', comment.get('ancestry')).then(
            function(parentComment){

              if(parentComment.get('children') === undefined){
                parentComment.set('children', []);
              }

              parentComment.get('children').pushObject(comment);

            });
        }else{
          roots.push(comment);
        }
      });

    return roots;
  }.property('content')
});
export default CommentsController;
