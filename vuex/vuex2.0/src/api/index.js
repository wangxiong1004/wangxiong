import axios from 'axios'
import Util from '../util/index'

/**
 * www.dolabank.com  正式环境网关接口地址
 * www.dolabank.top  测试环境网关接口地址
 * www.dola.dev      本地开发环境
 * https://10.82.8.186:7777  陶季富
 */

var urlApi, url;
switch (window.location.hostname) {
  case "www.dolabank.com":
    urlApi = 'https://www.dolabank.com/apigateway/';
    url = 'https://www.dolabank.com/';
    break;
  case "www.dolabank.top":
    urlApi = 'https://api.dolabank.top/';
    url = 'https://www.dolabank.top/';
    break;
  case "www.duolajucai.top":
    urlApi = 'https://api.duolajucai.top/';
    url = 'https://www.duolajucai.top/';
    break;
  case "www.dolabank.club":
    urlApi = 'https://api.dolabank.club/';
    url = 'https://www.dolabank.club/';
    break;
  case "www.dola.dev":
    urlApi = 'https://api.dola.dev/';
    url = 'https://www.dola.dev/';
    break;
  default:
    urlApi = 'https://www.dolabank.com/apigateway/';
    url = 'https://www.dolabank.com/';
}

export const productionUrlApi = urlApi;
export const productionUrl = url;

