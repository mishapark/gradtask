<template lang="pug">
    .card-work-component
        .card-work__preview
            img(:src="work.photo").card-work__img
            ul.work-tags
                li.work-tags__item(v-for="tag in tags") {{tag}}
        .card-work__desc
            .card-work__title {{work.title}}
            .card-work__text {{work.desc}}
            a(:href="work.link").card-work__link {{work.link}}
            .card-work__btns
                icon(title="Править")
                icon(title="Удалить" symbol="cross")
</template>

<script>
import icon from "../icon"
import tag from "../tag"

export default {
    components: {
        icon,
        tag
    },
    props: {
        work: {
            type: Object
        }
    },
    computed: {
        tags() {
            return this.work.skills.split(', ');
        }
    }
}
</script>


<style lang="pcss" scoped src="./card-work.pcss">
</style>