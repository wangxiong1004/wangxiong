var duola = function($) {
    var msg = "message";
    function muti(x, y) {
        return x * y;

    }

    return {
        init: function() {
            // 初始化app
            console.log(muti(3, 6));
        },
        prop: '42',
        specialNumber: function() {
            // 访问私有方法
            var num = muti(3, 6);
            return "our num " + num;
        },
        shareMessage: function(arg) {
            if (arg === "open sesame") {
            	return msg + "hello";
            }
        }
    }

}(jQuery);
