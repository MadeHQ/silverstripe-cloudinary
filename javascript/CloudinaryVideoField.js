(function($){
    $.entwine('ss', function($){
        $('button.video-attach-button').entwine({
            onclick: function(){
                var dom = $(this).closest('div.ss-uploadfield-item');

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
                var self = this;
                $.ajax({
                    url: dom.find('input.video-processUrl').val(),
                    data: {
                        'SourceURL': strValue
                    },
                    dataType: 'json',
                    type: 'POST',
                    success: function(data){

                        data.more_files ? input.val('') : dom.hide();
                        var ul = dom.parent().find('ul.ss-uploadfield-files');
                        var li = window.tmpl('ss-cloudinary-videofield-downloadtemplate')({
                            files: [data]
                        });
                        ul.append(li);

                        if(typeof MadeUtils != 'undefined' && typeof MadeUtils.ColorSelect != 'undefined')
                            MadeUtils.ColorSelect.UpdateColorSelectWithSelectionForCloudinary(name);
                        form.removeClass('loading');
                    }
                })
            }

        });

    })
})(jQuery);