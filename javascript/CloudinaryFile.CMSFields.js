cloudinary__browser__window__item(function($){



    $.entwine('ss', function($) {

        $('._js-attach-image-object').entwine({

            onclick:  function(e) {

                e.preventDefault();

                ss.setCloudinaryURLField($('#Form_ItemEditForm_URL'));
                ss.updateCMSFieldsBrowser(true);
                ss.openCloudinaryBrowser();

                return false;

            }

        });

        $('div._js-hide-on-load').entwine({

            onmatch : function(){
                this.hide();
            }

        });

    });


})(jQuery);