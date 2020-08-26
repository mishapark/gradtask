import loginCard from "./login-card.vue";

export default {
    title: "loginCard",
    components: {loginCard}
}

export const defaultView = () => ({
    components: {loginCard},
    template: `
    <loginCard>
    </loginCard>
    `
})

defaultView.story = {
    name: "Стандартный Вид"
}