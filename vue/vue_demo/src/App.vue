<template>
  <div id="app">
      <router-link to='/user'>user</router-link>
      <router-link to='/login'>login</router-link>

      <div>
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
  // import { Toast } from 'mint-ui';
  // import LoadMore from './components/loadMore.vue';
  // import navbar from './components/navbar.vue'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  methods: {
   
  },
  components: {
   
  }
}
</script>

<style lang="scss">

</style>
