<template>
  <ul>
    <li v-for="list in lists">{{ list }}</li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        lists: ['width', 'background', 'height']
      };
    }
  };
</script>

<style>
</style>