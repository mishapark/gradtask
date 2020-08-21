<template>
  <div class="tag-component">
    <div class="tag">{{title}}</div>
    <icon grayscale symbol="cross" class="icon" v-on="$listeners"/>
  </div>
</template>

<script>
import icon from "../icon";

export default {
  components: {
    icon
  },
  props: {
    title: {
      type: String,
      default: ""
    }
  }
}
</script>

<style lang="postcss" scoped src="./tag.pcss"></style>