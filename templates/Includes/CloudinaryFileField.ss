<div class="cloudinary _js-cloudinary_holer" data-cloudname="{$CloudName}" data-api="{$ApiKey}">
    <div class="cloudinary__url">
        {$URLField}
        <% if $Type == 'cloudinaryimage' %>
            <a href="#" class="cloudinary__browser _js-cloudinary-browser ss-ui-action-constructive ss-ui-button ui-button ui-widget ui-state-default ui-corner-all new new-link ui-button-text-icon-primary">Choose Image</a>
        <% end_if %>
    </div>
    <div class="cloudinary__fields <% if $isPopuplated %>cloudinary__fields--expanded<% end_if %>">
        <% loop $DataFields %>
            <div class="cloudinary__fields__field">
                {$FieldHolder}
            </div>
        <% end_loop %>
    </div>

</div>