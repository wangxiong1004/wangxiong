<template>
    <section class="dola-login">
        <top-bar :topBarName="topBarName"></top-bar>
        <div class="dola-login-content">
            <img src="" alt="" class="dola-login-logo" />
            <form class="dola-login-form" autocomplete="off">
                <ul class="dola-login-lists">
                    <li class="dola-login-list dola-login-list01">
                        <input type="tel" name="tel" id="dola_user_tel" placeholder="请输入手机号" autocomplete="off" />
                    </li>
                    <li class="dola-login-list dola-login-list02">
                        <input :type="passType" name="pass" id="dola_user_pass" placeholder="请输入密码" autocomplete="off" />
                        <i class="check_pass" @click="isShowPass" :class="isShowPassClass"></i>
                    </li>
                </ul>
                <div class="forget-pass-wrapper">
                    <router-link :to="{path:'/user/forget_loginpass'}" class="forget-pass">忘记密码</router-link>
                </div>
            	<input type="submit" value="登录" class="dola-login-btn dola-login-submit" @click.prevent="loginWeb" />
            	<router-link :to="{ name:'register' }" class="dola-login-btn dola-register-btn">注册</router-link>
            </form>
        </div>
    </section>
</template>

<script>
    import TopBar from '../../components/TopBar.vue';

    export default {
        name: 'login',
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
            loginWeb() {
                console.log('login');
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
    .dola-login {
        height: 100%;
        background-color: #fff;
        .dola-login-content {
            padding-top: 44px;
            .dola-login-logo {
                display: block;
                width: 83px;
                height: 83px;
                margin: 45px auto;
                background: url("https://dolabank-apk.oss-cn-shenzhen.aliyuncs.com/dolabank/static/images/v2/wap/logo.png") center center no-repeat;
                background-size: cover;
                box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.07);
            }
            .dola-login-form {
                margin: 0 20px;
                .dola-login-lists {
                    .dola-login-list {
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
                        &.dola-login-list01 {
                            > input {
                                background: url("https://dolabank-apk.oss-cn-shenzhen.aliyuncs.com/dolabank/static/images/wechat/register/ico01.png") 5px center no-repeat;
                                background-size: 13px;
                            }
                        }
                        &.dola-login-list02 {
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
                .dola-login-btn {
                    width: 100%;
                    height: 49px;
                    line-height: 49px;
                    border-radius: 5px;
                    text-align: center;
                    font-size: 17px;
                    color: #ff6700;
                    background: #fff;
                    &.dola-login-submit {
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
            }
        }

    }
</style>