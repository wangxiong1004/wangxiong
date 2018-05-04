//layui.config({
//  base: '../js/modules/'
//});

//layui.use(['layer', 'api', 'utils'], function() {
//  var device = layui.device();
//  var layer = layui.layer;
//  var api = layui.api;
//  var Util = layui.utils;
//
//  console.log(device);
//
//  Util.getAjaxData({
//      url: api.appIndex,
//      callback: function(data) {
//          console.log(data);
//      }
//  });
//
//  console.log(Util)
//
//});

//layui.use(['jquery'], function($) {
//  $("#layer_btn").on("click", function() {
//      layui.use(['api', 'utils'], function() {
//          var api = layui.api;
//          var utils = layui.utils;
//          utils.getAjaxData({
//              url: api.appIndex,
//              callback: function(data) {
//                  console.log(data);
//              }
//          });
//      });
//  })
//});


layui.define(['jquery'], function(exports) {
    var $ = layui.jquery;

    $("#layer_btn").on("click", function() {
        layui.use(['api', 'utils'], function() {
            var api = layui.api;
            var utils = layui.utils;
            utils.getAjaxData({
                url: api.appIndex,
                callback: function(data) {
                    console.log(data);
                }
            });
        });
    });

    // localStorage
    // layui.data('test', {
        // key: 'name',
        // value: 'zhangsan'
    // });

    console.log(layui.cache);


    var arr = [2, 3, 4, 9, 8, 9, 105, 15, 111, 22];

    layui.each(arr, function(index, val) {
        console.log(index);
        console.log(val);
    });

    var obj = {
        name: 'zhangsan',
        sex: 'boy',
        age: 30
    };
    layui.each(obj, function(key, val) {
        console.log(key)
        console.log(val);
    });

    exports('main', {});
})

