<template>
  <div class="edit-line-component" :class="{'blocked' : blocked}">
    <div class="title" v-if="editmode === false">
      <div class="text">{{value}}</div>
      <div class="icon">
        <icon symbol="pencil" grayscale @click="editmode = true"></icon>
      </div>
    </div>
    <div v-else class="title">
      <div class="input">
        <div class="message">{{ validation.firstError("editTitle") }}</div>
        <app-input
          placeholder="Название новой группы"
          :value="value"
          @input="$emit('input', $event)"
          @keydown.native.enter="onApprove"
          autofocus="autofocus"
          no-side-paddings="no-side-paddings"
          v-model="editTitle"
          :class="{inputError:validation.hasError('editTitle')}"
        ></app-input>
      </div>
      <div class="buttons">
        <div class="button-icon">
          <icon symbol="tick" @click="onApprove"></icon>
        </div>
        <div class="button-icon">
          <icon symbol="cross" @click="onRemove"></icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import simpleVueValidator from "simple-vue-validator";
const { Validator } = simpleVueValidator;

export default {
  mixins: [simpleVueValidator.mixin],
  validators: {
    "editTitle": value => {
      return Validator.value(value).required("Введите название");
    }
  },

  props: {
    value: {
      type: String,
      default: ""
    },
    errorText: {
      type: String,
      default: ""
    },
    editModeByDefault: Boolean,
    blocked: Boolean
  },
  data() {
    return {
      editmode: this.editModeByDefault,
      title: this.value,
      editTitle: '',
    };
  },
  methods: {
    onApprove() {
      this.$validate().then(function(success) {
        if (success === true) {
          if (this.title.trim() === this.value.trim()) {
            this.editmode = false;
          } else {
            this.$emit("approve", this.value);
          }
        }
      });
    },
    onRemove() {
        this.editmode = false;
        this.$emit('remove');
    }
  },
  components: {
    icon: () => import("components/icon"),
    appInput: () => import("components/input")
  }
};
</script>

<style lang="postcss" scoped src="./editLine.pcss"></style>