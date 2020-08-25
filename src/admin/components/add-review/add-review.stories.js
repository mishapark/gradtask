import addReview from "./add-review.vue";

export default {
    title: "addReview",
    components: {addReview}
}

export const defaultView = () => ({
    components: {addReview},

    template: `
    <addReview>
    </addReview>
    `
})

defaultView.story = {
    name: "Стандартный Вид"
}