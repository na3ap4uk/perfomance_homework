(function() {
    'use strict';
    //-----------------------------
    //--- getDate ---
    //-----------------------------
    countWithInterval();
    //-----------------------------
    function countWithInterval() {
        var time = (new Date).getTime();
        var interval = 1000;
        if (((new Date).getTime() - time) === interval) {
            countReload();
        }
    }

    function countReload() {
        var n = localStorage.getItem('on_load_counter');
        document.getElementById('counter').innerHTML = n;
        if (n === null) {
            n = 0;
        }
        n++;
        localStorage.setItem('on_load_counter', n);
    }
    //-----------------------------
})();