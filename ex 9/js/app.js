(function() {
    'use strict';
    //-----------------------------
    //------ Session Storage ------
    //-----------------------------
    var form = document.getElementById('form');
    document.getElementById('submit').onclick = function getData(key, value) {
        key = document.getElementsByTagName('input')[0].value;
        value = document.getElementsByTagName('input')[1].value;
        //----------------------------
        sessionStorage.setItem(key, value);
        var fields = document.getElementsByTagName('input');
        if (sessionStorage.getItem('login') && sessionStorage.getItem('pass')) {
            $('.login').val(sessionStorage.getItem('login'));
            $('.pass').val(sessionStorage.getItem('pass'));
        }
        $('.login, .pass').on('change', function(evt) {
            var element = $(this);
            var className = $(this).attr('class');
            sessionStorage.setItem(className, element.val());
        });
    };
    //-----------------------------
})();