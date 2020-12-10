<template>
     <div class="basket__wrapper">
        <div class="basket">
            <img class="basket__icon" src="../assets/img/icons/shopping-basket-solid.svg" alt="">
            <p class="basket__text">{{ basket.sum > 0 ? basket.sum : 'Empty basket' }}</p>
        </div>
        <div class="basket__content">
            <div class="basket__content__item" v-for="item in basket.basket">
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
                        <button class="btn delete">
                            <span class="delete__line"></span>
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="basket__content__footer">
                <div class="basket__content__footer__col">
                    <p class="basket__content__footer__text">
                        total:
                    </p>
                    <p class="basket__content__footer__price">
                        {{ basket.sum }} грн
                    </p>
                </div>
                <div class="basket__content__footer__col">
                    <button class="btn basket-order-btn">Order</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
      computed: {
        basket() {
            let basket = this.$store.getters.getBasket;

            let sum = 0;

            if(basket.length == 1) {
                sum = basket[0].price * basket[0].qty;
            } else if(basket.length) {
                sum = basket.reduce((prev, current) => prev.price * prev.qty + current.price * current.qty);
            }
            return {sum, basket};
        }
    },
    mounted() {
        let basket = document.querySelector('.basket__wrapper');
        let basketContent = document.querySelector('.basket__content');

        window.addEventListener('click', toggleBasketContent);

        function toggleBasketContent(event) {
            let btn = event.target;

            if (!btn.closest('.basket') && !event.target.closest('.show')) {
                basket.classList.remove('show');
            } 

            if(!btn.closest('.basket')) return;

            basket.classList.toggle('show');
        }
    }
}
</script>

<style lang="scss" scoped>
.basket__wrapper.show .basket__content {
    display: block;
}

.basket__wrapper.show .basket{
    opacity: .6;
}

.basket {
        width: 120px;
        height: 50px;
        display: flex;
        align-items: center;
        cursor: pointer;
        height: 66px;
    &__wrapper {
        position: relative;
    }
    &__icon {
        display: block;
        max-width: 30px;
        width: 100%;
        margin-right: 10px;
    }
    &__text {
        line-height: 1;
    }
    &__content {
        display: none;
        position: absolute;
        top: 100%;
        right: -10px;
        width: 200px;
        background-color: #fff;
        box-shadow: 0 0 4px -2px #000;
        padding: 5px;
        z-index: 9999;
        &::before {
            content: '';
            position: absolute;
            top: -20px;
            left: 50%;
            transform: translateX(-50%);
            border: 10px solid transparent;
            border-bottom: 10px solid #fff;
        }
        &__footer {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
        }
    }
}

.basket-order-btn {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 600;
    color: #a2c617;
    border: 2px solid #a2c617;
    // background-color: #a2c617;
    padding: 8px 15px;
    position: relative;
    &::before {
        content: '';
        background-color: #a2c617;
        position: absolute;
        top: auto;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 0%;
        z-index: -1;
        transition: all .3s ease;
    }
}

.basket-order-btn:hover.basket-order-btn {
    color: #fff;
}

.basket-order-btn:hover.basket-order-btn::before {
    height: 100%;
    top: 0; 
    left: 0; 
    right: 0;
    bottom: 0;
    z-index: -1;
}

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

.delete {
    width: 30px;
    height: 30px;
    &__line {
        width: 20px;
        height: 2px;
        background-color: grey;
        display: block;
        transform: rotate(45deg);
        position: relative;
        margin: 0 auto;
        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: inherit;
            transform: rotate(90deg);
        }
    }
}
</style>