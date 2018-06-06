export function connectWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) {

        callback(WebViewJavascriptBridge);
    } else {
        document.addEventListener('WebViewJavascriptBridgeReady', function () {
            callback(WebViewJavascriptBridge);
        }, false);
    }
}

connectWebViewJavascriptBridge(function (bridge) {
    bridge.init(function (message, responseCallback) {

    });
});

/***
 * ios_storyboard:DolaUserAuthBank
 * ios_viewctl : DolaUserAuthAutomaticCycleInvestmentCtl
 * pop_storyboard:DolaUser
 ***/
export function ios_callback(ios_storyboard, ios_viewctl, pop_storyboard, pop_viewctl) {
    if (!ios_storyboard || ios_storyboard == undefined) {
        ios_storyboard = "";
    }
    if (!ios_viewctl || ios_viewctl == undefined) {
        ios_viewctl = "";
    }
    if (!pop_storyboard || pop_storyboard == undefined) {
        pop_storyboard = "";
    }

    if (!pop_viewctl || pop_viewctl == undefined) {
        pop_viewctl = "";
    }

    window.WebViewJavascriptBridge.callHandler('jsCallback', {
        'ios_storyboard': ios_storyboard,
        'ios_viewctl': ios_viewctl,
        'pop_storyboard': pop_storyboard,
        'pop_viewctl': pop_viewctl
    }, function (response) {

    });
}

/***
 方法名称:
 jsCallAppShareFunc
 JSONkey:
 shareTitle  分享标题
 shareContent  分享内容
 shareUrl  分享地址
 shareImageUrl 分享图片地址
 ***/
export function ios_share(shareTitle, shareContent, shareUrl, shareImageUrl) {
    if (!shareTitle || shareTitle == undefined) {
        shareTitle = "";
    }
    if (!shareContent || shareContent == undefined) {
        shareContent = "";
    }
    if (!shareUrl || shareUrl == undefined) {
        shareUrl = "";
    }

    if (!shareImageUrl || shareImageUrl == undefined) {
        shareImageUrl = "";
    }

    window.WebViewJavascriptBridge.callHandler('jsCallAppShareFunc', {
        'shareTitle': shareTitle,
        'shareContent': shareContent,
        'shareUrl': shareUrl,
        'shareImageUrl': shareImageUrl
    }, function (response) {
    });
}

export function android_share(shareTitle, shareContent, shareUrl, shareImageUrl) {
    app.share(shareTitle, shareContent, shareUrl, shareImageUrl);
}

export function ios_jump() {
    window.WebViewJavascriptBridge.callHandler('jsRiskEvaluationCallBack', {}, function (response) {
    });
}

export function android_jump() {
    app.jsRiskEvaluationCallBack();
}

/*登录页*/
export function jsShowLoginCallBack(platform) {
    if (platform == 'ios') {
        window.WebViewJavascriptBridge.callHandler('jsShowLoginCallBack', {}, function (response) {
        });
    } else {
        app.jsShowLoginCallBack();
    }
}


/*注册*/
export function jsShowRegisterCallBack(platform) {
    if (platform == 'ios') {
        window.WebViewJavascriptBridge.callHandler('jsShowRegisterCallBack', {}, function (response) {
        });
    } else {
        app.jsShowRegisterCallBack();
    }
}


/*首页*/
export function ios_ShowHome() {
    window.WebViewJavascriptBridge.callHandler('jsShowHomeCallBack', {}, function (response) {
    });
}

export function android_ShowHome() {
    app.jsShowHomeCallBack();
}

/*理财页*/

export function jsShowProductListCallBack(platform) {
    if (platform == 'ios') {
        window.WebViewJavascriptBridge.callHandler('jsShowProductListCallBack', {}, function (response) {
        });
    } else if(platform == 'android'){
        app.jsShowProductListCallBack();
    }
}


/*计划详情页*/
export function jsShowProductDetailCallBack(platform, productID, planID) {
    if (!productID || productID == undefined) {
        productID = "";
    }
    if (!planID || planID == undefined) {
        planID = "";
    }
    if (platform == 'ios') {
        window.WebViewJavascriptBridge.callHandler('jsShowProductDetailCallBack', {
            'productID': productID,
            'planID': planID
        }, function (response) {
        });
    } else  if(platform == 'android'){
        app.jsShowProductDetailCallBack(productID, planID);
    }
}

/*我的*/
export function jsShowMineCallBack(platform) {
    if (platform == 'ios') {
        window.WebViewJavascriptBridge.callHandler('jsShowMineCallBack', {}, function (response) {
        });
    } else if (platform == 'android') {
        app.jsShowMineCallBack();
    }
}

/*充值*/
export function jsShowRechargeCallBack(platform) {
    if (platform == 'ios') {
        window.WebViewJavascriptBridge.callHandler('jsShowRechargeCallBack', {}, function (response) {
        });
    } else if (platform == 'android') {
        app.jsShowRechargeCallBack();
    }
}


