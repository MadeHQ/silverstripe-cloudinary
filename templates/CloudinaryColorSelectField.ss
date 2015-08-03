<div class="ColourSelectField-holder" data-url="$LoadImageURL" data-field="$ReferenceField" data-imageurl="{$ColourSelectSource}">
    <div class="imageHolder"></div>
    <div class="colours">
        <ul>
            <% if $ColorPickerExists %>
                <li class="colour-picker" style="display: none">$ColorPicker</li>
            <% end_if %>
        </ul>
    </div>

    <% if not $ColorPickerExists %><input $AttributesHTML /><% end_if %>

</div>