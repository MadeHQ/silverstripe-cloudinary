<div class="cloudinary-field__inner">
    <div class="cloudinary-field__loader">
        <span class="visually-hidden">Loading&helip;</span>
    </div>

    <div class="cloudinary-field__insert is-hidden">
        <button type="button" class="btn btn-primary cloudinary-field__button">
            <span class="btn__title">$ButtonLabel</span>
        </button>
    </div>

    <div class="cloudinary-field__update cloudinary-field__update is-hidden">
        <div class="cloudinary-field__media">
            <img class="cloudinary-field__preview">

            <div class="cloudinary-field__actions">
                <button type="button" class="cloudinary-field__action cloudinary-field__action--edit" title="Edit">
                    <span class="visually-hidden">Edit</span>
                </button>
                <button type="button" class="cloudinary-field__action cloudinary-field__action--remove" title="Remove">
                    <span class="visually-hidden">Remove</span>
                </button>
                <a class="cloudinary-field__action cloudinary-field__action--link" title="Original File" target="_blank">
                    <span class="visually-hidden">View</span>
                </a>
            </div>
        </div>

        <div class="cloudinary-field__meta">
            <% loop FieldList %>
                <% if IsHidden %>
                    $Field
                <% else %>
                    <div class="cloudinary-field__field">
                        <label for="$ID" class="cloudinary-field__label">$Title</label>
                        <div class="cloudinary-field__input">
                            $Field
                        </div>
                    </div>
                <% end_if %>
            <% end_loop %>
        </div>
    </div>
</div>
