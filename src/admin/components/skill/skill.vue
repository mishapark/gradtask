<template lang="pug">
    .skill-component(v-if="editmode === false")
        .title {{skill.title}}
        .percent {{skill.percent}} %
        .button
            icon(symbol="pencil" @click="editmode = true" grayscale).btn
            icon(symbol="trash" @click="$emit('remove', skill.id)" grayscale).btn
    .skill-component(v-else)
        .title
            appInput(
                v-model="currenSkill.title"
                noSlidePaddings
                )
        .percent
            appInput(
                v-model="currenSkill.percent"
                type="number"
                min="0"
                max="100"
                maxLength="3"
            )
        .button
            icon(symbol="tick" @click="$emit('approve', currentSkill)").btn
            icon(symbol="cross" @click="editmode = false").btn
</template>

<script>
import input from "../input";
import icon from "../icon";

export default {
    props: {
        skill: {
            type: Object,
            default: () => {},
            required: true
        }
    },
    data() {
        return {
            editmode: false,
            currenSkill: {
                id: 0,
                title: this.skill.title,
                percent: this.skill.percent
            }
        }
    },
   components: {
       icon,
       appInput: input
   }
}
</script>

<style lang="postcss" scoped src="./skill.pcss"></style>