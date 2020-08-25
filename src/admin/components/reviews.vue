<template lang="pug">
    .reviews-component
        .header
            .title Блок "Отзывы"
        .reviews-wrapper
            .reviews-container
                addReview
                ul.reviews
                    li.review__item
                        square-btn(type="square" title="Добавить работу")
                    li.review__item(v-for="review in reviews")
                        cardReview(:review="review")
</template>

<script>
import cardReview from "./card-review"
import addBtn from "./button"
import addReview from "./add-review"

export default {
    components: {
        cardReview,
        squareBtn: addBtn,
        addReview
    },
    data() {
        return {
            reviews: []
        }
    },
    created() {
        this.reviews = require('../data/reviews.json');
    },
    methods: {
        // requirePhotos() {
        //     this.reviews = this.reviews.map(work => {
        //         review.photo = require(`../../images/content/${review.photo}`).default;
        //         return review;
        //     })
        // }
    },
    mounted() {
        // this.requirePhotos();
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

.reviews {
    display: flex;
    flex-wrap: wrap;
    margin-left: -18px;
    padding-bottom: 9px;
}

.review__item {
    flex: 1;
    margin-left: 18px;
    margin-bottom: 28px;
}

</style>