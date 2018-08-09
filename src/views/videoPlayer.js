var VideoPlayerView = Backbone.View.extend({


  render: function() {
    this.$el.html(this.template(this.model));
    // this.$el.html('<div class="loading">Please wait...</div>');
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
