import Vue from "vue";

const thumbs = {
    props: ["works", "currentWork"],
    template: "#slider-thumbs"
}
const btns = {
    template: "#slider-btns",
}
const display = {
    props: ["currentWork", "works", "currentIndex"],
    template: "#slider-display",
    components: {thumbs, btns},
    computed: {
        slicedWorks() {
            const works = [...this.works];
            return works.slice(0, 3);
        }
    }
}
const tags = {
    props: ["tags"],
    template: "#slider-tags"
}
const info = {
    props: ["currentWork"],
    template: "#slider-data",
    components: {tags},
    computed: {
        tagsArray() {
            return this.currentWork.skills.split(",");
        }
    }
}

new Vue({
    el: "#preview-component",
    template: "#slider-container",
    components: {display, info},
    data() {
        return {
            works: [],
            currentIndex: 0
        }
    },
    computed: {
        currentWork() {
            return this.works[0];
        }
    },
    watch: {
        currentIndex(value) {
            this.makeInfiniteLoopForNdx(value);
        },
    },
    methods: {
        makeInfiniteLoopForNdx(index) {
            const worksNumber = this.works.length - 1
            if (index < 0) this.currentIndex = worksNumber;
            if (index > worksNumber) this.currentIndex = 0;
        },
        requireImagesToArray(data) {
            return data.map(item => {
                const requiredImage = require(`../images/content/${item.photo}`).default;
                item.photo = requiredImage;
                return item;
            });
        },
        slide(direction) {
            const lastItem = this.works[this.works.length - 1];
            switch(direction) {
                case "next" :
                    this.works.push(this.works[0]);
                    this.works.shift();
                    this.currentIndex++
                    break;
                case "prev" :
                    this.works.unshift(lastItem);
                    this.works.pop();
                    this.currentIndex--
                    break;
            }
        }
    },
    created() {
        const data = require("../data/works.json");
        this.works = this.requireImagesToArray(data);
    }
})