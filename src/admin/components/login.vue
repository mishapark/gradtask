<template lang="pug">
    .login-component
        .login-container
            loginCard
</template>

<script>
import loginCard from "./login-card";

export default {
    components: {
        loginCard
    },
    data() {
        return {
           
        }
    }
}
</script>


<style lang="pcss" scoped>
.login-component {
    height: inherit;
}
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: inherit;
    background: url("../../images/content/login.jpg")  center center / cover no-repeat;
}
</style>