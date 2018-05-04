layui.define(['utils'], function(exports) {
    var uitls = layui.utils;

    var apiUrl = uitls.getDomain().urlApi;

    exports('api', {
        appIndex: apiUrl + 'v1/app/appindex'
    });
});
