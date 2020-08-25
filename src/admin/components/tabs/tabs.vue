<template lang="pug">
    .tabs-component
        .container
            ul.tabs
                    li(
                        v-for="link in links" 
                        :key="link.id"
                        :class="['item', {active: link.active}]"
                    ).tab
                        a(
                            :href="`/${link.alias}`" 
                            class="tab-link"
                            @click="link.active = false"
                        ) {{link.title}}
</template>

<script>
const links = [
    {id: 0, title: "Обо мне", alias: "admin#/", active: false},
    {id: 1, title: "Работы", alias: "admin#/works", active: false},
    {id: 2, title: "Отзывы", alias: "admin#/reviews", active: false}
]

export default {
    data() {
        return {
            links
        }
    }
}
</script>

<style lang="postcss" scoped src="./tabs.pcss"></style>