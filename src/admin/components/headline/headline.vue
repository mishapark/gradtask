<template lang="pug">
    .headline-component
        .container
            slot
            .title {{title}}
            .btns
                button(type="button" @click="logoutTheUser").btn Выйти
</template>

<script>
export default {
    props: {
        title: String
    },
    methods: {
      async logoutTheUser () {
        await this.$router.push('/login')
      }
    }
}
</script>

<style lang="postcss" scoped src="./headline.pcss"></style>