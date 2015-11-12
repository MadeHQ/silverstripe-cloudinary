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
        },

        _adjustMaxNumberOfFiles: function (operand) {
            if(this.element.hasClass('markdown-popup')) {
                if ( operand < 0) {
                    this._disableFileInputButton();
                }
            } else {
                this._super(operand);
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



}(jQuery));