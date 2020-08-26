<template lang="pug">
   .add-review-component
        card
            .card-title(slot="title") Новый отзыв
            .card-wrapper(slot="content")
                .card-content
                    .user-pic
                        .pic-upld
                            .pic
                            appButton(plain title="Добавить фото")
                    .edit-content
                        .user-info
                            appInput(
                                title="Имя автора"
                                :errorMessage="validation.firstError('editName')"
                                v-model="editName"
                                :class="{inputError:validation.hasError('editName')}"
                                placeholder="Введите имя"
                            ).edit-name
                            appInput(
                                title="Титул автора"
                                :errorMessage="validation.firstError('editOcc')"
                                v-model="editOcc"
                                :class="{inputError:validation.hasError('editOcc')}"
                                placeholder="Введите должность"
                            ).edit-occ
                        .user-review
                            appInput(
                                title="Отзыв" 
                                fieldType="textarea"
                                :errorMessage="validation.firstError('editText')"
                                v-model="editText"
                                :class="{inputError:validation.hasError('editText')}"
                                placeholder="Напишите отзыв"
                            ).edit-text
                .btns
                    appButton(plain title="Отмена").cancel-btn
                    appButton(title="Сохранить").save-btn
</template>

<script>
import card from "../Card";
import input from "../input";
import btn from "../button";
import simpleVueValidator from "simple-vue-validator";
const { Validator } = simpleVueValidator;

export default {
    mixins: [simpleVueValidator.mixin],
    validators: {
        "editName": value => {
        return Validator.value(value).required("Введите имя");
        },
        "editOcc": value => {
        return Validator.value(value).required("Введите должность");
        },
        "editText": value => {
        return Validator.value(value).required("Введите текст");
        }
  },
   components: {
       card,
       appInput: input,
       appButton: btn
   },
   data() {
    return {
      editName: '',
      editOcc: '',
      editText: '',
    };
  },
}
</script>


<style lang="pcss" scoped src="./add-review.pcss">
</style>