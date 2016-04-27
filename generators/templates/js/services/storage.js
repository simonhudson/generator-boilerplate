var s_LocalStorage = {
  
    hasLocalStorage: function() {
        return 'localStorage' in window && window['localStorage'] !== null;
    },

    set: function(key, value) {
        if (s_LocalStorage.hasLocalStorage())
            localStorage.setItem(key, value);
    },

    get: function(key) {
        if (s_LocalStorage.hasLocalStorage())
            return localStorage.getItem(key);
    },

    remove: function(key) {
        if (s_LocalStorage.hasLocalStorage())
            localStorage.removeItem(key);
    },

    clearAll: function() {
        if (s_LocalStorage.hasLocalStorage())
            localStorage.clear();
    }

};