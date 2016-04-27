/*
Show/hide
*/

var s_ShowHide = {

    selectors: {
        content:        'data-showhide-content',
        target:         'data-showhide-target',
        openDefault:    'data-showhide-open-default',
        isOpen:         '--is-open',
        active:         'active'
    },

    init: function() {
        var showHideObj = {
            toggle: $(this),
            content: $('[' + s_ShowHide.selectors.content + '=' + $(this).attr(s_ShowHide.selectors.target) + ']')
        };

        if (showHideObj.content.attr(s_ShowHide.selectors.openDefault) !== 'true')
            showHideObj.content.hide();

        s_ShowHide.eventListeners(showHideObj);
    },

    eventListeners: function(showHideObj) {
        showHideObj.toggle.on('click', function(event) {
            s_ShowHide.doToggle(showHideObj);
            return false;
        });
    },

    doToggle: function(showHideObj) {
        showHideObj.content.slideToggle();
        showHideObj.toggle.toggleClass(s_ShowHide.selectors.active);
        s_ShowHide.handleBodyClass(showHideObj.content.attr(s_ShowHide.selectors.content));
    },

    handleBodyClass: function(classToToggle) {
        classToToggle = classToToggle + s_ShowHide.selectors.isOpen;
        $('body').toggleClass(classToToggle);
    },

    hideElement: function(element) {
        if (element.is(':visible')) {
            var selector = element.attr(s_ShowHide.selectors.content);
            element.slideUp();
            $('body').removeClass(selector + s_ShowHide.selectors.isOpen);
            $('[' + s_ShowHide.selectors.target + '=' + selector + ']').removeClass(s_ShowHide.selectors.active);
        }
    }

};
$('[data-showhide-target]').each(s_ShowHide.init);