var EndlessScroll = Ember.Component.extend({
    tagName: 'div',
    classNames: ['endless-scroll'],
    didInsertElement: function() {
      var self = this;
      this.$().bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
        self.get("targetObject").send("more");
      });

    },
    actions: {
      more: function(page_number){
        this.get("targetObject").send("more");
      }
    }
});

export default EndlessScroll;
