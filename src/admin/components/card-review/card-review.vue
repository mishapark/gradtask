<template lang="pug">
    .card-review-component
        card
            .card-title(slot="title")
                img(:src="review.photo").user-pic
                .user-info
                    .user-name {{review.name}}
                    .user-occ {{review.occ}}
            .card-wrapper(slot="content")
                .text {{review.text}}
                .card-review__btns
                    icon(title="Править")
                    icon(title="Удалить" symbol="cross")
</template>

<script>
import card from "../Card"
import icon from "../icon"

export default {
    components: {
        card,
        icon,
    },
    props: {
        review: {
            type: Object
        }
    }
}
</script>


<style lang="pcss" scoped src="./card-review.pcss">
</style>