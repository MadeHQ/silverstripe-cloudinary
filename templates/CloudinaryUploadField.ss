<ul id="ss-imageuploadfield-files" class="ss-uploadfield-files files" data-name="$Name" data-display-logic-masters="$DisplayLogicMasters" data-display-logic-eval="$DisplayLogic">
    <% if $CustomisedItems %>
        <% loop $CustomisedItems %>
            <li class="ss-uploadfield-item template-download" <% if $First %>id="{$Up.ID}-holder"<% end_if %> data-fileid="$ID" data-imageurl="$UploadFieldImageURL">
                <div class="ss-uploadfield-item-preview preview"><span>
					<img alt="$hasRelation" src="$UploadFieldThumbnailURL" />
				</span></div>
                <div class="ss-uploadfield-item-info">
                    <input type='hidden' value='$ID' name='{$Top.Name}[Files][]' />
                    <input type="hidden" class="sortHidden" name="{$Top.Name}[Files][][Sort]" value="$Sort" />
                    <label class="ss-uploadfield-item-name">
                        <span class="name">$Title.XML</span>
                        <span class="size">$Size</span>
                        <div class="clear"><!-- --></div>
                    </label>
                    <div class="ss-uploadfield-item-actions">
                        <% if $Top.isActive %>
                            $UploadFieldFileButtons
                        <% end_if %>
                        <img class="fieldHandler" src="$ModulePath(framework)/images/drag.gif" alt="Drag to rearrange order of fields">
                    </div>
                </div>
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
        <div class="ss-uploadfield-item-info">
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
        <div class="clear"><!-- --></div>
    </div>
<% end_if %>
