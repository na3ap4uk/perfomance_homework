(function() {
    'use strict';
    //-----------------------------
    //- DOMContentLoaded & onload -
    //-----------------------------
    window.onload = function() {
        alert('Everything is loaded');
    };
    //-----------------------------
    function hello() {
        alert('Hello !');
    }
    document.addEventListener('DOMContentLoaded', hello);
    //-----------------------------
})();