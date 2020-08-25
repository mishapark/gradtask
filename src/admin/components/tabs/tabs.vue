<template lang="pug">
    .tabs-component
        .container
            ul.tabs
                    li(
                        :class="['item']"
                    ).tab
                       router-link(to="/").tab-link Обо мне
                    li(
                        :class="['item']"
                    ).tab
                       router-link(to="/works").tab-link Работы
                    li(
                        :class="['item']"
                    ).tab
                       router-link(to="/reviews").tab-link Отзывы
</template>

<script>

export default {
   
}
</script>

<style lang="postcss" scoped src="./tabs.pcss"></style>