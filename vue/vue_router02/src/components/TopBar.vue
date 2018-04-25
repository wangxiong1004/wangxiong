<template>
    <header class="top-bar">
        <div class="top-bar-left">
            <a href="javascript:;" @click="back">
                <button class="top-bar-btn">
                    <span class="top-bar-icon">
                        <i class="tob-bar-back"></i>
                    </span>
                </button>
            </a>
        </div>
        <h1 class="top-bar-title">{{ topBarName }}</h1>
        <div class="top-bar-right"></div>
    </header>
</template>

<script>
    export default {
        name: 'topbar',
        props: {
            topBarName: {
                type: String
            }
        },
        methods: {
            back() {
                this.$router.go(-1);
            }
        }
    }
</script>

<style lang="scss">
    .top-bar {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 1;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: #ff6700;
        box-sizing: border-box;
        color: #fff;
        display: flex;
        font-size: 18px;
        height: 44px;
        line-height: 1;
        padding: 0 10px;
        text-align: center;
        white-space: nowrap;
        .top-bar-left {
            flex: 0.5;
            text-align: left;
            > a {
                color: inherit;
                .top-bar-btn {
                    background-color: transparent;
                    border: 0;
                    box-shadow: none;
                    color: inherit;
                    display: inline-block;
                    padding: 0;
                    font-size: inherit;
                    height: 41px;
                    outline: 0;
                    overflow: hidden;
                    position: relative;
                    text-align: center;
                    box-sizing: border-box;
                    appearance: none;
                    .top-bar-icon {
                        vertical-align: middle;
                        display: inline-block;
                        .tob-bar-back {
                            font-size: 16px;
                            font-style: normal;
                            -webkit-font-smoothing: antialiased;
                            -webkit-text-stroke-width: .2px;
                            -moz-osx-font-smoothing: grayscale;
                            &:before {
                                content: "\E600";
                            }
                        }
                    }
                }
            }
        }
        .top-bar-title {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: inherit;
            font-weight: 400;
            flex: 1;
        }
        .top-bar-right {
            flex: 0.5;
            text-align: right;
        }
    }
</style>