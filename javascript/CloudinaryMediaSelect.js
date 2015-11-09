(function($){
    $.entwine('ss', function($){
        $('select.media-select').entwine({
            onmatch: function() {
                selectMedia();
            },
            onload: function() {
                selectMedia();
            },
            onclick: function() {
                this.toggle();
            },
            onchange: function() {
                selectMedia();
            }

        });

        function selectMedia() {

            var mediaType = $("select.media-select");
            var parent = mediaType.parent()
            if(mediaType.val() == 'image') {
                parent.find('div.media-section-image').show();
                parent.find('div.media-section-video').hide();
            } else if(mediaType.val() == 'video') {
                parent.find('div.media-section-video').show();
                parent.find('div.media-section-image').hide();
            }

        }
    })
})(jQuery);