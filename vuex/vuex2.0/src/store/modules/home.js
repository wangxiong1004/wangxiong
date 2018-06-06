import {
  services as Services,
  getData,
  apis

} from '../../api/index'
import Util from '../../util/index'

const state = {
  appindex: null,
  user: null,
  userBankInfo: null
};

const getters = {
  appindex: (state) => {
    return state.appindex;
  },
  user: (state) => {
    return state.user;
  },
  userBankInfo: (state) => {
    return state.userBankInfo;
  }
};

const mutations = {
  appindex(state, payload) {
    state.appindex = payload.res.data;
  },
  user(state, payload) {
    state.user = payload.res.data;
  },
  userBankInfo(state, payload) {
    state.userBankInfo = payload.res;
  }
};

const actions = {
  appindex: ({
    commit
  }) => {
    // let Codekey = Util.getRrandomStr();
    // let token = Util.getCookie('token');
    // let params = Util.getParams('wechat', token, '');
    // console.log(params);
    // params = Util.encryption(Codekey, params, 'code');
    // Services.appindex(Codekey, params).then((res) => {
    //   var key = res.headers['x-dola-edoc'];
    //   var data = res.data;
    //   var str = Util.decrypt(key, data, 'code')
    //   var data = JSON.parse(str);
    //   console.log(data);
    //   if (data.code == 0) {
    //     commit({
    //       type: 'appindex',
    //       res: data
    //     });
    //   } else {
    //   }
    // }).catch(function (err) {
    // })

    getData({
      url: apis.appindex,
      success: (data) => {
        console.log(data)
        commit({
          type: 'appindex',
          res: data
        });
      }
    });
  },
  user: ({
    commit
  }) => {
    getData({
      url: apis.userDetail,
      success: (data) => {

        commit({
          type: 'user',
          res: data
        })
        commit({
          type: 'userBankInfo',
          res: data.data.bankInfo
        })

      }
    });

  }
};

export default {
  actions,
  mutations,
  state,
  getters
};
