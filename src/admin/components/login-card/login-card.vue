<template lang="pug">
    .login-card-component
        .login-card-container
            .close-btn
            .login-title Авторизация
            form(@submit.prevent="login").login-form
                .login-input
                    appInput(
                        title="Логин" icon="user"
                        :errorMessage="validation.firstError('user.name')"
                        v-model="user.name"
                        :class="{inputError:validation.hasError('user.name')}"
                        placeholder="Введите логин"
                    ).user-input
                    appInput(
                        title="Пароль" icon="key"
                        :errorMessage="validation.firstError('user.password')"
                        v-model="user.password"
                        :class="{inputError:validation.hasError('user.password')}"
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
import axios from "axios";

const { Validator } = simpleVueValidator;
const baseUrl = "https://webdev-api.loftschool.com";
const token = localStorage.getItem('token') || "";

export default {
    components: {
        appInput: input,
        appButton: button
    },
    data() {
        return {
            user: {
                name: '',
                password: ''
            }
        }
    },
    mixins: [simpleVueValidator.mixin],
    validators: {
        "user.name": value => {
        return Validator.value(value).required("Введите логин");
        },
        "user.password": value => {
        return Validator.value(value).required("Введите пароль");
        }
    },
    methods: {
        login() {
            axios
            .post(baseUrl + '/login', this.user)
            .then(response => {
                const token = response.data.token;
                axios.defaults.headers["Authorization"] = `Bearer ${token}`;
                localStorage.setItem('token', token)
                console.log(response.data)
            }).catch(error => {
                console.log(error.response.data)
            })
        }
    }
}
</script>


<style lang="pcss" scoped src="./login-card.pcss"></style>