<template>
    <section class="dola-register">
        <top-bar :topBarName="topBarName"></top-bar>
        <div class="dola-register-content">
            <img src="" alt="" class="dola-register-logo" />
            <form class="dola-register-form" autocomplete="off">
                <ul class="dola-register-lists">
                    <li class="dola-register-list dola-register-list01">
                        <input type="tel" name="tel" id="dola_user_tel" placeholder="请输入手机号" autocomplete="off" />
                    </li>
                    <li class="dola-register-list dola-register-list02">
                        <input type="tel" name="tel" id="dola_user_tel" placeholder="请输入图形验证码" autocomplete="off" />
                        <span class="img-code-wrapper"></span>
                    </li>
                    <li class="dola-register-list dola-register-list03">
                        <input type="tel" name="tel" id="dola_user_tel" placeholder="请输入验证码" autocomplete="off" />
                        <a href="javascript:;" class="tel-code-btn">获取验证码</a>
                    </li>
                    <li class="dola-register-list dola-register-list04">
                        <input :type="passType" name="pass" id="dola_user_pass" placeholder="请设置登录密码" autocomplete="off" />
                        <i class="check_pass" @click="isShowPass" :class="isShowPassClass"></i>
                    </li>
                    <li class="dola-register-list dola-register-list05" :class="isShowFrind">
                        <input type="tel" name="tel" id="dola_friend_tel" placeholder="推荐人手机号（选填）" autocomplete="off" />
                        <span class="recommend" @click="isShowFrindInput">推荐人手机号<em class="friend-icon"></em></span>
                    </li>
                </ul>
                <input type="submit" value="立即注册" class="dola-register-btn dola-register-btn" @click.prevent="register_submit" />
                <p class="register-text">点击“立即注册”，即表示您同意并愿意遵守<a href="javascript:;" @click.prevent="registerServer">《注册服务协议》</a>与<a href="javascript:;">《多啦聚财咨询服务协议》</a>与<a href="javascript:;">《风险提示》</a></p>
            </form>
        </div>

        <registered-service-agreement v-show="isRegisterdServiceAgreement" ref="registeredServiceCont"></registered-service-agreement>
    </section>
</template>

<script>
    import TopBar from '../../components/TopBar.vue';
    import RegisteredServiceAgreement from '../../components/RegisteredServiceAgreement.vue';

    import { MessageBox } from 'mint-ui';

    export default {
        name: 'register',
        data() {
            return {
                topBarName: '注册',
                passType: 'password',
                isShowPassClass: '',
                isShowFriendInput: false,
                isShowFrind: 'show-firend',
                isRegisterdServiceAgreement: false
            }
        },
        methods: {
            isShowPass() {
                if (this.isShowPassClass) {
                    this.isShowPassClass = '';
                    this.passType = 'password';
                } else {
                    this.isShowPassClass = 'show-pass';
                    this.passType = 'text';
                }
            },
            isShowFrindInput() {
                if (this.isShowFrind) {
                    this.isShowFrind = '';
                } else {
                    this.isShowFrind = 'show-firend';
                }
            },
            register_submit() {
                console.log('register');
            },
            registerServer() {
                MessageBox({
                    title: '注册服务协议',
                    message: this.$refs.registeredServiceCont.$el.innerHTML,
                    confirmButtonText: '关闭'
                });
            }
        },
        mounted() {

        },
        components: {
            'top-bar': TopBar,
            'registered-service-agreement': RegisteredServiceAgreement
        }
    }
</script>

