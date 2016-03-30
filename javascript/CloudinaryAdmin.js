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
            if(window.cloudinary){
                try {
                    cloudinary.openUploadWidget({
                        'cloud_name'        : this.data('cloud_name'),
                        'upload_preset'     : this.data('upload_preset'),
                        'cropping'          : 'server',
                        'folder'            : $('input[name="UploadPath"]').val(),
                        'keep_widget_open'  : true,
                        'resource_type'     : 'auto',
                        'sources'           : ['local', 'url'],
                        'theme'             : 'minimal'
                    }, function(error, result) {
                        console.log(error, result);
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
            if(!window.cloudinary){
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = '//widget.cloudinary.com/global/all.js';
                document.body.appendChild(script);
            }
        }

    });


})(jQuery);