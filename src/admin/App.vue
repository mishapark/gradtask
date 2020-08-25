<template lang="pug">
    .root
        headline(title="Панель администрирования")
            avatar(
                title="Михаил Пак" 
                src="/src/images/content/user.jpg" 
                alt="user picture")
        tabs
        .page-content
            .page-container
                router-view
</template>

<script>
import "../styles/main.pcss"
import avatar from "./components/avatar/avatar"
import headline from "./components/headline/headline"
import tabs from "./components/tabs/tabs"

export default {
    components: {
        avatar, 
        headline, 
        tabs
    },
    data() {
        return {
            categories: [],
            emptyCatIsShown: false,
        }
    },
    created() {
        this.categories = require("./data/categories.json");
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