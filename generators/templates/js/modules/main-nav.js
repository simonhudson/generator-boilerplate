var MainNav = {

    Obj: {},
    openClass: 'is-open',
    breakpoint: 1024,

    init: function() {
        MainNav.Obj.nav = $('.curtain-nav');
        MainNav.Obj.toggle = $('.js-menu-toggle');

        if (s_Window.getViewportWidth() > MainNav.breakpoint)
            MainNav.showNav();
        else
            MainNav.hideNav();

        MainNav.eventListeners();
    },

    eventListeners: function() {

        s_Window.resize(function() {
            MainNav.setState(true);
        }, 50 );

        MainNav.Obj.toggle.on('click', function() {
            MainNav.setState();
        });
    },

    setState: function(isResize) {
        MainNav.setHeight();
        if (MainNav.Obj.nav.hasClass(MainNav.openClass) || isResize) {
            MainNav.Obj.nav.removeClass(MainNav.openClass);
        } else {
            MainNav.Obj.nav.addClass(MainNav.openClass);
        }
    },

    setHeight: function() {
        if (s_Window.getViewportWidth() <= MainNav.breakpoint) {
            MainNav.Obj.nav.height($(document).height());
        } else {
            MainNav.Obj.nav.height('auto');
        }
    },

    showNav: function() {
        MainNav.Obj.nav.addClass(MainNav.openClass);
    },

    hideNav: function() {
        MainNav.Obj.nav.removeClass(MainNav.openClass);
    },

};
$(document).ready(MainNav.init);