import Vue from "vue";

const openBtn = {
    template: "#hamburger-open",
}

const closeBtn = {
    template: "#hamburger-close",
}

const hamContent = {
    template: "#hamburger-content",
}

const overlay = {
    template: "#hamburger-overlay",
    components: {hamContent, closeBtn}
}

new Vue({
    el: "#hamburger-component",
    template: "#hamburger-container",
    components: {overlay, openBtn},
    data() {
        return{
            isHam: false
        }
    },
    methods: {
        openHam() {
            this.isHam = true;
        },
        closeHam() {
            this.isHam = false;
        }
    }
})
