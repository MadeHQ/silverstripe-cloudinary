<div id="$HolderID" $AttributesHTML>
	<% if Title %>
        <span class="left" for="$ID">$Title</span>
    <% end_if %>

    <div class="middleColumn">
        $Field
    </div>

	<% if RightTitle %>
        <label class="right" for="$ID">$RightTitle</label>
    <% end_if %>

	<% if Message %>
        <span class="message $MessageType">$Message</span>
    <% end_if %>

	<% if Description %>
        <span class="description">$Description</span>
    <% end_if %>
</div>