export const apis = {
  /**
   * 首页
   */
  appindex: productionUrlApi + 'v1/app/appindex',
  /**
   * 理财
   */
  regularindex: productionUrlApi + 'v1/regular/index',
  /**
   * 定期计划详情
   */
  regulardetail: productionUrlApi + 'v1/regular/plan',
  /**
   * 散标详情
   */
  standardPowderDetail: productionUrlApi + 'v1/loan/detail',
  /**
   * 选择最佳优惠券
   */
  selectBestCoupon: productionUrlApi + 'v1/user_coupon/select_best_user_coupon',
  /**
   *检查用户是否绑定银行卡
   */
  checkBankCard: productionUrlApi + 'v1/user/checkBankCard',
  /**
   *检查token
   */
  tokenCheck: productionUrlApi + 'v1/user/token_check',
  /**
   * 根据app传的加密token获取用户信息
   */
  getUserInfoByUid: productionUrlApi + 'v1/user/getUserInfoByUid',
  /**
   * 购买指定计划的用户列表
   */
  planUser: productionUrlApi + 'v1/regular/plan_user',
  /**
   * 根据产品获取最新计划
   */
  getRecentProductPlan: productionUrlApi + 'v1/regular/getRecentProductPlan',
  /**
   * 近24小时内除pdl的借款项目
   */
  lastHour: productionUrlApi + 'v1/loan/last24hour',
  /**
   *运营报告
   */
  getOperationReports: productionUrlApi + 'v1/homepage/getOperationReports',
  /**
   *借款人地域分布
   */
  getLoanArea: productionUrlApi + 'v1/homepage/getLoanArea',
  /**
   *重新绑定手机号
   */
  reBindMobile: productionUrlApi + 'v1/user/re_bind_mobile',
  /**
   *发送验证码
   */
  sendPhoneyzm: productionUrlApi + 'v1/user/send_phone_yzm',
  /**
   *验证验证码
   */
  checkPhoneYzm: productionUrlApi + 'v1/user/check_phone_yzm',
  /**
   *买买提 查询用户信息
   */
  checkChannelInfo: productionUrlApi + 'v1/channel/check_channel_info',
  /**
   *买买提 多啦绑定关联账户
   */
  bindAccount: productionUrlApi + 'v1/channel/bind_account',
  /**
   *买买提发送验证码
   */
  sendyzm: productionUrlApi + 'v1/channel/send_yzm',
  /**
   *用户中心
   */
  userDetail: productionUrlApi + 'v1/user/detail',
  /**
   *资产明细
   */
  assetDetail: productionUrlApi + 'v1/user/asset_detail',
  /**
   *用户投资明细
   */
  userPlanDetail: productionUrlApi + 'v1/user_plan/detail',
  /**
   *活动列表
   */
  getActivitylist: productionUrlApi + 'v1/activity/get_activity_list',
  /**
   *验证安全密码
   */
  checkSafePassword: productionUrlApi + 'v1/user/check_safe_password',
  /**
   *用户申请退出理财计划
   */
  exitPlan: productionUrlApi + 'v1/user_plan/exit_plan',
  /**
   *散标-借款项目列表
   */
  loanList: productionUrlApi + 'v1/loan/list',
  /**
   *转让项目列表
   */
  transferList: productionUrlApi + 'v1/standard/transfer_list',
  /**
   *返利网产品列表
   */
  plans: productionUrlApi + 'v1/fanli_activity/plans',
  /**
   * 付款 此接口不走网关
   */
  joinInvest: productionUrl + 'regular/join_invest',
  /**
   * 购买散标
   */
  joinStandard: productionUrlApi + 'v1/standard/loan_match',
  /*
   * 往期参考收益+利息
   */
  investInterestRepay: productionUrlApi + 'v1/standard/invest_interest_repay',
  /*
   * 散标还款计划
   */
  schedule: productionUrlApi + 'v1/loan/schedule',
  /*
   * 已匹配投资的还款计划
   */
  investmentSchedule: productionUrlApi + 'v1/standard/investment_schedule',
  /*
   * 转让详情
   */
  transferdetail: productionUrlApi + 'v1/standard/transfer_detail',
  /*
   * 用户转让列表
   */
  usertransferlist: productionUrlApi + 'v1/user/transfer_list',
  /*
   * 回款日历
   */
  paybackCalendar: productionUrlApi + 'v1/user/payback_calendar',
  /*
   * 回款日历每天具体详情
   */
  paybackCalendarForDay: productionUrlApi + 'v1/user/payback_calendar_for_day',
  /*
   * 用户散表列表
   */
  investmentList: productionUrlApi + 'v1/user/investment_list',
  /*
   * 申请转让信息
   */
  applicationTransferInfo: productionUrlApi + 'v1/standard/transfer_detail_web',
  /*
   * 申请转让
   */
  investmentTransfer: productionUrlApi + 'v1/standard/investment_transfer',
  /*
   * 购买转让债券
   */
  loanMatch: productionUrlApi + 'v1/standard/loan_match',
  /*
   *散标购买记录
   */
  getInvestmentList: productionUrlApi + 'v1/standard/get_investment_list',
  /**
   * 购买转让债权
   */
  acceptTransfer: productionUrlApi + 'v1/standard/accept_transfer',
  /**
   * 用户散标-投资详情
   */
  investmentDetail: productionUrlApi + 'v1/user/investment_detail',
  /**
   * 一键购买散标详情
   */
  quickBuyDetail: productionUrlApi + 'v1/loan/quick_buy_detail',
  /**
   * 一键购买散标,债权
   */
  batch: productionUrlApi + 'v1/standard/batch',
  /**
   * 一键投标结果查询
   */
  batchResult: productionUrlApi + 'v1/user/batch_result',
  /**
   * 获取银行卡信息
   */
  bankinfo: productionUrlApi + 'v1/srbankaccount/bankinfo',
  /**
   * 注册未投资用户开立(个人)存管账号
   */
  personalRegister: productionUrlApi + 'v1/srbankaccount/personal_register',
  /**
   * 加载充值页面
   */
  rechargePage: productionUrlApi + 'v1/srbankaccount/recharge_page',
  /**
   * 充值
   */
  recharge: productionUrlApi + 'v1/srbankaccount/recharge',
  /**
   * 判断充值是否成功
   */
  checkChargeSuccess: productionUrlApi + 'v1/srbankaccount/check_charge_success',
  /**
   * 加载提现页面
   */
  withdrawPage: productionUrlApi + 'v1/srbankaccount/withdraw_page',
  /**
   * 提现
   */
  withdraw: productionUrlApi + 'v1/srbankaccount/withdraw',
  /**
   * 加载银行卡管理页面
   */
  bankcardPage: productionUrlApi + 'v1/srbankaccount/bankcard_page',
  /**
   * 修改预留手机号
   */
  modifyReservedMobile: productionUrlApi + 'v1/srbankaccount/modify_reserved_mobile',
  /**
   * 加载解绑银行卡页面
   */
  unbindBankcardPage: productionUrlApi + 'v1/srbankaccount/unbind_bankcard_page',
  /**
   * 修改交易密码
   */
  resetPassword: productionUrlApi + 'v1/srbankaccount/reset_password',
  /**
   * 绑定另外的银行卡页面
   */
  rebindBankcardPage: productionUrlApi + 'v1/srbankaccount/rebind_bankcard_page',
  /**
   * 验证原卡号及验证码是否正确
   */
  unbindBankcardCheck: productionUrlApi + 'v1/srbankaccount/unbind_bankcard_check',
  /**
   *上传身份证文件base64,解绑银行卡申请成功
   */
  unbindBankcardApply: productionUrlApi + 'v1/srbankaccount/unbind_bankcard_apply',
  /**
   * 解绑申请中，取消申请操作，保留原卡
   */
  undoUnbindBankcard: productionUrlApi + 'v1/srbankaccount/undo_unbind_bankcard',
  /**
   * 检测是否开启存管帐号
   */
  checkRegister: productionUrlApi + 'v1/srbankaccount/check_register',
  /**
   * 用户个人设置入口界面
   */
  userSetting: productionUrlApi + 'v1/user/setting',
  /**
   * 通用签约
   */
  srbankSignPage: productionUrlApi + 'v1/srbankaccount/srbank_sign_page',
  /**
   * 绑定另外的银行卡
   */
  rebindBankCard: productionUrlApi + 'v1/srbankaccount/rebind_bankcard',
  /**
   * 预约投标入口
   */
  bespeak: productionUrlApi + 'v1/loan/bespeak',
  /**
   * 预约投标详情
   */
  bespeakDetail: productionUrlApi + 'v1/loan/bespeak_detail',
  /**
   * 预约购买散标，债权
   */
  standardBespeak: productionUrlApi + 'v1/standard/bespeak',
  /**
   * 用户预约投标列表
   */
  userBatchAutoList: productionUrlApi + 'v1/user/user_batch_auto_list',
  /**
   * 用户预约取消
   */
  userBatchAutoCancel: productionUrlApi + 'v1/user/user_batch_auto_cancel'
}

