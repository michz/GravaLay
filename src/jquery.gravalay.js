(function ($) {
    $.fn.gravalay = function() {
        return this.each(function() {
            // Do something to each element here.

            var hash = $(this).data('gravalayHash');

            if (hash === undefined) {
                return;
            }

            var size = $(this).data('gravalaySize');
            if (size === undefined) {
                size = $(this).width();
            }

            var url = 'https://www.gravatar.com/avatar/' + hash + '.png?s=' + size + '&d=404';
            var that = this;

            // Check if image exists and replace if it does
            jQuery.ajax({
                url:      url,
                dataType: 'text',
                type:     'HEAD',
                success: function() {
                    $(that).attr('src', url);
                }
            });
        });
    };
}(jQuery));
