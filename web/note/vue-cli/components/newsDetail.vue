<template>
  <div>
    {{ $route.params | json }}<!-- 路由信息 -->
    <br />
    {{ $route.query | json }}<!-- 参数 -->
  </div>
</template>

<script>
</script>

<style>
</style>