<template lang="pug">
    div(
        :class="['add-line-component', {blocked: blocked}]"
    )
        .component
            appInput(
                placeholder="Новый навык"
                v-model="skill.title"
                :errorMessage="validation.firstError('skill.title')"
                :class="{inputError:validation.hasError('skill.title')}"
            ).name
            appInput(
                type="number"
                min="0"
                max="100"
                maxLength="3"
                v-model="skill.percent"
                :errorMessage="validation.firstError('skill.percent')"
                :class="{inputError:validation.hasError('skill.percent')}"
            ).percent
            <iconed-btn type="round" title="" @click="handleClick"/>
</template>

<script>
import input from "../input";
import button from "../button";

import simpleVueValidator from "simple-vue-validator";
const { Validator } = simpleVueValidator;

export default {
    mixins: [simpleVueValidator.mixin],
    validators: {
        "skill.title": value => {
        return Validator.value(value).required("Введите название навыка");
        },
        "skill.percent": value => {
        return Validator.value(value)
            .required("Введите число")
            .integer("Должно быть числом")
            .between(0, 100, "Некорректное значение");
        }
    },
    data() {
        return {
            skill: {
                title: "",
                percent: ""
            }
        }
    },
    props: {
        blocked: Boolean
    },
   components: {
       appInput: input,
       iconedBtn: button,
   },
   methods: {
       async handleClick() {
           if (await this.$validate() === false) return;
           this.$emit('approve', this.skill)
       }
   }
}
</script>

<style lang="postcss" scoped src="./skillAddLine.pcss"></style>