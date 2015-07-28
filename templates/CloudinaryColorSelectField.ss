<div class="ColourSelectField-holder" data-url="$LoadImageURL" data-field="$cloudName" data-imageurl="{$GetImageURL}">
    <% if $LoadImageURL %>
        <div class="imageHolder"></div>
        <div class="colours">
            Loading...
        </div>
    <% else %>
        <p class="remove-on-attach">Please attach an image to pick a colour</p>
    <% end_if %>

    <input $AttributesHTML />

</div>