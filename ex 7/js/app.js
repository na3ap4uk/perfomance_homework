(function() {
    'use strict';
    //-----------------------------
    //--- Local Storage Counter ---
    //-----------------------------
    countReload();
    //-----------------------------
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