/*提现*/
export function ios_ShowWithDrawal() {
    window.WebViewJavascriptBridge.callHandler('jsShowWithDrawalCallBack', {}, function (response) {
    });
}

export function android_ShowWithDrawal() {
    app.jsShowWithDrawalCallBack();
}

/*红包*/
export function ios_ShowVoucher() {
    window.WebViewJavascriptBridge.callHandler('jsShowVoucherCallBack', {}, function (response) {
    });
}

export function android_ShowVoucher() {
    app.jsShowVoucherCallBack();
}

/*加息券*/
export function ios_ShowCoupon() {
    window.WebViewJavascriptBridge.callHandler('jsShowCouponCallBack', {}, function (response) {
    });
}

export function android_ShowCoupon() {
    app.jsShowCouponCallBack();
}

/*体验金*/
export function ios_ShowExperience() {
    window.WebViewJavascriptBridge.callHandler('jsShowExperienceCallBack', {}, function (response) {
    });
}

export function android_ShowExperience() {
    app.jsShowExperienceCallBack();
}

/*邀请好友*/
export function ios_ShowInvitedFriend() {
    window.WebViewJavascriptBridge.callHandler('jsShowInvitedFriendCallBack', {}, function (response) {
    });
}

export function android_ShowInvitedFriend() {
    app.jsShowInvitedFriendCallBack();
}

/*邀请记录*/
export function ios_ShowInvitedRecord() {
    window.WebViewJavascriptBridge.callHandler('jsShowInvitedRecordCallBack', {}, function (response) {
    });
}

export function android_ShowInvitedRecord() {
    app.jsShowInvitedRecordCallBack();
}

/*
 * 控制app topBar
 * @param topBarTitle
 * @param topBarColor
 * @param topBarTitleColor
 */
export function jsAppPropertyFn(topBarTitle, topBarColor, topBarTitleColor) {
    var data = {
        topBarTitle: topBarTitle,
        topBarColor: topBarColor,
        topBarTitleColor: topBarTitleColor
    };
    return JSON.stringify(data);
}


/**
 *  发起通知
 * @param notificationName
 * ios： KNTFCONST_LOAD_TABBAR_CONTROLLERS
 * android：REFLESH_HOME_ACTIVITY
 */
export function jsCallNotification(platform, notificationName) {
    if (platform == 'ios') {
        if (!notificationName || notificationName == undefined) {
            notificationName = 'KNTFCONST_LOAD_TABBAR_CONTROLLERS';
        }
        window.WebViewJavascriptBridge.callHandler('jsCallNotification', {
            'notificationName': notificationName,
        }, function (response) {
        });
    } else if (platform == 'android') {
        if (!notificationName || notificationName == undefined) {
            notificationName = 'REFLESH_HOME_ACTIVITY';
        }
        app.jsCallNotification(notificationName);
    }
}


/**
 *  风险提示  定期理财计划服务说明
 */
export function jsWebViewCallBack(platform, url, title) {
    if (platform == 'ios') {
        window.WebViewJavascriptBridge.callHandler('jsWebViewCallBack', {
            "url": url,
            "title": title
        }, function (response) {
        });
    } else {
        app.jsWebViewCallBack(url, title);
    }
}

/**
 *  关闭当前网页界面
 */
export function jsCloseCallBack(platform) {
    if (platform == 'ios') {
        window.WebViewJavascriptBridge.callHandler('jsCloseCallBack', {}, function (response) {
        });
    } else {
        app.jsCloseCallBack();
    }
}

/**
 *  跳转到根目录
 */
export function jsPopToRootCallBack(platform) {
    if (platform == 'ios') {
        window.WebViewJavascriptBridge.callHandler('jsPopToRootCallBack', {}, function (response) {
        });
    } else {
        app.jsPopToRootCallBack();
    }
}

/**
 * 传递token
 */

export function ios_jsStoreWebTokenCallBack(token) {

    window.WebViewJavascriptBridge.callHandler('jsStoreWebTokenCallBack', {
        'token': token,
    }, function (response) {
    });
}

/*
 * 安全密码
 */
export function jsSettingSafePwdCallBack(platform) {
    if (platform == 'ios') {
        window.WebViewJavascriptBridge.callHandler('jsSettingSafePwdCallBack', {}, function (response) {
        });
    } else if(platform == 'android') {
        app.jsSettingSafePwdCallBack();
    }
}

/*
 * 交易记录
 */
export function jsShowMoneyChangeListCallBack(platform) {
    if (platform == 'ios') {
        window.WebViewJavascriptBridge.callHandler('jsShowMoneyChangeListCallBack', {}, function (response) {
        });
    } else if(platform == 'android') {
        app.jsShowMoneyChangeListCallBack();
    }
}