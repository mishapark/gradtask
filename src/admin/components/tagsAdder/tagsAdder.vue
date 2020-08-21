<template lang="pug">
    .tags-adder-component
        appInput(
            v-model="currentTags"
            title="Добавление тега"
            @input="$emit('change', currentTags)"
        )
        ul.tags
            li.tag(
                v-for="(tag, index) in tagsArray"
                :key="`${tag}${index}`"
                v-if="tag.trim()"
            )
                tag(
                    @click="removeTag(tag)"
                    interactive
                    :title="tag"
                )
</template>

<script>
import appInput from "../input"
import tag from "../tag";

export default {
   components: {
    appInput,
    tag
   },
   props: {
       tags: {
           type: String,
           default: ""
       }
   },
   model: {
       prop: "tags",
       event: "change"
   },
   data() {
        return {
            currentTags: this.tags
        }
    },
    computed: {
        tagsArray() {
            return this.currentTags.trim().split(',');
        }
    },
    methods: {
        removeTag(tag) {
            const tags = [...this.tagsArray];
            const tagNdx = tags.indexOf(tag);

            if (tagNdx < 0) return;
            tags.splice(tagNdx, 1);
            this.currentTags = tags.join(", ");

            this.$emit("change", this.currentTags);
        }
    }
}
</script>

<style lang="postcss" scoped src="./tagsAdder.pcss"></style>