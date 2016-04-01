(function($){

    var cloudinaryURLField = null;

    $.entwine('ss', function($) {

        var loadImages = function(){

            var firstField = $('._js-cloudinary_holer:first');
            jQuery.cloudinary.config({
                cloud_name      : firstField.data('cloudname'),
                api_key         : firstField.data('api')
            });


            var browserWindow = $('._js-cloudinary-browser-window');
            var lastUpdated = browserWindow.data('lastUpdated');
            var date = new Date();
            var load = true;

            if(lastUpdated){
                var lastUpdateDate = new Date(lastUpdated);
                var minutes = (date - lastUpdateDate) / (1000 * 60);
                if(minutes < 5){
                    load = false;
                }
            }

            if(load){
                browserWindow.html('');
                $.getJSON('admin/cloudinary/getimagelist', function(data){
                    $.each(data, function(){
                        image = this;
                        image.thubmnail_url = jQuery.cloudinary.image(image.public_id + '.' + image.format, {
                            width       : 150,
                            height      : 150,
                            crop        : 'fill',
                            quality     : 50
                        });
                        var html = $('<div class="cloudinary__browser__window__item" data-url="' + this.url +'"><div class="image">/div></div>');
                        html.find('.image').html(image.thubmnail_url);
                        browserWindow.append(html);
                    });

                    var now = new Date();
                    browserWindow.data('lastUpdated', now);

                });
            }
        };

        var openCloudinaryBrowser = function() {

            var browser = $('._js-cloudinary-browser-window');
            if(browser.length == 0){

                $('body').append('<div class="_js-cloudinary-browser-holder"><div class="_js-cloudinary-browser-window cloudinary__browser__window"></div></div>');
                $('._js-cloudinary-browser-holder').dialog({
                    modal: true,
                    bgiframe: false,
                    autoOpen: true,
                    autoPosition: true,
                    minWidth: 700,
                    maxWidth: 900,
                    minHeight: 500,
                    maxHeight: 700,
                    widthRatio: 0.8,
                    heightRatio: 0.8,
                    resizable: true
                });

                loadImages();

            }
            else {
                $('._js-cloudinary-browser-holder').dialog('open');
                loadImages();

            }

        };


        $('.cloudinary__browser__window__item').entwine({
            onclick: function(event) {

                event.preventDefault();

                if(cloudinaryURLField){
                    cloudinaryURLField.val(this.data('url'));
                    cloudinaryURLField.urlChanged();
                    cloudinaryURLField = null;
                }


                $('._js-cloudinary-browser-holder').dialog('close');

                return false;
            }
        });

        $('._js-cloudinary-url').entwine({

            clearInfo: function() {
                var holder = this.closest('.field.cloudinaryfile');
                holder.find('input._js-attribute').val('');
            },

            onfocusout : function() {
                this.urlChanged();
            },

            urlChanged: function() {
                this.clearInfo();

                var holder = this.closest('.field.cloudinaryfile');
                var url = this.val();

                if(url){
                    $.getJSON('admin/cloudinary/getimagedata', {
                        'imageurl'       : url
                    }, function(data) {
                        holder.find('._js-attribute[name*="Credit"]').val(data.Credit);
                        holder.find('._js-attribute[name*="Caption"]').val(data.Caption);
                        holder.find('._js-attribute[name*="FileSize"]').val(data.FileSize);
                        if(data.IsRaw) {
                            holder.find('.cloudinary__fields').show();
                        }
                    });
                }
                else {
                    holder.find('.cloudinary__fields').hide();
                }
            }

        });

        $('._js-cloudinary-browser').entwine({

            onclick:  function(event){
                event.preventDefault();
                cloudinaryURLField = this.parent().find('._js-cloudinary-url');
                openCloudinaryBrowser();
                return false;
            }

        });

    });



})(jQuery);