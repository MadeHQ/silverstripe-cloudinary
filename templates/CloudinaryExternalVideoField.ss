<div class="ss-uploadfield-item ss-uploadfield-addfile<% if $CustomisedItems %> borderTop<% end_if %>" id="{$ID}-holder" data-imageurl="$ColorSelectThumbnail.SourceURL">
    <div class="ss-uploadfield-item-info">
        <% if $Value %><a href="$VideoURL" class="thumbnail-link" target="_blank">$Thumbnail</a><% end_if %>
        <div class="buttons" <% if $Value %>style="margin-left: 120px" <% end_if %>>
            <label class="ss-uploadfield-item-name">
                <b>Enter youtube or vimeo video link here.</b>
            </label>
            <input id="{$ID}" class="text video-attach-field" name="{$Name}__URL" type="text" value="{$VideoURL}"
                   placeholder="http://"/>
            <button data-id="{$ID}" class="btn btn-primary video-attach-button">Attach</button>
            <button data-id="{$ID}" class="ss-ui-button video-delete-button ui-corner-all" data-deletelink="{$DeleteLink}" data-name="{$Name}" <% if not $IsUploaded %>style="display: none;"<% end_if %>>Remove</button>
        </div>
        <input type="hidden" class="field_id_value" name="{$Name}" value="$Value"/>
        <input type="hidden" class="video-processUrl" name="{$Name}__Process" value="{$processURL}"/>
    </div>
</div>