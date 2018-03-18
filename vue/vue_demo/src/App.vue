<template>
  <div id="app">
  
    <navbar></navbar>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  import LoadMore from './components/loadMore.vue';
  import navbar from './components/navbar.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      instance: ""
    }
  },
  methods: {
    toast() {
      var instance = Toast({
        message: '操作成功',
        position: 'bottom',
        iconClass: 'icon icon-success',
        duration: 100000
      });

      setTimeout(function() {
        instance.close();
      }, 2000)
    },
    close() {

    }
  },
  components: {
    loadmore: LoadMore,
    navbar
  }
}
</script>

<style lang="scss">

</style>
