<template>
    <div id="app">
        <div class="dola-content">
            <router-view></router-view>
        </div>
        <div class="bottom-nav">
            <router-link :to="{name: 'home'}" class="dola-nav nav-home">
                <img src="" class="nav-img" />
                <p class="nav-text">首页</p>
            </router-link>
            <router-link :to="{name: 'product'}" class="dola-nav nav-product">
                <img src="" class="nav-img" />
                <p class="nav-text">投资</p>
            </router-link>
            <router-link :to="{name: 'user'}" class="dola-nav nav-user">
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

            }
        }
    }
</script>

<style lang="scss">
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

    @media only screen and (min-width: 640px) {
        body {
            background: #666;
        }
    }
</style>