var EpisodeDetailed = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr("string"),
  notes: DS.attr("string"),
  published_at: DS.attr("date"),
  position: DS.attr("number"),
  seconds: DS.attr("number"),
  permalink: DS.attr("string"),
  previous: DS.attr("string"),
  next: DS.attr("string"),
  slug: function(){
    return this.get("position")+"-"+this.get("permalink");
  }.property("permalink", "position")
});
Ember.Inflector.inflector.irregular('episode_detailed', 'episode_detailed');

export default EpisodeDetailed;

