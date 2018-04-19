window.duola = {};

// 工具方法
duola.util = {
    /**
     * 0-10的随机数
     * @returns {Number}
     */
    mathRandom: function() {
        return parseInt(10 * Math.random());
    },
    /**
     * 时间戳转换
     * @param timeStamp
     * @param type
     * @returns {string}
     */
    formatDateTime: function(timeStamp, type) {
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
     * 获取cookie
     * @param name
     * @returns {*}
     */
    getCookie: function(name) {
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
    getSeconds: function() {
        return new Date().getTime();
    },
    /**
     * 毫秒时间戳.随机数
     */
    getRrandomTime: function() {
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
    getRrandomStr: function() {
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
    getGuid: function() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
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
    encryption: function(Codekey, str, name) {
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
    decrypt: function(key, str, name) {
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
    getParams: function(platform, token, params) {
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
    /*
     * 域名转换
     * @returns {string}
     */
    getDoMain: function() {
        var apiHost = "";
        var protocol = window.location.protocol; // 协议
        var host = window.location.host; // 域名

        switch (host) {
            case "www.dola.dev":
                // apiHost = "api.dola.dev";
                apiHost = "api.dolabank.club";
                break;
            case "www.dolabank.top":
                apiHost = "api.dolabank.top";
                break;
                // 测试环境
            case "www.dolabank.club":
                apiHost = "api.dolabank.club";
                break;
            case "www.dolabank.com":
                apiHost = "www.dolabank.com/apigateway";
                break;
            default:
        }

        // 返回协议+域名
        return (protocol + "//" + apiHost);

    },
    /*
     * 获取当前域名
     * @returns {string}
     */
    getHost: function() {
        return (window.location.protocol + "//" + window.location.host);
    }
};

// api参数
duola.api = {
    boscApi: {
        bankinfo: duola.util.getDoMain() + "/v1/boscaccount/bankinfo", // 上海银行支持银行列表
        queryInformation: duola.util.getDoMain() + "/v1/boscaccount/query_information", // 查看银行存管信息
        checkRegister: duola.util.getDoMain() + "/v1/boscaccount/check_register", // 检测是否开启存管账号
        personalRegister: duola.util.getDoMain() + "/v1/boscaccount/personal_register", // 注册未投资用户开立（个人）存管账号
        activateStockedUser: duola.util.getDoMain() + "/v1/boscaccount/activate_stocked_user", // 注册且投资用户激活存管用户【迁移后场景】
        rechargePage: duola.util.getDoMain() + "/v1/boscaccount/recharge_page", // 加载充值页面
        recharge: duola.util.getDoMain() + "/v1/boscaccount/recharge", // 充值
        checkChargeSuccess: duola.util.getDoMain() + "/v1/boscaccount/check_charge_success", // 检测是否充值成功
        withdrawPage: duola.util.getDoMain() + "/v1/boscaccount/withdraw_page", // 加载提现页面
        withdraw: duola.util.getDoMain() + "/v1/boscaccount/withdraw", // 提现
        bankcardPage: duola.util.getDoMain() + "/v1/boscaccount/bankcard_page", // 加载银行卡管理页面
        resetPassword: duola.util.getDoMain() + "/v1/boscaccount/reset_password", // 修改交易密码
        modifyReservedMobile: duola.util.getDoMain() + "/v1/boscaccount/modify_reserved_mobile", // 修改预留手机号
        unbindBankcardPage: duola.util.getDoMain() + "/v1/boscaccount/unbind_bankcard_page", // 加载解绑银行卡页面
        sendPhoneYzm: duola.util.getDoMain() + "/v1/user/send_phone_yzm", // 发送验证码
        unbindBankcardCheck: duola.util.getDoMain() + "/v1/boscaccount/unbind_bankcard_check", // 验证原卡号及验证码
        unbindBankcardApply: duola.util.getDoMain() + "/v1/boscaccount/unbind_bankcard_apply", // 上传身份证
        undoUnbindBankcard: duola.util.getDoMain() + "/v1/boscaccount/undo_unbind_bankcard", // 取消解绑，保留银行卡
        changeBindBankcard: duola.util.getDoMain() + "/v1/boscaccount/change_bind_bankcard", // 绑定另外的银行卡
        enterpriseRegister: duola.util.getDoMain() + "/v1/boscaccount/enterprise_register", // 企业开户
        enterpriseInformationUpdate: duola.util.getDoMain() + "/v1/boscaccount/enterprise_information_update" // 企业信息修改
    }
};

// 上海银行存管
duola.bosc = {
    /*
     * 存管检测
     * @params is_bosc_user: 是否是存管户
     * @params is_import_activate: 是否激活
     * @params is_bosc_user_active: 存管户是否可用
     *
     */
    isBosc: function(is_bosc_user, is_import_activate, is_bosc_user_active, is_lock_topup) {
        if (!is_bosc_user_active) {
            layer.msg("存管不可用，请联系客服");
        } else if (!is_bosc_user) {
            return 1;
        } else if (!is_import_activate) {
            return 2;
        } else if (is_lock_topup) {
            layer.msg("账户被锁定，请联系客服");
        }

        return false;
    }
}

// 存管充值
duola.bosc.tradeIn = {
    loadTradeInPage: function() {
//      console.log(duola.api.boscApi.bankinfo);
    }
};
