<template>
    <section class="dola-forgetpass">
        <top-bar :topBarName="topBarName"></top-bar>
        <div class="dola-forgetpass-content">
            <img src="" alt="" class="dola-forgetpass-logo" />
            <form class="dola-forgetpass-form" autocomplete="off">
                <ul class="dola-forgetpass-lists">
                    <li class="dola-forgetpass-list dola-forgetpass-list01">
                        <input type="tel" name="tel" id="dola_user_tel" placeholder="请输入手机号" autocomplete="off" />
                    </li>
                    <li class="dola-forgetpass-list dola-forgetpass-list02">
                        <input type="tel" name="tel" id="dola_user_tel" placeholder="请输入图形验证码" autocomplete="off" />
                        <span class="img-code-wrapper"></span>
                    </li>
                    <li class="dola-forgetpass-list dola-forgetpass-list03">
                        <input type="tel" name="tel" id="dola_user_tel" placeholder="请输入验证码" autocomplete="off" />
                        <a href="javascript:;" class="tel-code-btn">获取验证码</a>
                    </li>
                    <li class="dola-forgetpass-list dola-forgetpass-list04">
                        <input :type="passType" name="pass" id="dola_user_pass" placeholder="请设置登录密码" autocomplete="off" />
                        <i class="check_pass" @click="isShowPass" :class="isShowPassClass"></i>
                    </li>
                </ul>
                <input type="submit" value="重置密码" class="dola-forgetpass-btn dola-forgetpass-btn" @click.prevent="forgetpass_submit" />
            </form>
        </div>
    </section>
</template>

<script>
    import TopBar from '../../components/TopBar.vue';


    import { MessageBox } from 'mint-ui';

    export default {
        name: 'forgetpass',
        data() {
            return {
                topBarName: '忘记密码',
                passType: 'password',
                isShowPassClass: ''
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
            forgetpass_submit() {
                console.log('forgetpass');
            }
        },
        mounted() {

        },
        components: {
            'top-bar': TopBar
        }
    }
</script>

<style lang="scss">
    .dola-forgetpass {
        height: 100%;
        background-color: #fff;
        .dola-forgetpass-content {
            padding-top: 44px;
            .dola-forgetpass-logo {
                display: block;
                width: 83px;
                height: 83px;
                margin: 45px auto;
                background: url("https://dolabank-apk.oss-cn-shenzhen.aliyuncs.com/dolabank/static/images/v2/wap/logo.png") center center no-repeat;
                background-size: cover;
                box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.07);
            }
            .dola-forgetpass-form {
                margin: 0 20px;
                .dola-forgetpass-lists {
                    .dola-forgetpass-list {
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
                        &.dola-forgetpass-list01 {
                            > input {
                                background: url("https://dolabank-apk.oss-cn-shenzhen.aliyuncs.com/dolabank/static/images/wechat/register/ico01.png") 5px center no-repeat;
                                background-size: 13px;
                            }
                        }
                        &.dola-forgetpass-list02, &.dola-forgetpass-list03 {
                            position: relative;
                            > input {
                                background: url("https://www.dolabank.club/static/images/wechat/register/ico02.png") 5px center no-repeat;
                                background-size: 17px;
                            }
                        }
                        &.dola-forgetpass-list02 {
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
                        &.dola-forgetpass-list03 {
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
                        &.dola-forgetpass-list04 {
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
                .dola-forgetpass-btn {
                    width: 100%;
                    height: 49px;
                    line-height: 49px;
                    border-radius: 5px;
                    text-align: center;
                    font-size: 17px;
                    color: #ff6700;
                    background: #fff;
                    &.dola-forgetpass-submit {
                        margin-top: 69px;
                        border: solid 1px #ff6700;
                    }
                    &.dola-forgetpass-btn {
                        display: block;
                        margin-top: 22px;
                        color: #fff;
                        background-image: linear-gradient(265deg, #ff6802 0%, #ff9832 100%);
                    }
                }
                .forgetpass-text {
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
</style>