<template lang="pug">
  .avatar-component
    .image
      img(v-bind="$attrs" :src="userPic")
    .username {{ title }}
</template>
<script>
export default {
  props: {
    title: String,
    size: {
      type: String,
      default: "3"
    }
  },
  computed: {
    measures() {
      const size = Number(this.size);
      return {
        width: `${size}rem`,
        height: `${size}rem`,
      }
    },
    userPic() {
      return require("../../../images/content/user.jpg").default;
    }
  }
}
</script>
<style lang="postcss" scoped src="./avatar.pcss"></style>