<style lang="scss">
    .dola-register {
        height: 100%;
        background-color: #fff;
        .dola-register-content {
            padding-top: 44px;
            .dola-register-logo {
                display: block;
                width: 83px;
                height: 83px;
                margin: 45px auto;
                background: url("https://dolabank-apk.oss-cn-shenzhen.aliyuncs.com/dolabank/static/images/v2/wap/logo.png") center center no-repeat;
                background-size: cover;
                box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.07);
            }
            .dola-register-form {
                margin: 0 20px;
                .dola-register-lists {
                    .dola-register-list {
                        position: relative;
                        border-bottom: 1px solid #e5e5e5;
                        > input {
                            width: 100%;
                            height: 62px;
                            line-height: 1;
                            text-indent: 30px;
                            background-color: #fff;
                            font-size: 15px;
                        }
                        &.dola-register-list01 {
                            > input {
                                background: url("https://dolabank-apk.oss-cn-shenzhen.aliyuncs.com/dolabank/static/images/wechat/register/ico01.png") 5px center no-repeat;
                                background-size: 13px;
                            }
                        }
                        &.dola-register-list02, &.dola-register-list03 {
                            position: relative;
                            > input {
                                background: url("https://www.dolabank.club/static/images/wechat/register/ico02.png") 5px center no-repeat;
                                background-size: 17px;
                            }
                        }
                        &.dola-register-list02 {
                            .img-code-wrapper {
                                position: absolute;
                                top: 50%;
                                right: 0;
                                margin-top: -21px;
                                width: 100px;
                                height: 42px;
                                background: #ccc;
                            }
                        }
                        &.dola-register-list03 {
                            .tel-code-btn {
                                position: absolute;
                                right: 0;
                                top: 13px;
                                width: 93px;
                                height: 30px;
                                border-radius: 5px;
                                line-height: 30px;
                                text-align: center;
                                border: 1px solid #ff6600;
                                background-color: #fff;
                                font-size: 15px;
                                color: #ff6600;
                            }
                        }
                        &.dola-register-list04 {
                            position: relative;
                            > input {
                                background: url("https://dolabank-apk.oss-cn-shenzhen.aliyuncs.com/dolabank/static/images/wechat/register/ico03.png") 5px center no-repeat;
                                background-size: 14px;
                            }
                            .check_pass {
                                display: block;
                                width: 40px;
                                height: 40px;
                                position: absolute;
                                right: 0;
                                top: 12px;
                                -webkit-appearance: none;
                                appearance: none;
                                outline: none;
                                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                                border-radius: 0;
                                background: url("https://www.dolabank.club/static/images/wechat/register/ico04.png") center center no-repeat;
                                background-size: 16px;
                                &.show-pass {
                                    background: url("https://www.dolabank.club/static/images/wechat/register/ico04_01.png") center center no-repeat;
                                    background-size: 16px;
                                }
                            }
                        }
                        &.dola-register-list05 {
                            position: relative;
                            > input {
                                background: url("https://www.dolabank.club/static/images/v2/wap/register-ico.png") 5px center no-repeat;
                                background-size: 15px;
                            }
                            .recommend {
                                position: absolute;
                                right: 18px;
                                top: 0;
                                line-height: 62px;
                                font-size: 13px;
                                color: #666;
                                .friend-icon {
                                    display: inline-block;
                                    margin-left: 3px;
                                    width: 12px;
                                    height: 6px;
                                    background: url("https://www.dolabank.club/static/images/v2/wap/register-arrow.png") no-repeat right center;
                                    background-size: 12px 6px;
                                }
                            }
                            &.show-firend {
                                border-bottom: none;
                                > input {
                                    visibility: hidden;
                                }
                                .friend-icon {
                                    transform: rotate(180deg);
                                }
                            }
                        }
                    }
                }
                .forget-pass-wrapper {
                    text-align: right;
                    .forget-pass {
                        display: inline-block;
                        padding: 15px;
                        font-size: 15px;
                        color: #ff6802;
                    }
                }
                .dola-register-btn {
                    width: 100%;
                    height: 49px;
                    line-height: 49px;
                    border-radius: 5px;
                    text-align: center;
                    font-size: 17px;
                    color: #ff6700;
                    background: #fff;
                    &.dola-register-submit {
                        margin-top: 69px;
                        border: solid 1px #ff6700;
                    }
                    &.dola-register-btn {
                        display: block;
                        margin-top: 22px;
                        color: #fff;
                        background-image: linear-gradient(265deg, #ff6802 0%, #ff9832 100%);
                    }
                }
                .register-text {
                    margin-top: 15px;
                    font-size: 13px;
                    line-height: 21px;
                    color: #b4b4b4;
                    text-align: center;
                    a {
                        color: #ff6700;
                        font-size: 13px;
                    }
                }
            }
        }

    }

    .mint-msgbox-wrapper {
        .mint-msgbox {
            border-radius: 5px;
            .mint-msgbox-header {
                padding-top: 0;
                height: 41px;
                line-height: 41px;
                border-bottom: 1px solid #bbb;
                .mint-msgbox-title {
                    font-size: 14px;
                }
            }
            .mint-msgbox-content {
                height: 300px;
                overflow: auto;
            }
        }
    }
</style>