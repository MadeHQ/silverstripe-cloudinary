<div class="ColourSelectField-holder" data-url="$LoadImageURL" data-field="$ReferenceField" data-imageurl="{$SourceImageURL}">
    <% if $LoadImageURL %>
        <div class="imageHolder"></div>
        <div class="colours">
            <ul>
                <li class="loading-text">Loading....</li>
                <% if $ColorPickerExists %>
                    <li class="colour-picker" style="display: none">$ColorPicker</li>
                <% end_if %>
            </ul>
        </div>
    <% else %>
        <p class="remove-on-attach">Please attach an image to pick a colour</p>
    <% end_if %>

    <% if not $ColorPickerExists %><input $AttributesHTML /><% end_if %>

</div>