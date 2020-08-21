<template lang="pug">
    card
        editLine(
            @remove="$emit('remove', $event)"
            slot="title"
            v-model="categoryTitle"
            :editModeByDefault="empty"
            )
        template(slot="content")
            ul.skills(
                v-if="empty === false"
            )
                li(v-for="skill in skills" :key="skill.id").item
                    skill(
                        @remove="$emit('remove-skill', $event)"
                        @approve="$emit('edit-skill', $event)"
                        :skill="skill"
                    )
            .bottom-line
                skillAddLine(
                    :blocked="empty"
                )

</template>

<script>
import card from "../Card";
import editLine from "../editLine";
import skill from "../skill";
import skillAddLine from "../skillAddLine";

export default {
    components: {
        card,
        editLine,
        skill,
        skillAddLine
    },
    props: {
        empty: Boolean,
        title: {
            type: String,
            default: ""
        },
        skills: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            categoryTitle: this.title
        }
    }
}
</script>

<style lang="postcss" scoped src="./category.pcss"></style>