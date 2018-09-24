(function($){

    var cloudinaryURLField = null;
    var cloudinaryCMSFields = false;
    var jQueryCloudinary = jQuery.cloudinary;

    $.entwine('ss', function($) {
        function getFileNameFromImageData(imageData) {
            return imageData.public_id;
        }

        var updateCMSFieldsBrowser = function(isCMS) {
            cloudinaryCMSFields = isCMS;
        };

        var setCloudinaryURLField = function(field) {
            cloudinaryURLField = field;
        };

        function getDurationFormat(seconds) {
            var fixed = seconds.toFixed();
            var hours = (Math.floor(seconds / 3600)).toString();
            if (hours.length < 2) {
                hours = '0' + hours;
            }
            seconds = seconds - (hours * 3600);
            var minutes = (Math.floor(seconds / 60)).toString();
            if (minutes.length < 2) {
                minutes = '0' + minutes;
            }
            seconds = (Math.round(seconds - (minutes * 60))).toString();
            if (seconds.length < 2) {
                seconds = '0' + seconds;
            }
            return hours + ':' + minutes + ':' + seconds;
        }

        var loadImages = function () {
            loadBrowserWindow('image', function (imageData) {
                return jQueryCloudinary.image(getFileNameFromImageData(imageData), {
                    width: 200,
                    height: 200,
                    crop: 'fit',
                    quality: 65,
                    format: 'jpg'
                });
            });
        }

        var loadVideos = function () {
            loadBrowserWindow('video', function (imageData) {
                return jQueryCloudinary.image(getFileNameFromImageData(imageData), {
                    width: 200,
                    height: 200,
                    crop: 'fit',
                    format: 'gif',
                    resource_type: 'video'
                });
            });
        }

        var loadFiles = function () {
            loadBrowserWindow('file', function (imageData) {
                return imageData.thumbnail_url ? '<img src="' + imageData.thumbnail_url + '">' : '';
            });
        }

        var loadAudios = function () {
            loadBrowserWindow('audio', function (imageData) {
                return '<audio controls src="' + imageData.secure_url + '">Your browser does not support the <code>audio</code> element.</audio>';
            });
        }

        var loadBrowserWindow = function(type, previewGenerator, folder_name){

            var firstField = $('._js-cloudinary_holer:first');
            jQueryCloudinary.config({
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
            if (browserWindow.data('loaded-type') !== type) {
                load = true;
            }
            browserWindow.attr('class').split(/\s/).forEach(function(cls) {
                if (cls.match(/^cloudinary-file-type-/)) {
                    browserWindow.removeClass(cls);
                }
            });
            browserWindow.addClass('cloudinary-file-type-' + type);
            if (load) {
                browserWindow.html('').removeClass('loaded');
                $.getJSON('admin/cloudinary/get' + type + 'list' + (folder_name ? '?folder='+folder_name : ""), function(data){
                    // Add the folders first
                    var folder_list = data.folders;
                    if (folder_name) {
                        var up_folder = folder_name.split('/').slice(0, -1).join('/');
                        // if we're not in the root directory, add the parent dir to the top fo the list
                        folder_list.unshift({ folder: up_folder, name: 'Parent Folder' });
                    }
                    $.each(folder_list, function(){
                        var folder = this;

                        var html = '<div class="cloudinary__browser__window__item folder">' +
                            '<span>' + folder.name + '</span>' +
                            '</div>';


                        var dom = $(html);

                        dom.click(function(){

                            loadBrowserWindow(type, previewGenerator, folder.folder);
                            return false;
                        });

                        browserWindow.append(dom);
                    });
                    $.each(data.resources, function(){
                        var image = this;
                        image.thubmnail_url = previewGenerator(image);

                        var date = new Date(image.created_at);

                        var html = '<div class="cloudinary__browser__window__item" data-url="' + this.secure_url +'">' +
                            '<div class="preview"><div class="plus">+</div></div>' +
                            '<div class="meta">' +
                                '<time>Uploaded: ' + date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + '</time>' +
                                '<p>' + getFileNameFromImageData(image) + '</p>' +
                                (image.format ? '<p class="format">' + image.format + '</p>' : '') +
                            '</div>' +
                            '</div>';


                        var dom = $(html);
                        dom.imagesLoaded(function(){
                            dom.addClass('loaded');
                        });
                        dom.find('.preview').append(image.thubmnail_url);
                        browserWindow.append(dom);
                    });

                    var now = new Date();
                    browserWindow.data('lastUpdated', now);
                    browserWindow.addClass('loaded');

                });
            }
        };

        var openCloudinaryBrowser = function(callBack) {
            if (!callBack) {
                alert('An error occured opening the cloudinary browser\nPlease make a note of the issue and report it');
                throw 'no callback for cloudinary browser';
            }

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
            } else {
                $('._js-cloudinary-browser-holder').dialog('open');
            }
            callBack();
        };


        $('.cloudinary__browser__window__item').entwine({
            onclick: function(event) {

                event.preventDefault();

                if(cloudinaryURLField){
                    cloudinaryURLField.val(this.data('url'));
                    cloudinaryURLField.data('url', this.data('url'));
                    cloudinaryURLField.urlChanged();
                    cloudinaryURLField = null;
                    $('._js-cloudinary-browser-holder').dialog('close');
                }

                return false;
            }
        });

        $('._js-cloudinary_holer').entwine({
            onmatch : function() {
                this.find('._js-hidden-data').hide();
            }
        });

        $('._js-cloudinary-url').entwine({

            onmatch: function() {
                this.data('url', this.val());
                var holder = this.closest('.field.cloudinaryfile');
                if($(this).data('isRaw') && !this.val()) {
                    holder.find('.cloudinary__fields').hide();
                }

                var $self = this;
                $($self).on('input', function(){
                    if($self.data('url') != $self.val()) {
                        $self.urlChanged();
                        $self.data('url', $self.val());
                    }
                });

            },

            onkeydown: function(e) {
                var code = e.keyCode || e.which;
                if(code == 13) {
                    e.preventDefault();
                    e.stopPropagation();
                    if(this.data('url') != this.val()) {
                        this.urlChanged();
                        this.data('url', this.val());
                    }
                    return false;
                }
                return true;
            },

            clearInfo: function() {
                var holder = this.closest('.field.cloudinaryfile');
                holder.find('input._js-attribute').val('');
            },

            onblur : function() {
                if(this.data('url') != this.val()) {
                    this.urlChanged();
                    this.data('url', this.val());
                }
            },

            urlChanged: function() {

                this.clearInfo();
                var input = this;
                var holder = input.closest('._js-cloudinary_holer');
                var url = input.val();
                var form = this.closest('form');
                if(url){
                    form.addClass('loading');
                    $.getJSON('admin/cloudinary/getfiledata', {
                        'fileurl': url
                    }, function(data) {
                        if(!data.Error) {
                            holder.find('.cloudinary__fields').addClass('cloudinary__fields--expanded');
                            holder.find('._js-attribute[name$="[FileSize]"]').val(data.FileSize);
                            holder.find('._js-attribute[name$="[Format]"]').val(data.Format);
                            if(cloudinaryCMSFields || input.hasClass('_js-cms-fields')){
                                // FileSize
                                var showHide;

                                if(data.IsRaw === false) {
                                    showHide = 'show';
                                    $('#Form_ItemEditForm_FileTitle_Holder').hide().val('');
                                    $('#Form_ItemEditForm_FileDescription_Holder').hide().val('');
                                } else {
                                    showHide = 'hide';
                                    $('#Form_ItemEditForm_FileTitle_Holder').show();
                                    $('#Form_ItemEditForm_FileDescription_Holder').show();
                                }
                                for(var key in data.Meta) {
                                    if (key === 'Duration' && data.Meta[key]) {
                                        data.Meta[key] = getDurationFormat(data.Meta[key]);
                                    }
                                    $('#Form_ItemEditForm_' + key + '_Holder')[showHide]();
                                    $('#Form_ItemEditForm_' + key).val(data.Meta[key]);
                                };


                            } else {
                                for(var key in data.Meta) {
                                    if (key === 'Duration' && data.Meta[key]) {
                                        data.Meta[key] = getDurationFormat(data.Meta[key]);
                                    }
                                    holder.find('._js-attribute[name*="' + key + '"]').val(data.Meta[key]);
                                };
                            }
                        } else {
                            alert(data.Error);
                            input.val('');
                        }
                        updateCMSFieldsBrowser(false);
                        form.removeClass('loading');
                        form.addClass('changed');
                    });
                }
                else {
                    holder.find('.cloudinary__fields').hide();
                }
            }

        });

        function getCallBackFn(jqElem)
        {
            fn = false;
            jqElem.attr('class').split(/\s/).forEach(function (cls) {
                var type;
                if (type = cls.match(/^cloudinary-type-(\w+)$/)) {
                    switch (type[1]) {
                        case 'File':
                            fn = loadFiles;
                            break;
                        case 'Audio':
                            fn = loadAudios;
                            break;
                        case 'Video':
                            fn = loadVideos;
                            break;
                        case 'Image':
                            fn = loadImages;
                            break;
                    }
                }
            });
            return fn;
        }

        $('._js-cloudinary-browser').entwine({

            onclick:  function(event){
                event.preventDefault();
                cloudinaryURLField = this.parent().find('._js-cloudinary-url');
                cb = getCallBackFn(this);
                openCloudinaryBrowser(cb);
                return false;
            }

        });


        ss.updateCMSFieldsBrowser = updateCMSFieldsBrowser;
        ss.openCloudinaryBrowser = openCloudinaryBrowser;
        ss.setCloudinaryURLField = setCloudinaryURLField;

    });



})(jQuery);
