<template lang="pug">
    .headline-component
        .container
            slot
            .title {{title}}
            .btns
                button(type="button" @click="$emit('action', 'logout')").btn Выйти
</template>

<script>
export default {
    props: {
        title: String
    }
}
</script>

<style lang="postcss" scoped src="./headline.pcss"></style>