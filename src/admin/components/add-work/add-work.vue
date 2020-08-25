<template lang="pug">
   .add-work-component
        card
            .card-title(slot="title") Редактирование работы
            .card-wrapper(slot="content")
                .card-content
                    .img-upld
                        .drag-area
                            .drag-area__text Перетащите или загрузите для загрузки изображения
                            appButton(title="ЗАГРУЗИТЬ" typeAttr="file")
                    .edit-content
                        appInput(
                            title="Название"
                            :errorMessage="validation.firstError('editTitle')"
                            v-model="editTitle"
                            :class="{inputError:validation.hasError('editTitle')}"
                            placeholder="Введите название"
                        ).edit-title
                        appInput(
                            title="Ссылка"
                            :errorMessage="validation.firstError('editLink')"
                            v-model="editLink"
                            :class="{inputError:validation.hasError('editLink')}"
                            placeholder="Введите ссылку"
                        ).edit-link
                        appInput(
                            title="Описание" 
                            fieldType="textarea"
                            :errorMessage="validation.firstError('editText')"
                            v-model="editText"
                            :class="{inputError:validation.hasError('editText')}"
                            placeholder="Введите описание"
                        ).edit-text
                        tagsAdder.tags
                .btns
                    appButton(plain title="Отмена").cancel-btn
                    appButton(title="Сохранить").save-btn



</template>

<script>
import card from "../Card";
import input from "../input";
import tagsAdder from "../tagsAdder";
import btn from "../button";
import simpleVueValidator from "simple-vue-validator";
const { Validator } = simpleVueValidator;

export default {
    mixins: [simpleVueValidator.mixin],
    validators: {
        "editTitle": value => {
        return Validator.value(value).required("Введите название");
        },
        "editLink": value => {
        return Validator.value(value).required("Введите ссылку");
        },
        "editText": value => {
        return Validator.value(value).required("Введите текст");
        }
  },
   components: {
       card,
       appInput: input,
       tagsAdder,
       appButton: btn
   },
   data() {
    return {
      editTitle: '',
      editLink: '',
      editText: '',
    };
  },
}
</script>


<style lang="pcss" scoped src="./add-work.pcss">
</style>