<ul class="ss-uploadfield-files files" data-name="$Name" data-display-logic-masters="$DisplayLogicMasters" data-display-logic-eval="$DisplayLogic">
    <% if $CustomisedItems %>
        <% loop $CustomisedItems %>
            <li <% if $First %>id="{$Up.ID}-holder"<% end_if %> class="ss-uploadfield-item template-download" data-fileid="$ID" data-imageurl="$UploadFieldImageURL" data-reorder-url="$Top.ReorderURL">
                <% if $Top.CanReorder %>
                    <div class="media-reorder">
                        <input type="hidden" class="sortHidden" name="{$Top.Name}[$ID]" value="$Sort" />
                        <img class="fieldHandler" src="$ModulePath('framework')/images/drag.gif" alt="Drag to rearrange order of fields">
                    </div>
                <% end_if %>
                <div class="ss-uploadfield-item-preview preview">
                    <span><a href="$URL" target="_blank"><img alt="$hasRelation" src="$UploadFieldThumbnailURL" /></a></span>
                </div>
                <div class="ss-uploadfield-item-info">
                    <input type='hidden' class="field_id_value" name='{$Top.Name}[Files][]' value='$ID' />
                    <input id="{$FieldID}" class="text file-attach-field" name="{$Top.Name}__URL" type="text" value="{$URL}"/>
                    <div class="ss-uploadfield-item-actions">
                        <% if $Top.isActive %>
                            $UploadFieldFileButtons
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
<div class="ss-uploadfield-item ss-uploadfield-addfile" id="{$ID}-holder" data-imageurl="">
    <div class="ss-uploadfield-item-preview ss-uploadfield-dropzone">
        <div>
            Drop Area
            <span>Drag files here</span>
        </div>
    </div>
    <div class="ss-uploadfield-item-info">
        <div class="ss-uploadfield-item-attach">
            <input type='hidden' class="field_id_value" value='$ID' name='{$Name}[Files][]' />
            <input id="{$ID}" class="text file-attach-field" name="{$Name}__URL" type="text" value="{$URL}"/>
            <input type="hidden" class="file-processUrl" name="{$Name}__Process" value="{$ProcessURL}"/>

            <% if $canUpload %>
            <div class="ss-uploadfield-item-actions">
                <button class="ss-ui-button ui-corner-all file-attach-button" data-icon="chain--plus" data-id="{$ID}">attach</button>
            </div>
                <%--<button data-id="{$ID}" class="file-attach-button">Attach</button>--%>
            <% end_if %>
            <input id="$id" name="{$Name}[Uploads][]" class="$extraClass ss-uploadfield-fromcomputer-fileinput" data-config="$configString" type="hidden" />
        </div>
    </div>
    <div class="clear"><!-- --></div>
</div>