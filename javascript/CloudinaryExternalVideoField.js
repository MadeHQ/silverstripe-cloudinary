(function($){
    $.entwine('CloudinaryExternalVideoField', function($){
        $('button.video-attach-button').entwine({
            onmatch: function(){
                var forID = $(this).data('id') + '-holder';
                var videoID = $('#' + forID).find('input.field_id_value');
                if(videoID.val() > 0){
                    $(this).hide();
                }
            },
            onclick: function(){
                var forID = $(this).data('id') + '-holder';
                attachVideo($('#' + forID));
            }
        });

        $('.video-delete-button').entwine({
            onclick: function(){
                var button = $(this);
                var form = button.closest('form');
                $.ajax({
                    url     : button.data('deletelink'),
                    success : function(){
                        button.hide();
                        $('input[name="' + button.data('name') + '"]').val(0);
                        $('input[name="' + button.data('name') + '__URL"]').val('');
                        form.find('button.video-attach-button').show();
                        form.find('a.thumbnail-link').remove();
                    }
                });
                return false;
            }
        });

        function attachVideo(dom){

            var form = dom.closest('form');
            var input = dom.find('input.video-attach-field');
            var nameURLField = $(input).attr('name');
            var name = nameURLField.replace('__URL', '');
            var strValue = $(input).val();

            form.addClass('changed').addClass('loading');

            if(strValue == ''){
                $('input[name="' + name + '"]').val(0);
                form.removeClass('changed').removeClass('loading');
                return;
            }

            $.ajax({
                url: dom.find('input.video-processUrl').val(),
                data: {
                    'SourceURL': strValue
                },
                dataType: 'json',
                type: 'POST',
                success: function(data){
                    if(data.Success){
                        $('input[name="' + name + '"]').val(data.VideoID);
                        dom.find('input.video-attach-button').hide();
                        dom.data('imageurl', data.ColorSelectThumbnail);
                        $(data.Thumbnail).insertBefore(input.parent());
                        if(typeof MadeUtils.ColorSelect != 'undefined')
                            MadeUtils.ColorSelect.UpdateColorSelectWithSelectionForCloudinary(name);
                    }
                    form.removeClass('loading');
                }
            })
        }

    })
})(jQuery);