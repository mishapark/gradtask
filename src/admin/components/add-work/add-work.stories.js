import addWork from "./add-work.vue";

export default {
    title: "addWork",
    components: {addWork}
}

export const defaultView = () => ({
    components: {addWork},

    template: `
    <addWork>
    </addWork>
    `
})

defaultView.story = {
    name: "Стандартный Вид"
}