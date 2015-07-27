/**
 * Created by priyashantha on 6/30/14.
 */
if (typeof MadeUtils === 'undefined') { var MadeUtils = {};}


(function($) {
    $.entwine('ss', function($){



        MadeUtils.ColorSelect = {
            LoadColorSelectTiles : function(dom){
                var holder = $(dom);
                var div = holder.find('.ColourSelectField-holder');
                var name = div.data('field');

                holder.data('imageurl', $('input[name="'+name+ '__URL"]').val())

                var imageURL = div.data('url') + '?current_image=' + holder.data('imageurl');
                var input = holder.find('input.cloudinaryimagecolorselect');
                var selectedColor = input.val();
                if(imageURL){
                    var img = $('<img src="' + imageURL + '">');
                    holder.find('.imageHolder').html(img);
                    if(!holder.data('imageurl')){
                        holder.find('.imageHolder').html('');
                        holder.find('.colours').html('Please attach an image to pick a colour');
                    }

                    img.on('load', function(){
                        if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0){
                            holder.find('.imageHolder').html('');
                            holder.find('.colours').html('File not found, or not accessible');
                            return;
                        }

                        var colorThief = new ColorThief();
                        var color = colorThief.getColor(img[0]);
                        var palette = colorThief.getPalette(img[0], 20);

                        var strHTML = '<ul>';
                        var colorString = 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')';
                        var className = 'colour-select';
                        if(colorString == selectedColor)
                            className += ' selected';


                        strHTML += '<li style="background: ' + colorString + '" data-value="' + colorString+ '" class="'+ className +'"></li>';
                        for(key in palette){
                            color = palette[key];
                            colorString = 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')';

                            className = 'colour-select';
                            if(colorString == selectedColor)
                                className += ' selected';

                            strHTML += '<li style="background: ' + colorString + '" data-value="' + colorString+ '" class="'+ className +'"></li>';
                        }
                        strHTML += '</ul>';

                        holder.find('.colours').html(strHTML);
                    });
                }
            },

            PerformSelectColor: function(dom){
                var holder = $(dom).closest('.ColourSelectField-holder');
                var input = holder.find('input.cloudinaryimagecolorselect');
                input.val($(dom).data('value'));
                holder.find('.colour-select').removeClass('selected');
                $(dom).addClass('selected');
                return false;
            },

            UpdateColorSelectWithSelection: function(dom){
                $(dom).find('.colours').html('Loading...');
                this.LoadColorSelectTiles(dom);
            },

            UpdateColorSelectWithSelectionForCloudinary: function(imageFieldName){
                var inputs = $('.ColourSelectField-holder[data-field="' + imageFieldName + '"]')
                if(inputs.length){
                    this.UpdateColorSelectWithSelection(inputs.parent().parent());
                }
            }

        }


        $(".field.cloudinaryimagecolorselect").entwine({
            onmatch: function() {
                MadeUtils.ColorSelect.UpdateColorSelectWithSelection(this);
            }
        });



        $("li.colour-select").entwine({
            onclick: function(){
                MadeUtils.ColorSelect.PerformSelectColor(this);
            }
        });

    });
})(jQuery);



