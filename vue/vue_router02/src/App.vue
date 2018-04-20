<template>
    <div id="app" class="dola-app">
        <div class="dola-content">
            <router-view></router-view>
        </div>
        <div class="bottom-nav" v-if="isNavShow">
            <router-link :to="{name: 'home'}" class="dola-nav nav-home">
                <img src="" class="nav-img" />
                <p class="nav-text">首页</p>
            </router-link>
            <router-link :to="{name: 'product'}" class="dola-nav nav-product">
                <img src="" class="nav-img" />
                <p class="nav-text">投资</p>
            </router-link>
            <router-link :to="{name: 'user'}" class="dola-nav nav-user" v-if="isLogin">
                <img src="" class="nav-img" />
                <p class="nav-text">我的</p>
            </router-link>
            <router-link :to="{name: 'login'}" class="dola-nav nav-user" v-else>
                <img src="" class="nav-img" />
                <p class="nav-text">我的</p>
            </router-link>
            <router-link :to="{name: 'more'}" class="dola-nav nav-more">
                <img src="" class="nav-img" />
                <p class="nav-text">更多</p>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                isNavShow: true,
                isLogin: false
            }
        },
        watch: {
            "$route"(to, from) {
                if (to.name === 'login') {
                	this.isNavShow = false;
                } else {
                    this.isNavShow = true;
                }
            }
        },
        mounted() {
            if (this.$router.history.current.name === 'login') {
                this.isNavShow = false;
            }
        }
    }
</script>

<style lang="scss">
    .dola-app {
        max-width: 640px;
        height: 100%;
        margin: 0 auto;
        background: #fafafa;
        .dola-content {
            height: 100%;
            .bottom-nav {
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                z-index: 100;
                width: 100%;
                max-width: 640px;
                margin: 0 auto;
                height: 49px;
                display: flex;
                border-top: 1px solid #d4d4d4;
                background: #f9f9f9;
                .dola-nav {
                    flex: 1;
                    display: block;
                    text-align: center;
                    color: #555;
                    .nav-text {
                        font-size: 11px;
                    }
                    &.active {
                        color: #f63;
                    }
                }
            }
        }
    }

    @media only screen and (min-width: 640px) {
        body {
            background: #666;
        }
    }
</style>