(function($){

    var fetchSubFoldersOrCloudinaryButton = function(path, dom) {
        $.getJSON('admin/cloudinary/folders', {
            parent : path
        },function(data){
            $('input[name="UploadPath"]').val(path);
            dom.after(data.Dropdown);
            $(data.Button).insertBefore('input[name="UploadPath"]');
        });
    };


    $('a._js-start_upload').entwine({

        onclick: function(event){
            var form = $(this).closest('form');
            if(window.cloudinary){
                try {
                    cloudinary.openUploadWidget({
                        'cloud_name'        : this.data('cloud_name'),
                        'upload_preset'     : this.data('upload_preset'),
                        'folder'            : $('input[name="UploadPath"]').val(),
                        'resource_type'     : 'auto',
                        'sources'           : ['local', 'url'],
                        'theme'             : 'minimal'
                    }, function(error, result) {
                        if(!error && result.length) {
                            form
                                .find('.message')
                                .addClass('good')
                                .text('"'+result[0].original_filename+'" was successfully uploaded.')
                                .show();
                        }
                    });
                } catch(e){}
            }
            event.preventDefault();

        }

    });


    $('select._js-folder-select').entwine({

        onchange: function(){

            var field = this.closest('div.field');
            var dropdowns = field.nextAll('div._js-folder-select');
            dropdowns.remove();

            $('._js-start_upload').remove();

            fetchSubFoldersOrCloudinaryButton(this.val(), field);
            this.closest('form').removeClass('changed');
        }

    });

    $('#cloudinary-cms-content').entwine({

        onmatch : function() {
            var scriptSrc = '//widget.cloudinary.com/global/all.js';
            if($('script[src="' + scriptSrc + '"]')){
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = scriptSrc;
                document.body.appendChild(script);
            }
        }

    });


})(jQuery);
