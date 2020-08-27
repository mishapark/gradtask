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
                    appButton(:disabled="isSubmitDisabled").submit-btn
</template>

<script>
import input from "../input";
import button from "../button";
import $axios from "../../requests";
import simpleVueValidator from "simple-vue-validator";
import { mapActions } from "vuex";

const { Validator } = simpleVueValidator;

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
            },
            isSubmitDisabled: false
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
        ...mapActions ({
            showTooltip: "tooltips/show"
        }),
        async login() {
            if (await this.$validate() === false) return;
            this.isSubmitDisabled = true;
            try {
                const response = await $axios.post('/login', this.user)

                const token = response.data.token;
                $axios.defaults.headers["Authorization"] = `Bearer ${token}`;
                localStorage.setItem('token', token);
                this.$router.replace('/');
                console.log(response.data);
            } catch (error) {
                this.showTooltip({
                    text: error.response.data.error,
                    type: "error"
                })
            } finally {
                this.isSubmitDisabled = false;
            }
        }
    }
}
</script>


<style lang="pcss" scoped src="./login-card.pcss"></style>