<div class="media-section-video" style="display: none">
    <input type='hidden' class="field_id_value" value='$ID' name='{$Name}[Files][]' />
    <input id="{$ID}" class="text video-attach-field" name="{$Name}__URL" type="text" value="{$URL}"/>
    <input type="hidden" class="video-processUrl" name="{$Name}__Process" value="{$processURL}"/>
    <% if $canUpload %>
        <label class="ss-uploadfield-fromcomputer ss-ui-button ui-corner-all" title="<% _t('UploadField.FROMCOMPUTERINFO', 'Upload from your computer') %>" data-icon="drive-upload">
            <% _t('UploadField.FROMCOMPUTER', 'Upload') %>
            <input id="$id" name="{$Name}[Uploads][]" class="$extraClass ss-uploadfield-fromcomputer-fileinput" data-config="$configString" type="file"<% if $multiple %> multiple="multiple"<% end_if %> />
        </label>

        <button data-id="{$ID}" class="video-attach-button">Attach</button>

    <% else %>
        <input id="$id" name="{$Name}[Uploads][]" class="$extraClass ss-uploadfield-fromcomputer-fileinput" data-config="$configString" type="hidden" />
    <% end_if %>
</div>