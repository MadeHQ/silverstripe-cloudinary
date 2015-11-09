<div class="ss-uploadfield-item-preview preview">
    <span><img alt="$hasRelation" src="$UploadFieldThumbnailURL" /></span>
</div>
<div class="ss-uploadfield-item-info">
    <input type='hidden' value='$ID' name='{$FieldName}[Files][]' />
    <label class="ss-uploadfield-item-name">
        <span class="name">$Title.XML</span>
        <span class="size">$Size</span>
        <div class="clear"><!-- --></div>
    </label>
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