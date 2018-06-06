import {base64encode, des, utf16to8, utf8to16, base64decode, hexToString, Handle} from '../util/des';

export default {
    /**
     * 设置cookie
     * @param name
     * @param value
     * @param iDay
     */
    setCookie: function (name, value, iDay, type) {
        var oDate = new Date();
        if (type == 1) {
            var expires = new Date();
            expires.setTime(oDate.getTime() + 1000 * 60 * 60 * 24);
            document.cookie = name + '=' + value + ';expires=' + expires.toGMTString();
        } else {
            oDate.setDate(oDate.getDate() + iDay);
            document.cookie = name + '=' + value + ';expires=' + oDate;
        }
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
     * 删除cookie
     * @param name
     */
    delCookie: function (name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = this.getCookie(name);
        if (cval != null)
            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
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
     * 获取时间戳
     * @returns {number}
     */
    getSeconds: function () {
        return new Date().getTime();
    },
    /**
     * 生成36位的uuid
     * @returns {string}
     */
    getGuid() {
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
    encryption(Codekey, str, name) {
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
    decrypt(key, str, name) {
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
    getParams(platforms, token, params) {
        var platform = this.getCookie('platform') || 'wechat';
        var params = {
            platform: platform,
            proglang: 'javascript',
            sn: this.getRrandomTime(),
            params: params,
            token: token
        }
        return JSON.stringify(params);
    },
    /**
     * 格式化数据 4位
     * @param timeStamp
     */
    formateDate(val) {
        var number = new Number(val);
        var str = number.toString();
        var newstr = str.replace(/\d{1,4}(?=(\d{4})+$)/g, function (s) {
            return s + ','
        })
        return newstr;
    },
    /**
     * 判断终端
     * @param
     */
    isUerAgent() {
        var u = navigator.userAgent;
        var platform = '';
        if (u.indexOf('Android') > -1 || u.indexOf('Adr') > -1) {
            platform = 'android'
        } else if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
            platform = 'ios'
        } else {
            platform = ''
        }
        return platform;
    },
    /**
     * 去除空格
     * @param str
     */
    trim(str, is_global) {
        var result;
        result = str.replace(/(^\s+)|(\s+$)/g, "");
        if (is_global.toLowerCase() == "g") {
            result = result.replace(/\s/g, "");
        }
        return result;
    },
    /**
     * 验证身份证格式
     * @param identity
     */
    checkIdentity(card) {
        var reg = /^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/;
        if (reg.test(card)) {
            return true;
        } else {
            return false;
        }
    },
    /**
     * 是否为纯数字
     * @param number
     */
    isNumber(number) {
        var num = /^\d*$/;
        if (!num.exec(number)) {
            return false;
        } else {
            return true;
        }
    },
    /**
     * 验证手机号
     * @param phone
     */
    checkPhone(phone) {
        if (!(/^1[34578]\d{9}$/.test(phone))) {
            return false;
        } else {
            return true;
        }
    },
    /**
     * 判断数组是否包含某个元素
     * @param arr
     * @param obj
     */
    contains(arr, obj) {
        var i = arr.length;
        while (i--) {
            if (arr[i] === obj) {
                return true;
            }
        }
        return false;
    },
    /**
     * 补0函数
     * @param arr
     * @param obj
     * @returns {boolean}
     */
    p(num) {
        return num < 10 ? '0' + num : num;
    },
    /**
     * 数组之和
     * @param arr
     * @returns {number}
     */
    sum(arr) {
        var result = 0;
        for (var i = 0; i < arr.length; i++) {
            result += arr[i];
        }
        return result;
    },
    /**
     *
     * @param arr1
     * @param arr2
     * @param start
     * @param end
     * @returns {{min_interest_rate: number, max_interest_rate: number, can_buy_total: *, can_buy_amount: *}}
     */
    filterCollection(arr1, arr2, start, end) {
        var tempArr1 = [], tempArr2 = [];
        if (end) {
            tempArr1 = this.filterRate(arr1, start, end);
            tempArr2 = this.filterRate(arr2, start, end);
            return {
                min_interest_rate: Math.min(tempArr1.min_interest_rate, tempArr2.min_interest_rate),
                max_interest_rate: Math.max(tempArr1.max_interest_rate, tempArr2.max_interest_rate),
                can_buy_total: parseInt(tempArr1.can_buy_total) + parseInt(tempArr2.can_buy_total),
                can_buy_amount: parseFloat(tempArr1.can_buy_amount) + parseFloat(tempArr2.can_buy_amount)
            }
        } else {
            return {
                min_interest_rate: Math.min(arr1[start].min_interest_rate, arr2[start].min_interest_rate),
                max_interest_rate: Math.max(arr1[start].max_interest_rate, arr2[start].max_interest_rate),
                can_buy_total: parseInt(arr1[start].can_buy_total) + parseInt(arr2[start].can_buy_total),
                can_buy_amount: parseFloat(arr1[start].can_buy_amount) + parseFloat(arr2[start].can_buy_amount)
            }
        }

    },
    /**
     *
     * @param arr
     * @param start
     * @param end
     * @returns {*}
     */
    filterRate(arr, start, end) {
        var tempArr = [], newMinArr = [], newMaxArr = [], buyTotal = [], buyAmount = [];
        if (end) {
            tempArr = arr.slice(start, end);
            for (let i = 0; i < tempArr.length; i++) {
                newMinArr.push(tempArr[i].min_interest_rate);
                newMaxArr.push(tempArr[i].max_interest_rate);
                buyTotal.push(tempArr[i].can_buy_total);
                buyAmount.push(tempArr[i].can_buy_amount);
            }
            return {
                min_interest_rate: Math.min.apply(null, newMinArr),
                max_interest_rate: Math.max.apply(null, newMaxArr),
                can_buy_total: this.sum(buyTotal),
                can_buy_amount: this.sum(buyAmount).toFixed(2)
            }
        }
        return arr[start];
    },
    /**
     *
     * @param time
     * @param callback
     */
    countDown(time, callback) {
        var fn;
        fn = setInterval(() => {
            time--;
            typeof callback == 'function' && callback(time);
            if (time <= 0) {
                clearInterval(fn);
            }
        }, 1000)
    }
}
