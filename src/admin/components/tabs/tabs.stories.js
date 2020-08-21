import tabs from "./tabs.vue";
import { action } from "@storybook/addon-actions";

const methods = {

}

export default {
    title: "tabs",
    components: {tabs}
}

export const defaultView = () => ({
    components: {tabs},
    template: `
    <tabs>
    </tabs>
    `
})

defaultView.story = {
    name: "Стандартный Вид"
}


export const activeView = () => ({
    components: {tabs},
    template: `
    <tabs active>
    </tabs>
    `
})

activeView.story = {
    name: "Активный Вид"
}