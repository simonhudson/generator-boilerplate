/*
Generic error */
var s_GenericError = {
  
    show: function(attachTo) {
        attachTo = attachTo ? attachTo : $('body');
        s_StatusMessage.create('error', 'An error occurred, please try again.', attachTo, 'prepend', true, true);
    }

};