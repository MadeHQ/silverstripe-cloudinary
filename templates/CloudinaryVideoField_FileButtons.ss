<% if $canEdit %>
    <button class="ss-uploadfield-item-edit ss-ui-button ui-corner-all" title="<% _t('UploadField.EDITINFO', 'Edit this file') %>" data-icon="pencil">
        <% _t('UploadField.EDIT', 'Edit') %>
        <span class="toggle-details">
		<span class="toggle-details-icon"></span>
	</span>
    </button>
<% end_if %>
<button class="ss-uploadfield-item-remove ss-ui-button ui-corner-all"
        title="<% _t('UploadField.REMOVEINFO', 'Remove this file from here, but do not delete it from the file store') %>"
        data-icon="plug-disconnect-prohibition">
    <% _t('UploadField.REMOVE', 'Remove') %>
</button>