<template>
    <section class="dola-login">
        <top-bar :topBarName="topBarName"></top-bar>
        <div class="dola-login-content">
            <img src="" alt="" class="dola-login-logo" />
            <form class="dola-login-form">
                <ul class="dola-login-lists">
                    <li class="dola-login-list dola-login-list01">
                        <input type="tel" name="tel" id="dola_user_tel" placeholder="请输入手机号" />
                    </li>
                    <li class="dola-login-list dola-login-list02">
                        <input type="password" name="pass" id="dola_user_pass" placeholder="请输入密码" />
                        <i class="check_pass"></i>
                    </li>
                </ul>
                <div class="forget-pass-wrapper">
                    <a href="javascript:;" class="forget-pass" @click.prevent="toRestPass">忘记密码</a>
                </div>
            	<input type="submit" value="登录" class="dola-login-submit" @click.prevent="loginWeb" />
            	<a href="javascript:;" class="dola-register">注册</a>
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
                topBarName: '登录'
            }
        },
        methods: {
            toRestPass() {
                console.log('pass');
//              this.$router.push();
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
                            > input {
                                background: url("https://dolabank-apk.oss-cn-shenzhen.aliyuncs.com/dolabank/static/images/wechat/register/ico03.png") 5px center no-repeat;
                                background-size: 14px;
                            }
                        }
                    }
                }
            }
        }

    }
</style>