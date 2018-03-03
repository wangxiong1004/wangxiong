<template>
  <div id="app">
    <p>vuex</p>
    <button @click="add">alert</button>
    <button @click="increment">增加</button>
    <button @click="decrement">减少</button>
    <button @click="clickOdd">偶数才能点击增加</button>
    <button @click="clickSync">点击异步</button>
    <div>现在是数字为： {{ count }}</div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    ...mapActions([
      'increment',
      'decrement',
      'clickOdd',
      'clickSync'
    ]),
    add() {
      alert('hello vuex');
    }
  },
  computed: {
    ...mapGetters([
      'count'
    ])
  }
  // computed: mapGetters([])
}
</script>
<!-- $store.state.count -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
