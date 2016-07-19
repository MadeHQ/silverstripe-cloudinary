<div class="cloudinary _js-cloudinary_holer" data-cloudname="{$CloudName}" data-api="{$ApiKey}" data-type="<% if $IsRaw %>raw<% else %>image<% end_if %>">
    <div class="cloudinary__url">
        {$URLField}
        <a href="#" class="cloudinary__browser _js-cloudinary-browser ss-ui-action-constructive ss-ui-button cloudinary-type-{$FileType} ui-button ui-widget ui-state-default ui-corner-all new new-link ui-button-text-icon-primary">Choose {$FileType}</a>
    </div>
    <div class="cloudinary__fields <% if $isPopuplated %>cloudinary__fields--expanded<% end_if %>">
        <% loop $DataFields %>
            <div class="cloudinary__fields__field <% if $CommonField %>_js-common<% else_if $RawFileField %>_js-raw-data<% else %>_js-image-data<% end_if %>">
                {$FieldHolder}
            </div>
        <% end_loop %>
    </div>

</div>
