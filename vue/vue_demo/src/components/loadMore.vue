<template>
  <div>
    <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange">
      <ul>
        <li v-for="item in list">{{ item }}</li>
      </ul>
      <div slot="top" class="mint-loadmore-top">
        <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
        <span v-show="topStatus === 'loading'">Loading...</span>
      </div>
    </mt-loadmore>
  </div>
</template>

<script>
  import { Loadmore } from 'mint-ui';

  export default {
    data() {
      return {
        topStatus: '',
        allLoaded: '',
        list:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      }
    },
    methods: {
      handleTopChange(status) {
        this.topStatus = status;
      },
      loadTop() {
        // 加载更多数据
        this.$refs.loadmore.onTopLoaded();
      },
      loadBottom() {
        this.allLoaded = true;// 若数据已全部获取完毕
        this.$refs.loadmore.onBottomLoaded();
      }
    }
  };
</script>

<style>
</style>