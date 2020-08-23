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
                v-model="currentSkill.title"
                noSlidePaddings
                :class="{inputError:validation.hasError('currentSkill.title')}"
                :errorMessage="validation.firstError('currentSkill.title')"
                )
        .percent
            appInput(
                v-model="currentSkill.percent"
                :class="{inputError:validation.hasError('currentSkill.percent')}"
                :errorMessage="validation.firstError('currentSkill.percent')"
                type="number"
                min="0"
                max="100"
                maxLength="3"
            )
        .button
            icon(symbol="tick" @click="onApprove").btn
            icon(symbol="cross" @click="onRemove").btn
</template>

<script>
import input from "../input";
import icon from "../icon";
import simpleVueValidator from "simple-vue-validator";
const { Validator } = simpleVueValidator;

export default {
    mixins: [simpleVueValidator.mixin],
    validators: {
        "currentSkill.title": value => {
        return Validator.value(value).required("Введите название");
        },
        "currentSkill.percent": value => {
        return Validator.value(value).required("Введите число");
        }
    },

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
            currentSkill: {
                id: 0,
                title: this.skill.title,
                percent: this.skill.percent
            }
        }
    },
   components: {
       icon,
       appInput: input
   },
   methods: {
       async onApprove() {
           this.$emit('approve', this.currentSkill)

            if ((await this.$validate()) === true) {
                if (this.skill.title === this.currentSkill.title) {
                    this.editmode = false;
                } else {
                    this.skill.title = this.currentSkill.title;
                    this.editmode = false;
                }

                if (this.skill.percent === this.currentSkill.percent) {
                    this.editmode = false;
                } else {
                    this.skill.percent = this.currentSkill.percent;
                    this.editmode = false;
                }
            }
       },
       onRemove() {
           this.editmode = false;
           this.currentSkill.title = this.skill.title;
           this.currentSkill.percent = this.skill.percent;
       }
   },
}
</script>

<style lang="postcss" scoped src="./skill.pcss"></style>