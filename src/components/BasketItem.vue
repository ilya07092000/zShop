<template>
    <div class="basket__content__item">
        <div class="basket__content__item__left">
            <router-link :to="item.productLink">
                <img class="basket__content__item__img" :src="item.productImg" alt="">
            </router-link>
        </div>
        <div class="basket__content__item__right">
            <router-link class="basket__content__item__title" :to="item.productLink">
                {{ item.productName }}
            </router-link>
            <p class="basket__content__item__price">{{ item.price }} грн</p>
            <p class="basket__content__item__qty">x {{ item.qty }}</p>
            <div class="delete__wrapper">
                <button class="btn delete" @click="deleteFromBasket">
                    <span class="delete__line"></span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['item'],
    methods: {
        deleteFromBasket() {
            this.$store.dispatch('deleteFromBasket', {
                id: this.item.id
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.basket__content__item__img {
    max-width: 50px;
    width: 100%;
    height: auto;
    vertical-align: middle;
}

.basket__content__item {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e5e5e5;
    padding: 10px 0;
    &__left {
        text-align: center;
        width: 45%;
    }
    &__right {
        width: 55%;
        text-align: left;
    }
}

.delete__wrapper {
    text-align: right;
    margin-top: -15px;
}
</style>