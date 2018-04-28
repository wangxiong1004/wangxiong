(function (window) {
    Util = {
        showTime: function () {
            var time_start = new Date("2014/12/17 00:00:00").getTime();
            var time_end = new Date().getTime();
            var time_distance = time_end - time_start;
            if (time_distance > 0) {
                var int_year = Math.floor(time_distance / 31536000000)
                time_distance -= int_year * 31536000000;
                var int_day = Math.floor(time_distance / 86400000)
                time_distance -= int_day * 86400000;
                var int_hour = Math.floor(time_distance / 3600000)
                time_distance -= int_hour * 3600000;
                var int_minute = Math.floor(time_distance / 60000)
                time_distance -= int_minute * 60000;
                var int_second = Math.floor(time_distance / 1000)
                if (int_day < 10) {
                    int_day = "0" + int_day;
                }
                if (int_hour < 10) {
                    int_hour = "0" + int_hour;
                }
                if (int_minute < 10) {
                    int_minute = "0" + int_minute;
                }
                if (int_second < 10) {
                    int_second = "0" + int_second;
                }
                $("#time_y").html(int_year);
                $("#time_d").html(int_day);
                $("#time_h").html(int_hour);
                $("#time_m").html(int_minute);
                $("#time_s").html(int_second);
                setTimeout("Util.showTime()", 1000);
            } else {
                $("#time_y").html('0');
                $("#time_d").html('00');
                $("#time_h").html('00');
                $("#time_m").html('00');
                $("#time_s").html('00');
            }
        },
        /**
         * 0-10的随机数
         * @returns {Number}
         */
        mathRandom: function () {
            return parseInt(10 * Math.random());
        },
        /**
         * 后退一天
         * @param data
         * @returns {string}
         */
        getPrevDay: function () {
            var d = new Date();
            d = +d - 1000 * 60 * 60 * 24;
            d = new Date(d);
            return d.getFullYear() + "年" + (d.getMonth() + 1) + "月" + d.getDate() + "日";
        },
        /**
         * 时间戳转换
         * @param timeStamp
         * @param type
         * @returns {string}
         */
        formatDateTime: function (timeStamp, type) {
            var date = new Date();
            date.setTime(timeStamp * 1000);
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            m = m < 10 ? ('0' + m) : m;
            var d = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            var h = date.getHours();
            h = h < 10 ? ('0' + h) : h;
            var minute = date.getMinutes();
            var second = date.getSeconds();
            minute = minute < 10 ? ('0' + minute) : minute;
            second = second < 10 ? ('0' + second) : second;
            if (type == 1) {
                return y + '-' + m;
            } else if (type == 2) {
                return d + ' ';
            } else {
                return y + '-' + m + '-' + d + ' ';
            }
        },
        /**
         * tab切换
         * @param tab
         * @param tabContent
         * @param currentClass
         * @param call
         * @param evenType
         */
        tabFn: function (tab, tabContent, currentClass, call, evenType) {
            if (typeof currentClass == 'undefined') {
                currentClass = 'curr';
            }
            if (typeof evenType == 'undefined') {
                evenType = 'click';
            }
            tab.bind(evenType, function () {
                tab.removeClass(currentClass);
                $(this).addClass(currentClass);
                var index = $(this).index();
                tabContent.hide().eq(index).show();
                if (typeof call != 'undefined') {
                    call(index);
                }
            });
        },
        /**
         * 获取cookie
         * @param name
         * @returns {*}
         */
        getCookie: function (name) {
            var strCookie = document.cookie;
            var arrCookie = strCookie.split("; ");
            for (var i = 0; i < arrCookie.length; i++) {
                var arr = arrCookie[i].split("=");
                if (name == arr[0]) {
                    return arr[1];
                }
            }
            return "";
        },
        /**
         * 获取时间戳
         * @returns {number}
         */
        getSeconds: function () {
            return new Date().getTime();
        },
        /**
         * 毫秒时间戳.随机数
         */
        getRrandomTime: function () {
            var d = new Date().getTime();
            var num = "";
            for (var i = 0; i < 5; i++) {
                num += Math.floor(Math.random() * 10);
            }
            return d + '.' + num;
        },
        /**
         * 随机的16为字符串 X-Dola-Code
         * @returns {string}
         */
        getRrandomStr: function () {
            var data = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            var result = "";
            for (var i = 0; i < 16; i++) {
                var r = Math.floor(Math.random() * 62);
                result += data[r];
            }
            return result;
        },
        /**
         * 生成36位的uuid
         * @returns {string}
         */
        getGuid: function () {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        },
        /**
         *
         * @param Codekey 加密的key
         * @param str  加密的str
         * @param name
         * @returns {*}
         */
        encryption: function (Codekey, str, name) {
            if (Codekey) {
                return base64encode(des(Codekey, utf16to8(str), 1, 0, hexToString(name), 1))
            }
        },
        /**
         *
         * @param key 解密的key
         * @param str 解密的str
         * @param name
         * @returns {*}
         */
        decrypt: function (key, str, name) {
            if (key) {
                return Handle(utf8to16(des(key, base64decode(String(str)), 0, 0, hexToString(name), 0)))
            }
        },
        /**
         *
         * @param platform 平台标志
         * @param token 身份验证
         * @returns {*}
         */
        getParams: function (platform, token, params) {
            if (platform) {
                var params = {
                    platform: 'pc',
                    proglang: 'javascript',
                    sn: this.getRrandomTime(),
                    params: params,
                    token: token
                }
                return JSON.stringify(params);
            }
        },
        /**
         * 金额格式化 4位分割
         * @param num
         * @returns {string}
         */
        toMoney: function (num) {
            var number = new Number(num);
            var str = number.toString();
            var newstr = str.replace(/\d{1,4}(?=(\d{4})+$)/g, function (s) {
                return s + ','
            })
            return newstr;
        },
        /**
         * 金额正常格式
         * @param num
         * @returns {string|*}
         */
        toMoneyNormal: function (num) {
            num = num.toFixed(2);
            num = parseFloat(num)
            num = num.toLocaleString();
            return num;
        },
        /**
         * 获取域名
         */
        getDomain: function () {
            var url = "",
                urlApi = "";
            var domainObj = {};
            switch (window.location.hostname) {
                case "www.dolabank.com":
                    urlApi = 'https://www.dolabank.com/apigateway/';
                    url = 'https://www.dolabank.com/';
                    break;
                case "www.duolajucai.top":
                    urlApi = 'https://api.duolajucai.top/';
                    url = 'https://www.duolajucai.top/';
                    break;
                case "www.dolabank.top":
                    urlApi = 'https://api.dolabank.top/';
                    url = 'https://www.dolabank.top/';
                    break;
                case "www.dolabank.club":
                    urlApi = 'https://api.dolabank.club/';
                    url = 'https://www.dolabank.club/';
                    break;
                case "www.dola.dev":
//                  urlApi = 'https://api.dola.dev/';
                    url = 'https://www.dola.dev/';
                    urlApi = 'https://api.dolabank.club/';
                    break;
                default:
                    urlApi = 'https://www.dolabank.com/apigateway/';
                    url = 'https://www.dolabank.com/';
            }

            domainObj['url'] = url;
            domainObj['urlApi'] = urlApi;

            return domainObj;

        },
        /*
         * 获取链接参数
         */
        getQueryString: function(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var reg_rewrite = new RegExp("(^|/)" + name + "/([^/]*)(/|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            var q = window.location.pathname.substr(1).match(reg_rewrite);
            if(r != null){
                return unescape(r[2]);
            }else if(q != null){
                return unescape(q[2]);
            }else{
                return null;
            }
        },
        /*
        * options
        * url:
        * platform: 'pc'
        * type: 'get'
        * data: {},
        * callback: function(data) {}
        */
        getAjaxData: function(options) {
            var url = options.url || '';
//          var async = options.async || true;
            var platform = options.platform || 'pc';
            var type = options.type || 'get';
            var token = Util.getCookie('token');
            var Codekey = Util.getRrandomStr();
            var paramsdata = options.data;
            var params = Util.getParams(platform, token, paramsdata);
            params = Util.encryption(Codekey, params, 'code');
            $.ajax({
                type: type,
                url: url,
                async: options.async,
                headers: {
                    "X-Dola-Time": Util.getSeconds(),
                    "X-Dola-ClientID": Util.getGuid(),
                    'X-Dola-Code': Codekey
                },
                data: {
                    data: params
                },
                success: function (res, status, xhr) {
                    var key = xhr.getResponseHeader("X-Dola-Edoc");
                    var data = res;
                    var str = Util.decrypt(key, data, 'code')
                    var data = JSON.parse(str);

                    if (options.callback && typeof options.callback === 'function') {
                        options.callback(data);
                    }

                },
                error: function (data) {
                    if (options.error && typeof options.error === "function") {
                        options.error(data);
                    }
                }
            });
        },
        errorMsg: function(msg) {
            layui.use('layer', function () {
                var layer = layui.layer;

                layer.msg(msg);
            });
        },
        /*
         * 存管layer
         */
        srLayer03: function() {
            layui.use('layer', function() {
                var layer = layui.layer;

                var html = '<p class="text">您正在申请银行卡解绑，期间不支持账户重置交易密码，请在银行卡解绑后绑定新银行卡后进行。</p>' +
                            '<p class="desc">审核通过：您可以绑定新的银行卡</p>' +
                            '<p class="desc">审核失败：您需要重新提交审核，或保留原银行卡</p>';
                layer.alert(html, {
                    title: '温馨提示',
                    btn: '我知道了',
                    move: false,
                    resize: false,
                    btnAlign: 'c',
                    area: '516px',
                    skin: 'sr-layer sr-layer03'
                });
            });
        },
        srLayer04: function() {
            layui.use('layer', function() {
                var layer = layui.layer;

                var html = '<p class="text">请您在新打开的窗口中完成存管操作，成功之前请不要关闭此页面！</p>';
                layer.alert(html, {
                    title: '温馨提示',
                    btn: '我知道了',
                    move: false,
                    resize: false,
                    btnAlign: 'c',
                    area: '516px',
                    skin: 'sr-layer sr-layer04'
                });
            });
        },
        srLayer05: function(html, btnText) {
            var that = this;

            layui.use('layer', function() {
                var layer = layui.layer;


                layer.alert(html, {
                    title: '温馨提示',
                    btn: btnText,
                    move: false,
                    resize: false,
                    btnAlign: 'c',
                    area: '516px',
                    skin: 'sr-layer sr-layer05',
                    yes: function() {

                        if (btnText === "立即开通") {

                            layer.load(2);
                            that.getAjaxData({
                                url: that.getDomain().urlApi + 'v1/srbankaccount/personal_register',
                                async: false,
                                data: {
                                    redirectUrl: that.getDomain().url + 'about/bank_waiting?callback=' + that.getDomain().url + 'user/register/depository_success?'
                                },
                                callback: function(data) {
                                    layer.closeAll('loading');
                                    if (data.code === 0) {
                                        that.srLayer04();
                                        window.open(data.data);
                                    } else {
                                        layer.msg(data.msg);
                                    }
                                }
                            });

                        } else if (btnText === "立即绑卡") {

//                      	window.location.href = "/user/ucenter/safe?left=user/auth/bindcard";

                            var result = "";
                            layer.load(2);
                            that.getAjaxData({
                                url: that.getDomain().urlApi + 'v1/srbankaccount/rebind_bankcard_page',
                                async: false,
                                data: {
                                    redirectUrl: that.getDomain().url + '/user/ucenter/safe?'
                                },
                                callback: function(data) {
                                    layer.closeAll('loading');
                                    if (data.code === 0) {
                                        that.srLayer04();
//                                      window.open(data.data);
                                        result = data.data;
                                    } else {
                                        layer.msg(data.msg);
                                    }
                                }
                            });

                            if(result.length > 0){
                                window.open(result, "_blank");
                            }
                        }
                    }
                });
            });
        }
    };
    if (typeof define === "function" && define.amd) {
        return Util;
    } else {
        window.Util = Util;
    }
})(window);