(function ($) {
  // Handle user toolbar when user is admin and have admin toolbar enabled.
  Drupal.behaviors.pinnacle_parallax = {
	firstLoad: true,
        attach: function(context, settings) {
		if(this.firstLoad) {
		        $(window).bind('load resize', this.resizePoster);
			this.resizePoster();	
		}
		this.firstLoad = false;
	},
	resizePoster: function() {
		$posterLeft = $('.region-poster-left');
		$posterLeft.height($(window).height()-$posterLeft.offset().top-10);
	}
  }
})(jQuery);
