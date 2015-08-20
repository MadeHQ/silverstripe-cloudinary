(function($){
    $.entwine('ss', function($){
        $('button.video-attach-button').entwine({
            onclick: function(){
                var forID = $(this).data('id') + '-holder';
                var dom = $('#' + forID);

                var form = dom.closest('form');
                var input = dom.find('input.video-attach-field');
                var nameURLField = $(input).attr('name');
                var name = nameURLField.replace('__URL', '');
                var strValue = $(input).val();

                form.addClass('changed').addClass('loading');

                if(strValue == ''){
                    $('input[name="' + name + '[Files][]"]').val(0);
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
                            console.log(data)
                            $('input[name="' + name + '[Files][]"]').val(data.VideoID);
                            dom.find('input.video-attach-button').hide();
                            dom.data('imageurl', data.ColorSelectThumbnail);
                            dom.find('.ss-uploadfield-item-preview').removeClass('.ss-uploadfield-dropzone').html(data.Thumbnail);

                            if(typeof MadeUtils != 'undefined' && typeof MadeUtils.ColorSelect != 'undefined')
                                MadeUtils.ColorSelect.UpdateColorSelectWithSelectionForCloudinary(name);
                        }
                        form.removeClass('loading');
                    }
                })
            }
        });

    })
})(jQuery);