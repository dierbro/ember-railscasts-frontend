var EpisodeVideo = Ember.Component.extend({
  tagName: 'video',
  classNames: ["video-js", "vjs-default-skin"],
    attributeBindings: ['controls', 'preload', 'width', 'height', 'poster'],
  controls: '',
  preload: 'auto',
  width: '100%',
  poster: "http://video-js.zencoder.com/oceans-clip.png",
  ratio: 16/9
});

export default EpisodeVideo;

