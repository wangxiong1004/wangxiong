<template>
<<<<<<< HEAD
  <div id="app">
    <div class="dola-content">
      <router-view></router-view>
    </div>
    <nav class="dola-nav border-1px" v-if="isNavShow">
      <router-link :to="{name: 'home'}" class="nav-item nav-item01">
        <img src="" class="nav-icon" />
        <p class="nav-text">首页</p>
      </router-link>
      <router-link :to="{name: 'product'}" class="nav-item nav-item02">
        <img src="" class="nav-icon" />
        <p class="nav-text">投资</p>
      </router-link>
      <router-link :to="{name: 'user'}" class="nav-item nav-item03">
        <img src="" class="nav-icon" />
        <p class="nav-text">我的</p>
      </router-link>
      <router-link :to="{name: 'more'}" class="nav-item nav-item04">
        <img src="" class="nav-icon" />
        <p class="nav-text">更多</p>
      </router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        isNavShow: true
      }
    },
    mounted() {
      console.log(this.$router.history.current.path)

      if (this.$router.history.current.path === '/login') {
      	this.isNavShow = false;
      }
    },
    watch: {
      '$route'(to, from) {

        if (to.name === 'user' || to.name === 'login' ) {
          this.$router.push({name: 'login'});
          this.isNavShow = false;
        } else {
          this.isNavShow = true;
        }
      }
    },
    methods: {
    },
    created() {
    }
  }
</script>

<style lang="scss">
  /*@import "./common/sass/mixin";*/

  .dola-nav {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100%;
    max-width: 640px;
    height: 49px;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      width: 100%;
      border-top: 1px solid #d4d4d4;
    }
    .nav-item {
      display: block;
      flex: 1;
      text-align: center;
      background: #f9f9f9;
      .nav-icon {
        display: block;
        width: 22px;
        height: 22px;
        margin: 4px auto 0;
        border-radius: 50%;
        background: red;
      }
      .nav-text {
        font-size: 11px;
        line-height: 22px;
        color: #555;
      }
      &.active {
        .nav-text {
          color: #f63;
        }
      }
    }
  }
=======
    <div id="app">
        <router-link to="/user">user</router-link>
        <router-link to="/login">login</router-link>
        <router-view></router-view>
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

>>>>>>> 8b81a1a095efa6e0c8d736c493ce793ecf6f02e6
</style>