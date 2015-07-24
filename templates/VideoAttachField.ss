<div class="ss-uploadfield-item ss-uploadfield-addfile<% if $CustomisedItems %> borderTop<% end_if %>" id="{$ID}-holder">
    <div class="ss-uploadfield-item-info">
        <p>
            <input id="{$ID}" class="text video-attach-field" name="{$Name}__URL" type="text" value="{$VideoURL}"
                   placeholder="http://"/>
            <button data-id="{$ID}" class="btn btn-primary video-attach-button">Attach</button>
            <button data-id="{$ID}" class="ss-ui-button video-delete-button ui-corner-all" data-deletelink="{$DeleteLink}" data-name="{$Name}" <% if not $IsUploaded %>style="display: none;"<% end_if %>>Remove</button>
        </p>
        <input type="hidden" class="field_id_value" name="{$Name}" value="$Value"/>
        <input type="hidden" class="video-processUrl" name="{$Name}__Process" value="{$processURL}"/>
    </div>
</div>
