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
                holder.data('imageurl', $('#'+name).find('.ss-uploadfield-item:first-child').data('imageurl'));

                var imageURL = div.data('url') + '?current_image=' + holder.data('imageurl');
                var input = holder.find('input.cloudinarycolorselect');
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

                        var strHTML = '';
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

//                        holder.find('.colours').text('');
                        holder.find('.colours li.loading-text').replaceWith(strHTML);
                        holder.find('.colours li.colour-picker').show();
                    });
                }
            },

            PerformSelectColor: function(dom){
                var holder = $(dom).closest('.ColourSelectField-holder');
                var input = holder.find('input.cloudinarycolorselect');
                input.val($(dom).data('value'));
                holder.find('.colour-select').removeClass('selected');
                $(dom).addClass('selected');
                return false;
            },

            UpdateColorSelectWithSelection: function(dom){
                $(dom).find('.colours li.loading-text').replaceWith('<li class="loading-text">Loading....</li>');
                this.LoadColorSelectTiles(dom);
            },

            UpdateColorSelectWithSelectionForCloudinary: function(imageFieldName){
                var inputs = $('.ColourSelectField-holder[data-field="' + imageFieldName + '"]')
                if(inputs.length){
                    this.UpdateColorSelectWithSelection(inputs.parent().parent());
                }
            },

            RGBToHex: function(r,g,b){
                var bin = r << 16 | g << 8 | b;
                return (function(h){
                    return new Array(7-h.length).join("0")+h
                })(bin.toString(16).toUpperCase())
            },

            hexToRGB: function(hex){
                var r = hex >> 16;
                var g = hex >> 8 & 0xFF;
                var b = hex & 0xFF;
                return [r,g,b];
            }

        }


        $(".field.cloudinarycolorselect").entwine({
            onmatch: function() {
                MadeUtils.ColorSelect.UpdateColorSelectWithSelection(this);
            }
        });



        $("li.colour-select").entwine({
            onclick: function(){
                MadeUtils.ColorSelect.PerformSelectColor(this);
            }
        });

        $("input.colourpickerinput").entwine({
            onchange: function(){
                var hex = parseInt($(this).val().replace('#', '') ,16);
                var r = hex >> 16;
                var g = hex >> 8 & 0xFF;
                var b = hex & 0xFF;
//                var rgb = 'rgb('+r+','+g+','+b+')';
                var arr = MadeUtils.ColorSelect.hexToRGB(hex)
                var rgb = 'rgb('+arr[0]+','+arr[1]+','+arr[1]+')';
                $(this).val(MadeUtils.ColorSelect.RGBToHex(r, g, b));
                $(this).parent().parent().data('value', rgb);
            }
        });

    });
})(jQuery);



