(function($) {
    $.widget('blueimpCloudinary.fileupload', $.blueimpUIX.fileupload, {
        _onDone: function (result, textStatus, jqXHR, options) {
            $.blueimpUIX.fileupload.prototype._onDone.call(this, result, textStatus, jqXHR, options);
            var fileData = result[0];
            this.InitColorSelectData(fileData);
        },

        attach: function(data){
            $.blueimpUIX.fileupload.prototype.attach.call(this, data);
            var fileData = data.files[0];
            this.InitColorSelectData(fileData);
            this._trigger('attach', null);

        },

        InitColorSelectData: function(fileData){
            var elem = this.element;
            var uploadItem = elem.find('.ss-uploadfield-item:first-child');
            uploadItem.attr('id', elem.closest('form').attr('id') + '_' + fileData.fieldname + '-holder');
            uploadItem.data('imageurl', fileData.colorselect_url);
            if(typeof MadeUtils != 'undefined' && typeof MadeUtils.ColorSelect != 'undefined'){
                MadeUtils.ColorSelect.UpdateColorSelectWithSelectionForCloudinary(fileData.fieldname);
            }
        }
    });

    $('div.ss-uploadfield.display-logic, div.ss-uploadfield.display-logic-master').entwine({
        getFormField: function() {
            var field = this._super();
            if(field.length > 0){
                return field;
            }else{
                return this.find('[data-name='+this.getFieldName()+']');
            }
        }

    });

    $(document).ready(function(){

        var fields = {};

        fields.update = function() {
            $("#ss-imageuploadfield-files").sortable({
                handle: '.fieldHandler',
                cursor: 'pointer',
                items: 'li.ss-uploadfield-item',
                opacity: 0.6,
                revert: 'true',
                change : function (event, ui) {
                    $("#ss-imageuploadfield-files").sortable('refreshPositions');
                },
                update : function (event, ui) {
                    var sort = 1;

                    $("li.ss-uploadfield-item").each(function() {
                        $(this).find(".sortHidden").val(sort++);
                    });
                }
            });
        }

        $(".fieldHandler").live('hover', function() {
            fields.update();
        });

        fields.update();

    });



}(jQuery));