<div class="ss-uploadfield-item-preview preview">
    <span><a href="$URL" target="_blank"><img alt="$hasRelation" src="$UploadFieldThumbnailURL" /></a></span>
</div>
<div class="ss-uploadfield-item-info">
    <input type='hidden' class="field_id_value" name='{$FieldName}[Files][]' value='$ID' />
    <input id="{$FieldID}" class="text video-attach-field" name="{$FieldName}__URL" type="text" value="{$URL}"/>
    <div class="ss-uploadfield-item-actions">
        <% if $isActive %>
            $UploadFieldFileButtons
        <% end_if %>
        <% if $CanReorder %>
            <input type="hidden" class="sortHidden" name="{$FieldName}[$ID]" value="$Sort" />
            <img class="fieldHandler" src="$ModulePath('framework')/images/drag.gif" alt="Drag to rearrange order of fields">
        <% end_if %>
    </div>
</div>