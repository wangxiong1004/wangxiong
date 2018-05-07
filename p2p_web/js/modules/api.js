layui.define(['utils'], function(exports) {
    var uitls = layui.utils;

    var apiUrl = uitls.getDomain().urlApi;

    exports('api', {
        pcIndex: apiUrl + 'v1/homepage/getIndexData',   // pc��ҳ
        appIndex: apiUrl + 'v1/app/appindex',   // wap��ҳ
        noticeList: apiUrl + 'v1/homepage/getNoticeList',    // �����б�
        operationReports: apiUrl + 'v1/homepage/getOperationReports',    // ��Ӫ����

        /*
         * ��������api
         */
        bankInfo: apiUrl + 'v1/srbankaccount/bankinfo', // ��ȡ���п���Ϣ
        checkRegister: apiUrl + 'v1/srbankaccount/check_register',  // ����Ƿ������
        personalRegister: apiUrl + 'v1/srbankaccount/personal_register',    // ע��δͶ���û�������ܻ�
        modifyReservedMobile: apiUrl + 'v1/srbankaccount/modify_reserved_mobile',   // �޸�Ԥ���ֻ���
        srbankSignPage: apiUrl + 'v1/srbankaccount/srbank_sign_page',   // ͨ��ǩԼ
        queryInformation: apiUrl + 'v1/srbankaccount/query_information',    // �鿴����˻���Ϣ
        rechargePage: apiUrl + 'v1/srbankaccount/recharge_page',    // ���س�ֵҳ��
        recharge: apiUrl + 'v1/srbankaccount/recharge', // ��ֵ
        checkChargeSuccess: apiUrl + 'v1/srbankaccount/check_charge_success',   // �ж϶�Ӧ�ĳ�ֵ�Ƿ�ɹ�
        withdrawPage: apiUrl + 'v1/srbankaccount/withdraw_page',    // ��������ҳ��
        withdraw: apiUrl + 'v1/srbankaccount/withdraw', // ����
        bankcardPage: apiUrl + 'v1/srbankaccount/bankcard_page',    // �������п�����ҳ��
        resetPassword: apiUrl + 'v1/srbankaccount/reset_password',  // �޸Ľ�������
        unbindBankcardPage: apiUrl + 'v1/srbankaccount/unbind_bankcard_page',   //  ������п�ҳ��
        unbindBankcardCheck: apiUrl + 'v1/srbankaccount/unbind_bankcard_check', // ��֤ԭ���ż���֤���Ƿ���ȷ
        unbindBankcardApply: apiUrl + 'v1/srbankaccount/unbind_bankcard_apply', // �ϴ����֤�ļ�base64��������п�����ɹ�
        rebindBankcard: apiUrl + 'v1/srbankaccount/rebind_bankcard',    // ����������п���������д��Ϣ
        rebindBankcardPage: apiUrl + 'v1/srbankaccount/rebind_bankcard_page',   // ����������п�����������д��Ϣ
        undoUnbindBankcard: apiUrl + 'v1/srbankaccount/undo_unbind_bankcard',   // ��������У�ȡ��������룬����ԭ��
        debtorRegister: apiUrl + 'v1/srbankaccount/debtor_register',    // ����û������ˣ�������ܻ�
        srbankAccountInfo: apiUrl + 'v1/srbankaccount/srbank_account_info'  // ������Ϣ
    });
});
