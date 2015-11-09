<ul class="ss-uploadfield-files files" data-name="$Name" data-display-logic-masters="$DisplayLogicMasters" data-display-logic-eval="$DisplayLogic">
    <% if $CustomisedItems %>
        <% loop $CustomisedItems %>
            <li <% if $First %>id="{$Up.ID}-holder"<% end_if %> class="ss-uploadfield-item template-download" data-fileid="$ID" data-imageurl="$UploadFieldImageURL" data-reorder-url="$Top.ReorderURL">
                <% include VideoItemProcessed FieldID=$Top.ID,FieldName=$Top.Name,CanReorder=$Top.CanReorder,isActive=$Top.isActive %>
                <div class="ss-uploadfield-item-editform includeParent">
                    <iframe frameborder="0" data-src="$UploadFieldEditLink" src="about:blank"></iframe>
                </div>
            </li>
        <% end_loop %>
    <% end_if %>
</ul>
<% if $canUpload %>
    <div class="ss-uploadfield-item ss-uploadfield-addfile<% if $CustomisedItems %> borderTop<% end_if %>" id="{$ID}-holder" data-imageurl="">
        <% if $canUpload %>
            <div class="ss-uploadfield-item-preview ss-uploadfield-dropzone ui-corner-all">
                <% if $multiple %>
                    <% _t('UploadField.DROPFILES', 'drop files') %>
                <% else %>
                    <% _t('UploadField.DROPFILE', 'drop a file') %>
                <% end_if %>
            </div>
        <% end_if %>
        <div class="ss-uploadfield-item-info">
            <% include VideoFieldItem %>
        </div>
        <div class="clear"><!-- --></div>
    </div>
<% end_if %>
