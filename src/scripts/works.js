import Vue from "vue";

const thumbs = {
    props: ["currentWork", "currentIndex", "works"],
    template: "#slider-thumbs"
}
const btns = {
    template: "#slider-btns",
    props: ["currentWork", "currentIndex", "works"]
}
const display = {
    props: ["currentWork", "works", "currentIndex"],
    template: "#slider-display",
    components: {thumbs, btns},
    computed: {
        slicedWorks() {
            const works = [...this.works];
            return works.slice(0, 4);
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
        },
        currentInfo() {
            return this.currentWork ? this.currentWork : '';
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
            return this.works[this.currentIndex];
        }
    },
    watch: {
        currentIndex(value) {
            this.noInfiniteLoop(value);
        }
    },
    methods: {
        noInfiniteLoop(index) {
            if (index < 0) this.currentIndex = 0;
            if (index > this.works.length - 1) this.currentIndex = this.works.length - 1;
        },
        requireImagesToArray(data) {
            return data.map(item => {
                const requiredImage = require(`../images/content/${item.photo}`).default;
                item.photo = requiredImage;
                return item;
            });
        },
        slide(direction) {
            switch(direction) {
                case "next" :
                    this.currentIndex++
                    break;
                case "prev" :
                    this.currentIndex--
                    break;
            }
        },
        handleBtnImage(workId) {
            this.works.forEach((element, index) => {
              if (element.id === workId) {
                return this.currentIndex = index;
              }
            });
        },
      
    },
    created() {
        const data = require("../data/works.json");
        this.works = this.requireImagesToArray(data);
    }
})