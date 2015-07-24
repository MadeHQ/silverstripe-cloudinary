(function($){
    $.entwine('CloudinaryExternalVideoField', function($){
        $('button.video-attach-button').entwine({
            onclick: function(){
                var forID = $(this).data('id') + '-holder';
                attachVideo($('#' + forID));
            }
        });

        $('.video-delete-button').entwine({
            onclick: function(){
                var button = $(this);
                var form = button.closest('form');
                form.addClass('changed');
                form.addClass('loading');
                $.ajax({
                    url     : button.data('deletelink'),
                    success : function(){
                        button.hide();
                        $('input[name="' + button.data('name') + '"]').val(0);
                        $('input[name="' + button.data('name') + '__URL"]').val('');
                        form.removeClass('loading');
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
                    }
                    form.removeClass('loading');
                }
            })
        }

    })
})(jQuery);