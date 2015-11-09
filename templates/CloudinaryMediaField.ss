<ul class="ss-uploadfield-files files" data-name="$Name" data-display-logic-masters="$DisplayLogicMasters" data-display-logic-eval="$DisplayLogic">
    <% if $CustomisedItems %>
        <% loop $CustomisedItems %>
            <li class="ss-uploadfield-item template-download" <% if $First %>id="{$Up.ID}-holder"<% end_if %> data-fileid="$ID" data-imageurl="$UploadFieldImageURL" data-reorder-url="$Top.ReorderURL">
                <% if $ClassName == 'CloudinaryImage' %>
                    <% include ImageItemProcessed FieldName=$Top.Name,CanReorder=$Top.CanReorder,isActive=$Top.isActive %>
                <% else %>
                    <% include VideoItemProcessed FieldID=$Top.ID,FieldName=$Top.Name,CanReorder=$Top.CanReorder,isActive=$Top.isActive %>
                <% end_if %>
                <div class="ss-uploadfield-item-editform includeParent">
                    <iframe frameborder="0" data-src="$UploadFieldEditLink" src="about:blank"></iframe>
                </div>
            </li>
        <% end_loop %>
    <% end_if %>
</ul>
<% if $canUpload || $canAttachExisting %>
    <div class="ss-uploadfield-item ss-uploadfield-addfile<% if $CustomisedItems %> borderTop<% end_if %>">
        <% if $canUpload %>
            <div class="ss-uploadfield-item-preview ss-uploadfield-dropzone ui-corner-all">
                <% if $multiple %>
                    <% _t('UploadField.DROPFILES', 'drop files') %>
                <% else %>
                    <% _t('UploadField.DROPFILE', 'drop a file') %>
                <% end_if %>
            </div>
        <% end_if %>
        <div class="ss-uploadfield-item-info media-select-holder">
            <select class="media-select dropdown">
                <option value="image">Image</option>
                <option value="video">Video</option>
            </select>
            <% include ImageFieldItem %>
            <% include VideoFieldItem %>
        </div>

        <div class="clear"><!-- --></div>
    </div>
<% end_if %>
