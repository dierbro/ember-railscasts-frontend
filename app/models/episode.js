var Episode = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr("string"),
  published_at: DS.attr("date"),
  position: DS.attr("number"),
  seconds: DS.attr("number"),
  permalink: DS.attr("string"),
  comments: DS.attr("number"),
  //tags: DS.attr("array"),
  slug: function(){
    return this.get("position")+"-"+this.get("permalink");
  }.property("permalink", "position")
});

export default Episode;
