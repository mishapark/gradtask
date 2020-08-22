<template lang="pug">
    div(
        :class="['add-line-component', {blocked: blocked}]"
    )
        .component
            appInput(
                placeholder="Новый навык"
                v-model="input.skill"
                :class="{inputError:validation.hasError('input.skill')}"
            ).name
            appInput(
                type="number"
                min="0"
                max="100"
                maxLength="3"
                v-model="input.percent"
                :class="{inputError:validation.hasError('input.percent')}"
            ).percent
            <iconed-btn type="iconed" title="" />
        .message-col
            .message {{ validation.firstError("input.skill") }}
            .message {{ validation.firstError("input.percent") }}
</template>

<script>
import input from "../input";
import button from "../button";

import simpleVueValidator from "simple-vue-validator";
const { Validator } = simpleVueValidator;

export default {
    mixins: [simpleVueValidator.mixin],
    validators: {
        "input.skill": value => {
        return Validator.value(value).required("Введите название навыка");
        },
        "input.percent": value => {
        return Validator.value(value).required("Введите число");
        }
    },
    data() {
        return {
            input: {
                skill: "",
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
   }
}
</script>

<style lang="postcss" scoped src="./skillAddLine.pcss"></style>