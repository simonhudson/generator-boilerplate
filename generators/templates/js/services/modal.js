/*
s_Modal overlay
*/
var s_Modal = {

    displays_ModalAt: 800,
    fullScreenSelector: 'js-modal__overlay--full-screen',

    init: function() {
        $('.js-modal__trigger').each(function() {
            $(this).on('click', function() {
                modalObj = {
                    overlay: $('.js-modal__overlay'),
                    trigger: $(this),
                    openBodyClass: 'no-scroll',
                    url: $(this).data('modal-content')
                };
                s_Modal.handleViewportViews(modalObj);
                return s_Window.getViewportWidth() <= s_Modal.displays_ModalAt;
            });
        });
    },

    handleViewportViews: function(modalObj) {
        if (s_Window.getViewportWidth() > s_Modal.displays_ModalAt)
            s_Modal.creates_Modal(modalObj);
    },

    creates_Modal: function(modalObj) {
        s_Loading.showLoader();
        modalObj.overlay.addClass('is-open');
        modalObj.overlay.prepend('<div class="js-modal__content-wrap"><div class="js-modal__content"></div></div>');
        modalObj.contentWrap = $('.js-modal__content-wrap');
        modalObj.content = $('.js-modal__content');
        modalObj.overlay.height(Math.max($(document).height(), $(window).height()));
        s_Modal.preventScrolling(modalObj);
    },

    preventScrolling: function(modalObj) {
        $('body').addClass(modalObj.openBodyClass);
        s_Modal.getContent(modalObj);
    },

    getContent: function(modalObj) {
        s_Loading.showLoader(modalObj.contentWrap);
        var contentToLoad;
        $.ajax({
            url: modalObj.url,
            type: 'get',
            success: function(data) {
                contentToLoad = $(data).find('.js-modal__content-to-load').html();
                s_Modal.loadContent(modalObj, contentToLoad);
            },
            error: function() {
                s_StatusMessage.create('error', modalObj.trigger.data('modal-load-error'), modalObj.content, 'prepend', true, true);
            },
            complete: function() {
                s_Loading.removeLoader(modalObj.contentWrap);
                s_Modal.createClose(modalObj);
                s_Modal.setFocusOnLoad(modalObj);
                s_Modal.sets_ModalDimensions(modalObj);
            }
        });
    },

    loadContent: function(modalObj, contentToLoad) {
        modalObj.content.html(contentToLoad);
    },

    sets_ModalDimensions: function(modalObj) {
        modalObj.contentWrap.width(s_Window.getViewportWidth() - ((s_Window.getViewportWidth() * 10) / 100));
        modalObj.contentWrap.height(s_Window.getViewportHeight() - ((s_Window.getViewportHeight() * 25) / 100));
    },

    createClose: function(modalObj) {
        modalObj.contentWrap.prepend('<a class="js-modal__close" href="#"><span class="fa fa-times fa-lg"><span class="hidden">Close</span></span></a>');
        modalObj.close = $('.js-modal__close');
    },

    setFocusOnLoad: function(modalObj) {
        modalObj.close.eq(0).focus();
        modalObj.close.on('click', function() {
            s_Modal.closes_Modal(modalObj);
            return false;
        });
        $(document).on('keyup', function(e) {
            if (e.keyCode === 27) {
                s_Modal.closes_Modal(modalObj);
                return false;
            }
        });
    },

    closes_Modal: function(modalObj) {
        modalObj.contentWrap.html('');
        modalObj.contentWrap.remove();
        modalObj.overlay.removeClass('is-open');
        s_Modal.returnFocusToTrigger(modalObj);
        s_Modal.enableScrolling(modalObj);
    },

    returnFocusToTrigger: function(modalObj) {
        modalObj.trigger.focus();
    },

    enableScrolling: function(modalObj) {
        $('body').removeClass(modalObj.openBodyClass);
    }

};

$(document).ready(s_Modal.init);