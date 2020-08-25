<template lang="pug">
    .about-component
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
</template>

<script>
import button from "../components/button/button"
import category from "../components/category/category";

export default {
    components: {
        iconedBtn: button,
        category,
    },
    data() {
        return {
            categories: [],
            emptyCatIsShown: false,
        }
    },
    created() {
        this.categories = require("../data/categories.json");
    }
}
</script>


<style lang="pcss" scoped src="../app.pcss"></style>