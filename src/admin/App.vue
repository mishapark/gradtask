<template lang="pug">
    .root
        headline(title="Панель администрирования")
            avatar(
                title="Михаил Пак" 
                :size="size"
                src="/src/images/content/user.jpg" 
                alt="user picture")
        tabs
        .page-content
            .container
                .header
                    .title Блок "Обо мне"
                    <iconed-btn type="iconed" v-if="emptyCatIsShown === false" @click="emptyCatIsShown = true" title="Добавить группу" />
                ul.skills
                    li(v-if="emptyCatIsShown").item
                        category(
                            @remove="emptyCatIsShown = false"
                            empty
                        )
                    li(
                        v-for="category in categories"
                        :key="category.id"
                    ).item
                        category(
                            :title="category.category"
                            :skills="category.skills"
                        )
                tagsAdder

    
</template>

<script>
import "../styles/main.pcss"
import avatar from "./components/avatar/avatar"
import headline from "./components/headline/headline"
import tabs from "./components/tabs/tabs"
import button from "./components/button/button"
import category from "./components/category/category";
import tagsAdder from "./components/tagsAdder";

export default {
    components: {
        avatar, 
        headline, 
        tabs,
        iconedBtn: button,
        category,
        tagsAdder
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


<style lang="pcss" scoped src="./app.pcss"></style>