<template lang="pug">
    .about-component
        .about-container(v-if="categories.length")
            .header
                .title Блок "Обо мне"
                <iconed-btn type="iconed" v-if="emptyCatIsShown === false" @click="emptyCatIsShown = true" title="Добавить группу" />
            ul.skills
                li(v-if="emptyCatIsShown").item
                    category(
                        @remove="emptyCatIsShown = false"
                        @approve="createCategory"
                        empty
                    )
                li(
                    v-for="category in categories"
                    :key="category.id"
                ).item
                    category(
                        :title="category.category"
                        :skills="category.skills"
                        @create-skill="createSkill($event, category.id)"
                        @edit-skill="editSkill"
                        @remove-skill="removeSkill"
                    )
        .about-container(v-else) Loading...
</template>

<script>
import button from "../components/button/button"
import category from "../components/category/category";
import { mapActions, mapState } from "vuex";

export default {
    components: {
        iconedBtn: button,
        category,
    },
    data() {
        return {
            emptyCatIsShown: false
        }
    },
    computed: {
        ...mapState("categories", {
            categories: state => state.data
        })
    },
    created() {
        this.fetchCategoriesAction();
    },
    methods: {
        ...mapActions({
            createCategoryAction: "categories/create",
            fetchCategoriesAction: "categories/fetch",
            addSkillAction: "skills/add",
            editSkillAction: "skills/edit",
            removeSkillAction: "skills/remove",
        }),
        async createSkill(skill, categoryId) {
            const newSkill = {
                ...skill,
                category: categoryId
            }
            await this.addSkillAction(newSkill);

            skill.title = "";
            skill.percent = "";
        },
        editSkill(skill) {
            this.editSkillAction(skill);
        },
        removeSkill(skill) {
            this.removeSkillAction(skill);
        },
        async createCategory(categoryTitle) {
            try {
                await this.createCategoryAction(categoryTitle);
                this.emptyCatIsShown = false;
            } catch (error) {
                console.log(error.message)
            }
        }
    }
}
</script>


<style lang="pcss" scoped src="../app.pcss"></style>