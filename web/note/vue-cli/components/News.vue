<template>
  <div>
    <div>News</div>
    <ul>
      <li>
        <a v-link="{path: '/news/detail/001'}">新闻001</a>
      </li>
      <li>
        <a v-link="{path: '/news/detail/002'}">新闻002</a>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
</script>

<style>
</style>