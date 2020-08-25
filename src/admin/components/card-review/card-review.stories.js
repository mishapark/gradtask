import cardReview from "./card-review.vue";

export default {
    title: "cardReview",
    components: {cardReview}
}

export const defaultView = () => ({
    components: {cardReview},

    template: `
    <cardReview>
    </cardReview>
    `
})

defaultView.story = {
    name: "Стандартный Вид"
}