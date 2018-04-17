<template>
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

</style>