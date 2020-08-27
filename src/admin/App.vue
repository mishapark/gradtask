<template lang="pug">
    .root
        div(v-if="$route.meta.public").login-page
            router-view
        div(v-else)
            headline(title="Панель администрирования")
                avatar(
                    title="Михаил Пак" 
                    src="/src/images/content/user.jpg" 
                    alt="user picture")
            tabs
            .page-content
                .page-container
                    router-view
        div(:class="['notify-container', {active: isTooltipShown}]")
                .notification
                    notification(
                        :type="tooltipType"
                        :text="tooltipText"
                        @click="hideTooltip"
                    )
</template>

<script>
import "../styles/main.pcss"
import avatar from "./components/avatar/avatar"
import headline from "./components/headline/headline"
import tabs from "./components/tabs/tabs"
import notification from "./components/notification"
import { mapState, mapActions } from "vuex";

export default {
    components: {
        avatar, 
        headline, 
        tabs,
        notification
    },
    data() {
        return {
            categories: [],
            emptyCatIsShown: false,
        }
    },
    created() {
        this.categories = require("./data/categories.json");
    },
    computed: {
        ...mapState("tooltips", {
            isTooltipShown: state => state.isShown,
            tooltipText: state => state.text,
            tooltipType: state => state.type
        })
    },
    methods: {
        ...mapActions({
            hideTooltip: "tooltips/hide"
        })
    }
}
</script>


<style lang="pcss" scoped src="./app.pcss">
@import url("../styles/mixins.pcss");
    .container {
        @include phones {
            width: 100%;
        }
    }
</style>