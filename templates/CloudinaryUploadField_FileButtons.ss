<% if $canEdit %>
    <button class="ss-uploadfield-item-edit ss-ui-button ui-corner-all" title="<% _t('UploadField.EDITINFO', 'Edit this file') %>" data-icon="pencil">
        <% _t('UploadField.EDIT', 'Edit') %>
        <span class="toggle-details">
		<span class="toggle-details-icon"></span>
	</span>
    </button>
<% end_if %>
<button class="ss-uploadfield-item-remove ss-ui-button ui-corner-all" title="<% _t('UploadField.REMOVEINFO', 'Remove this file from here, but do not delete it from the file store') %>" data-icon="plug-disconnect-prohibition">
    <% _t('UploadField.REMOVE', 'Remove') %></button>
<% if $UploadField.canAttachExisting %>
    <button class="ss-uploadfield-item-choose-another ss-uploadfield-fromfiles ss-ui-button ui-corner-all" title="<% _t('UploadField.CHOOSEANOTHERINFO', 'Replace this file with another one from the file store') %>" data-icon="network-cloud">
        <% _t('UploadField.CHOOSEANOTHERFILE', 'Choose another file') %></button>
<% end_if %>
