<template>
  <div>
    <p>welcome vue!</p>
    <p @click="change">{{ msg }}</p>

    <!-- 引入组件 -->
    <menu></menu>

    <!-- 路由 -->
    <div>
      <a v-link="{path: '/home'}">主页</a>
      <a v-link="{path: '/news'}">新闻</a>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import Menu from './components/Menu.vue';
  export default {
    data() {
      return {
        msg: "hello vue-cli"
      }
    },
    methods: {
      change() {
        this.msg = this.msg.split('').reverse().join('');
      }
    },
    components: {
      Menu
    }
  };
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    background: #ccc;
  }
</style>