<template lang="pug">
    div(
        :class="['add-line-component', {blocked: blocked}]"
    )
        appInput(
            placeholder="Новый навык"
        ).name
        appInput(
            type="number"
            min="0"
            max="100"
            maxLength="3"
        ).percent
        <iconed-btn type="iconed" title="" />
</template>

<script>
import input from "../input";
import button from "../button";

export default {
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