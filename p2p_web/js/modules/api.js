layui.define(['utils'], function(exports) {
    var uitls = layui.utils;

    var apiUrl = uitls.getDomain().urlApi;

    exports('api', {
        pcIndex: apiUrl + 'v1/homepage/getIndexData',   // pc首页
        appIndex: apiUrl + 'v1/app/appindex',   // wap首页
        noticeList: apiUrl + 'v1/homepage/getNoticeList',    // 公告列表
        operationReports: apiUrl + 'v1/homepage/getOperationReports',    // 运营报告

        /*
         * 上饶银行api
         */
        bankInfo: apiUrl + 'v1/srbankaccount/bankinfo', // 获取银行卡信息
        checkRegister: apiUrl + 'v1/srbankaccount/check_register',  // 检测是否开启存管
        personalRegister: apiUrl + 'v1/srbankaccount/personal_register',    // 注册未投资用户开立存管户
        modifyReservedMobile: apiUrl + 'v1/srbankaccount/modify_reserved_mobile',   // 修改预留手机号
        srbankSignPage: apiUrl + 'v1/srbankaccount/srbank_sign_page',   // 通用签约
        queryInformation: apiUrl + 'v1/srbankaccount/query_information',    // 查看存管账户信息
        rechargePage: apiUrl + 'v1/srbankaccount/recharge_page',    // 加载充值页面
        recharge: apiUrl + 'v1/srbankaccount/recharge', // 充值
        checkChargeSuccess: apiUrl + 'v1/srbankaccount/check_charge_success',   // 判断对应的充值是否成功
        withdrawPage: apiUrl + 'v1/srbankaccount/withdraw_page',    // 加载提现页面
        withdraw: apiUrl + 'v1/srbankaccount/withdraw', // 提现
        bankcardPage: apiUrl + 'v1/srbankaccount/bankcard_page',    // 加载银行卡管理页面
        resetPassword: apiUrl + 'v1/srbankaccount/reset_password',  // 修改交易密码
        unbindBankcardPage: apiUrl + 'v1/srbankaccount/unbind_bankcard_page',   //  解绑银行卡页面
        unbindBankcardCheck: apiUrl + 'v1/srbankaccount/unbind_bankcard_check', // 验证原卡号及验证码是否正确
        unbindBankcardApply: apiUrl + 'v1/srbankaccount/unbind_bankcard_apply', // 上传身份证文件base64，解绑银行卡申请成功
        rebindBankcard: apiUrl + 'v1/srbankaccount/rebind_bankcard',    // 绑定另外的银行卡，本地填写信息
        rebindBankcardPage: apiUrl + 'v1/srbankaccount/rebind_bankcard_page',   // 绑定另外的银行卡，第三方填写信息
        undoUnbindBankcard: apiUrl + 'v1/srbankaccount/undo_unbind_bankcard',   // 解绑申请中，取消解绑申请，保留原卡
        debtorRegister: apiUrl + 'v1/srbankaccount/debtor_register',    // 借款用户（个人）开立存管户
        srbankAccountInfo: apiUrl + 'v1/srbankaccount/srbank_account_info'  // 个人信息
    });
});
