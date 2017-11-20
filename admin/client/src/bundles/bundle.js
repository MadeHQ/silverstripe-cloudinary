// (function($) {
//     $.fn.cloudinary = function () {
// console.log(this.length);
//     }
//
//     $('.madehq-cloudinary-forms-file').entwine().cloudinary();
// })(jQuery);

(function($) {
    $('.madehq-cloudinary-forms-file').entwine('ss', $ => {
        function addBrowseButtonToElement(el) {
            var button = $('<button>Browse</button>').on('click', ev => {
                $('<div class="madehq-cloudinary-browser">Loading Browser</div>').dialog();
            });
            el.find('[id$="_URL_Holder"] .form__field-holder').append(button);
        }

        return {
            onchange: function () {
console.log('Get file details and pre-populate');
            },
            onmatch: function () {
console.log('Add the browse buttons', this);
                addBrowseButtonToElement(this);
            }
        };
    });

    $('.madehq-cloudinary-browser').entwine('ss', $ => {
        return {
            'onmatch': () => {
console.log('browser loaded');
            }
        };
    });
})(jQuery);
