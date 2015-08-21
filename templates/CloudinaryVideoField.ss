<ul class="ss-uploadfield-files files" data-name="$Name" data-display-logic-masters="$DisplayLogicMasters" data-display-logic-eval="$DisplayLogic">
    <% if $CustomisedItems %>
        <% loop $CustomisedItems %>
            <li <% if $First %>id="{$Up.ID}-holder"<% end_if %> class="ss-uploadfield-item template-download" data-fileid="$ID" data-imageurl="$UploadFieldImageURL" data-reorder-url="$Top.ReorderURL">
                <div class="ss-uploadfield-item-preview preview"><span>
					<a href="$URL" target="_blank"><img alt="$hasRelation" src="$UploadFieldThumbnailURL" /></a>
				</span></div>
                <div class="ss-uploadfield-item-info">
                    <input type='hidden' class="field_id_value" name='{$Top.Name}[Files][]' value='$ID' />
                    <input id="{$Top.ID}" class="text video-attach-field" name="{$Top.Name}__URL" type="text" value="{$URL}"/>
                    <div class="ss-uploadfield-item-actions">
                        <% if $Top.isActive %>
                            $UploadFieldFileButtons
                        <% end_if %>
                        <% if $Top.CanReorder %>
                            <input type="hidden" class="sortHidden" name="{$Top.Name}[$ID]" value="$Sort" />
                            <img class="fieldHandler" src="$ModulePath('framework')/images/drag.gif" alt="Drag to rearrange order of fields">
                        <% end_if %>

                    </div>
                </div>
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
            <input type='hidden' class="field_id_value" value='$ID' name='{$Top.Name}[Files][]' />
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
        <div class="clear"><!-- --></div>
    </div>
<% end_if %>