export function getData(options) {
  let Codekey = Util.getRrandomStr();
  let token = Util.getCookie('token');
  token = 'a6a8f355bbf54305c866a8308e88583c';
  let platform = options.platform || 'wechat';
  let params = Util.getParams(platform, token, options.data);

  console.log(params);
  params = Util.encryption(Codekey, params, 'code');

  return axios.get(options.url, {
    params: {
      data: params
    },
    headers: {
      'X-Dola-Code': Codekey
    }
  }).then((res) => {
    var key = res.headers['x-dola-edoc'];
    var data = res.data;
    var str = Util.decrypt(key, data, 'code')
    var data = JSON.parse(str);
    // console.log(data);
    if (data.code == 0) {
      if (options.success && typeof options.success === 'function') {
        options.success(data);
      }

    } else {}
  }).catch(function (err) {})

}

export const services = {
  appindex(Codekey, params) {
    return axios.get(apis.appindex, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  regularindex(Codekey, params) {
    return axios.get(apis.regularindex, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  regulardetail(Codekey, params) {
    return axios.get(apis.regulardetail, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  standardPowderDetail(Codekey, params) {
    return axios.get(apis.standardPowderDetail, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  selectBestCoupon(Codekey, params) {
    return axios.get(apis.selectBestCoupon, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  planUser(Codekey, params) {
    return axios.get(apis.planUser, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  lastHour(Codekey, params) {
    return axios.get(apis.lastHour, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  checkBankCard(Codekey, params) {
    return axios.get(apis.checkBankCard, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  getOperationReports(Codekey, params) {
    return axios.get(apis.getOperationReports, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  tokenCheck(Codekey, params) {
    return axios.get(apis.tokenCheck, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  getUserInfoByUid(Codekey, params) {
    return axios.get(apis.getUserInfoByUid, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  getLoanArea(Codekey, params) {
    return axios.get(apis.getLoanArea, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  getRecentProductPlan(Codekey, params) {
    return axios.get(apis.getRecentProductPlan, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  reBindMobile(Codekey, params) {
    return axios.get(apis.reBindMobile, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  sendPhoneyzm(Codekey, params) {
    return axios.get(apis.sendPhoneyzm, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  checkPhoneYzm(Codekey, params) {
    return axios.get(apis.checkPhoneYzm, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  checkChannelInfo(Codekey, params) {
    return axios.get(apis.checkChannelInfo, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  bindAccount(Codekey, params) {
    return axios.get(apis.bindAccount, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  sendyzm(Codekey, params) {
    return axios.get(apis.sendyzm, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  userDetail(Codekey, params) {
    return axios.get(apis.userDetail, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  assetDetail(Codekey, params) {
    return axios.get(apis.assetDetail, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  userPlanDetail(Codekey, params) {
    return axios.get(apis.userPlanDetail, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  getActivitylist(Codekey, params) {
    return axios.get(apis.getActivitylist, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  checkSafePassword(Codekey, params) {
    return axios.get(apis.checkSafePassword, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  exitPlan(Codekey, params) {
    return axios.get(apis.exitPlan, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  plans(Codekey, params) {
    return axios.get(apis.plans, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  loanList(Codekey, params) {
    return axios.get(apis.loanList, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  transferList(Codekey, params) {
    return axios.get(apis.transferList, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  joinInvest(params) {
    return axios.post(apis.joinInvest, params)
  },
  joinStandard(Codekey, params) {
    return axios.get(apis.joinStandard, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  investInterestRepay(Codekey, params) {
    return axios.get(apis.investInterestRepay, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  schedule(Codekey, params) {
    return axios.get(apis.schedule, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  transferdetail(Codekey, params) {
    return axios.get(apis.transferdetail, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  usertransferlist(Codekey, params) {
    return axios.get(apis.usertransferlist, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  paybackCalendar(Codekey, params) {
    return axios.get(apis.paybackCalendar, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  paybackCalendarForDay(Codekey, params) {
    return axios.get(apis.paybackCalendarForDay, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  investmentList(Codekey, params) {
    return axios.get(apis.investmentList, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  applicationTransferInfo(Codekey, params) {
    return axios.get(apis.applicationTransferInfo, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  investmentTransfer(Codekey, params) {
    return axios.get(apis.investmentTransfer, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  acceptTransfer(Codekey, params) {
    return axios.get(apis.acceptTransfer, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  getInvestmentList(Codekey, params) {
    return axios.get(apis.getInvestmentList, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  investmentSchedule(Codekey, params) {
    return axios.get(apis.investmentSchedule, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  investmentDetail(Codekey, params) {
    return axios.get(apis.investmentDetail, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  quickBuyDetail(Codekey, params) {
    return axios.get(apis.quickBuyDetail, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  batch(Codekey, params) {
    return axios.get(apis.batch, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  batchResult(Codekey, params) {
    return axios.get(apis.batchResult, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  bankinfo(Codekey, params) {
    return axios.get(apis.bankinfo, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  personalRegister(Codekey, params) {
    return axios.get(apis.personalRegister, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  rechargePage(Codekey, params) {
    return axios.get(apis.rechargePage, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  recharge(Codekey, params) {
    return axios.get(apis.recharge, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  checkChargeSuccess(Codekey, params) {
    return axios.get(apis.checkChargeSuccess, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  withdrawPage(Codekey, params) {
    return axios.get(apis.withdrawPage, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  withdraw(Codekey, params) {
    return axios.get(apis.withdraw, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  bankcardPage(Codekey, params) {
    return axios.get(apis.bankcardPage, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  modifyReservedMobile(Codekey, params) {
    return axios.get(apis.modifyReservedMobile, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  unbindBankcardPage(Codekey, params) {
    return axios.get(apis.unbindBankcardPage, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  rebindBankcardPage(Codekey, params) {
    return axios.get(apis.rebindBankcardPage, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  resetPassword(Codekey, params) {
    return axios.get(apis.resetPassword, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  unbindBankcardCheck(Codekey, params) {
    return axios.get(apis.unbindBankcardCheck, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  unbindBankcardApply(Codekey, params) {
    return axios.post(apis.unbindBankcardApply, {
      data: params
    }, {
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  userSetting(Codekey, params) {
    return axios.get(apis.userSetting, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  checkRegister(Codekey, params) {
    return axios.get(apis.checkRegister, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  undoUnbindBankcard(Codekey, params) {
    return axios.get(apis.undoUnbindBankcard, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  srbankSignPage(Codekey, params) {
    return axios.get(apis.srbankSignPage, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  rebindBankCard(Codekey, params) {
    return axios.get(apis.rebindBankCard, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  bespeak(Codekey, params) {
    return axios.get(apis.bespeak, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  bespeakDetail(Codekey, params) {
    return axios.get(apis.bespeakDetail, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  standardBespeak(Codekey, params) {
    return axios.get(apis.standardBespeak, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  userBatchAutoList(Codekey, params) {
    return axios.get(apis.userBatchAutoList, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  },
  userBatchAutoCancel(Codekey, params) {
    return axios.get(apis.userBatchAutoCancel, {
      params: {
        data: params
      },
      headers: {
        'X-Dola-Code': Codekey
      }
    })
  }
}
