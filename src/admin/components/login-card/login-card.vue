<template lang="pug">
    .login-card-component
        .login-card-container
            .close-btn
            .login-title Авторизация
            .login-input
                appInput(
                    title="Логин" icon="user"
                    :errorMessage="validation.firstError('login')"
                    v-model="login"
                    :class="{inputError:validation.hasError('login')}"
                    placeholder="Введите логин"
                ).user-input
                appInput(
                    title="Пароль" icon="key"
                    :errorMessage="validation.firstError('password')"
                    v-model="password"
                    :class="{inputError:validation.hasError('password')}"
                    type="password"
                    placeholder="Введите пароль"
                ).password-input
            .login-btn
                appButton.submit-btn
</template>

<script>
import input from "../input";
import button from "../button";
import simpleVueValidator from "simple-vue-validator";
const { Validator } = simpleVueValidator;

export default {
    components: {
        appInput: input,
        appButton: button
    },
    data() {
        return {
           login: '',
           password: ''
        }
    },
    mixins: [simpleVueValidator.mixin],
    validators: {
        "login": value => {
        return Validator.value(value).required("Введите логин");
        },
        "password": value => {
        return Validator.value(value).required("Введите пароль");
        }
  }
}
</script>


<style lang="pcss" scoped src="./login-card.pcss"></style>