var Comment = DS.Model.extend({
  content: DS.attr("string"),
  ancestry: DS.attr("number")
});

export default Comment;
