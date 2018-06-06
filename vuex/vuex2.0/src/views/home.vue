<template>
    <div class="home">
        <button @click="user">获取用户中心数据</button>
        <pre>
            {{ userBankInfo }}
        </pre>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";

export default {
    computed: {
        // ...mapGetters(['appindex', 'user', 'userBankInfo']),
        ...mapState({
            userBankInfo: state => state.home.userBankInfo
        })
    },
    methods: {
        ...mapActions(['user'])
    },
    mounted() {
        this.$store.dispatch({
            type: 'appindex'
        });
    }
}
</script>
