(function($) {
    $(document).ready(function(){

        var fields = {};

        fields.update = function(dom) {
            dom.sortable({
                handle: '.fieldHandler',
                cursor: 'pointer',
                items: 'li.ss-uploadfield-item',
                opacity: 0.6,
                revert: 'true',
                change : function (event, ui) {
                    dom.sortable('refreshPositions');
                },
                update : function (event, ui) {
                    var sort = 1;

                    var items = dom.find("li.ss-uploadfield-item");
                    var data = [];
                    items.each(function() {
                        var sortField = $(this).find(".sortHidden");
                        sortField.val(sort++);
                        data.push({
                            name: sortField.attr('name'),
                            value: sortField.val()
                        })
                    });
                    console.log(data)
                    $.ajax({
                        url: items.data('reorder-url'),
                        type: 'POST',
                        dataType: 'json',
                        data: data
                    })
                }
            });
        }

        $(".fieldHandler").live('hover', function() {
            var dom = $(this).closest('ul.ss-uploadfield-files');
            fields.update(dom);
        });

    });


    $.entwine('ss', function($){
        $('button.file-attach-button').entwine({
            onclick: function(){
                var dom = $(this).closest('div.ss-uploadfield-item');

                var form = dom.closest('form');
                var input = dom.find('input.file-attach-field');
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
                    url: dom.find('input.file-processUrl').val(),
                    data: {
                        'SourceURL': strValue
                    },
                    dataType: 'json',
                    type: 'POST',
                    success: function(data){

                        data.more_files ? input.val('') : dom.hide();
                        var ul = dom.parent().find('ul.ss-uploadfield-files');
                        var li = window.tmpl('ss-cloudinary-uploadfield-downloadtemplate')({
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


}(jQuery));