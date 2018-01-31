<template>
  <div>
    <p>Home</p>
    <ul>
      <li>
        <a v-link="{path: '/home/register'}">注册</a>
      </li>
      <li>
        <a v-link="{path: '/home/login'}">登录</a>
      </li>
    </ul>
    <div class="box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
</script>

<style>
  .box {
    padding: 20px;
    border: 1px dashed #000;
  }
</style>