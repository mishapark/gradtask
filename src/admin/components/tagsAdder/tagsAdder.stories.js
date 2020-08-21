import tagsAdder from "./tagsAdder.vue";

export default {
    title: "tagsAdder",
    components: {tagsAdder}
}

export const defaultView = () => ({
    components: {tagsAdder},
    data() {
        return {
            tags: "One, Two, Three"
        }
    },
    template: `
    <tagsAdder v-model="tags">
    </tagsAdder>
    `,
})

defaultView.story = {
    name: "Стандартный Вид"
}