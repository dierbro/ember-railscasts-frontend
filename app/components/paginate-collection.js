var PaginateCollection = Ember.Component.extend({
    tagName: 'ul',
    classNames: ['pagination'],
    pageWindow: 5,
    totalPages: function(){
      return  this.get("targetObject.paginationInfo.totalPages");
    }.property("targetObject.paginationInfo"),

    currentPage: function(){
      return  this.get("targetObject.paginationInfo.currentPage");
    }.property("targetObject.paginationInfo"),

    hasPrev: function(){
      return (this.get("currentPage")-1) > 0;
    }.property("currentPage"),

    hasNext: function(){
      return (this.get("currentPage")+1) <= this.get("totalPages");
    }.property("targetObject.paginationInfo"),

    pages: function(){
      var currentPage = this.get("currentPage");
      var totalPages = this.get("targetObject.paginationInfo.totalPages");
      var pageWindow = this.get("pageWindow")

        var leftWindow = currentPage - 1;
      leftWindow = leftWindow > pageWindow ? pageWindow : leftWindow;

      var rightWindow = (totalPages-currentPage);
      rightWindow = rightWindow > pageWindow ? pageWindow : rightWindow;

      if(leftWindow < 5)
        rightWindow += pageWindow-leftWindow;
      else if(rightWindow < 5)
        leftWindow += pageWindow-rightWindow;

      var leftLimit = currentPage-leftWindow;
      var rightLimit = currentPage+rightWindow+1;

      var _pages = [];
      for(var i=leftLimit; i < rightLimit; i++)
        _pages.pushObject(i);

      _pages = _pages.uniq().reject(function(item){
        return (item < 1) || (item > totalPages);
      }).map(function(item){
        return {number: item, isCurrent: item === currentPage};
      });

        return _pages;

    }.property('targetObject.paginationInfo'),

    actions: {
      goToPage: function(page_number){
        this.get("targetObject").send("goToPage", page_number);
      },
      prev: function(){
        if(this.get("hasPrev"))
          this.get("targetObject").send("goToPage", this.get("currentPage")-1);
      },
      next: function(){
        if(this.get("hasNext"))
          this.get("targetObject").send("goToPage", this.get("currentPage")+1);
      }
    }
});

export default PaginateCollection;
