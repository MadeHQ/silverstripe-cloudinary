<div class="media-section-image">
    <label class="ss-uploadfield-item-name">
        <% if $multiple %>
            <b><% _t('UploadField.ATTACHFILES', 'Attach files') %></b>
        <% else %>
            <b><% _t('UploadField.ATTACHFILE', 'Attach a file') %></b>
        <% end_if %>
        <% if $canPreviewFolder %>
            <small>(saves into Cloudinary)</small>
        <% end_if %>
    </label>
    <% if $canUpload %>
        <label class="ss-uploadfield-fromcomputer ss-ui-button ui-corner-all" title="<% _t('UploadField.FROMCOMPUTERINFO', 'Upload from your computer') %>" data-icon="drive-upload">
            <% _t('UploadField.FROMCOMPUTER', 'Upload') %>
            <input id="$id" name="{$Name}[Uploads][]" class="$extraClass ss-uploadfield-fromcomputer-fileinput" data-config="$configString" type="file"<% if $multiple %> multiple="multiple"<% end_if %> />
        </label>
    <% else %>
        <input id="$id" name="{$Name}[Uploads][]" class="$extraClass ss-uploadfield-fromcomputer-fileinput" data-config="$configString" type="hidden" />
    <% end_if %>

    <% if $canAttachExisting %>
        <button class="ss-uploadfield-fromfiles ss-ui-button ui-corner-all" title="<% _t('UploadField.FROMCOMPUTERINFO', 'Select from files') %>" data-icon="network-cloud"><% _t('UploadField.FROMFILES', 'From files') %></button>
    <% end_if %>
    <% if $canUpload %>
        <% if not $autoUpload %>
            <button class="ss-uploadfield-startall ss-ui-button ui-corner-all" data-icon="navigation"><% _t('UploadField.STARTALL', 'Start all') %></button>
        <% end_if %>
    <% end_if %>
    <div class="clear"><!-- --></div>
</div>