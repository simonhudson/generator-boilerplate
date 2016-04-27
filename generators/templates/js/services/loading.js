/*
s_Loading
*/
var s_Loading = {

    loadingImgSelector: 'loading__img',

    showLoader: function(attachTo) {

        if (!attachTo)
            attachTo = $('.' + s_Modal.fullScreenSelector);

        if (!attachTo.find('.' + s_Loading.loadingImgSelector).length) {
            attachTo.prepend('<div class="' + s_Loading.loadingImgSelector + '"><span class="fa fa-spinner fa-pulse fa-2x"></span><p>Please wait</p></div>');
            $('.' + s_Modal.fullScreenSelector).addClass('is-open');
        }

    },

    removeLoader: function(removeFrom) {
        $('.' + s_Loading.loadingImgSelector).remove();
        $('.' + s_Modal.fullScreenSelector).removeClass('is-open');
    }

};