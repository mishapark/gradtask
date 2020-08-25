<template lang="pug">
    .works-component
        .header
            .title Блок "Работы"
        .works-wrapper
            .works-container
                addWork
                ul.works
                    li.works__item
                        square-btn(type="square" title="Добавить работу")
                    li.works__item(v-for="work in works")
                        cardWork(:work="work")

            
        
</template>

<script>
import cardWork from "./card-work"
import addBtn from "./button"
import addWork from "./add-work"

export default {
    components: {
        cardWork,
        squareBtn: addBtn,
        addWork
    },
    data() {
        return {
            works: []
        }
    },
    created() {
        this.works = require('../data/works.json');
    },
    methods: {
        requirePhotos() {
            this.works = this.works.map(work => {
                work.photo = require(`../../images/content/${work.photo}`).default;
                return work;
            })
        }
    },
    mounted() {
        this.requirePhotos();
    }
}
</script>


<style lang="pcss" scoped>
.title {
    margin-right: 60px;
    font-size: 21x;
    font-weight: bold;
    color: #414C63;
    margin-bottom: 60px;
}

.works {
    display: flex;
    flex-wrap: wrap;
    margin-left: -18px;
    padding-bottom: 9px;
}

.works__item {
    flex: 1;
    margin-left: 18px;
    margin-bottom: 28px;
}

</style>