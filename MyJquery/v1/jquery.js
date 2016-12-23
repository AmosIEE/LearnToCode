(function() {
    var _jQuery = window.jQuery,
        _$ = window.$;

    var version = "0.0.1",
        jQuery = function(selector) {
            console.log(document.querySelector(selector));
        };

    jQuery.prototype = {
        jquery: version,
        constructor: jQuery
    };

    function Factory(selector){  //抽出构造函数
            return new jQuery(selector);
        }

    Factory.prototype = Factory.fn = jQuery.prototype;

    Factory.extend = Factory.fn.extend = function(){
        console.log(this);
    };

    window.$ = window.jQuery = Factory;


})();
