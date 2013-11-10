var EpisodeController = Ember.ObjectController.extend({
  playing: false,
  actions: {
    play: function(){
      this.set("playing", true);
    },
    download: function(){
      window.open("http://video-js.zencoder.com/oceans-clip.mp4", "_blank");
    }
  }
});
export default EpisodeController;


