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
            if(typeof MadeUtils.ColorSelect != 'undefined'){
                MadeUtils.ColorSelect.UpdateColorSelectWithSelectionForCloudinary(fileData.fieldname);
            }
        }
    });

}(jQuery));