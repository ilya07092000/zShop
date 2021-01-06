<template>
     <div class="basket__wrapper">
        <div class="basket">
            <div class="basket__icon-wrapper">
                <p class="basket__qty" v-show="basket.basket.length">{{ basket.basket.length }}</p>
                <img class="basket__icon" src="../assets/img/icons/shopping-basket-solid.svg" alt="">
            </div>
            <p class="basket__text">{{ basket.sum > 0 ? basket.sum : 'Empty basket' }}</p>
        </div>
        <div class="basket__content">
            <Basket-item  v-for="item in basket.basket" :item="item">

            </Basket-item>
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
                    <router-link to="/order" class="basket-order-btn">Order</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BasketItem from './BasketItem.vue';

export default {
    data() {
        return {
            basketLength: 0,
        }
    },
    computed: {
        basket() {
            let basket = this.$store.getters.getBasket;
            let sum = 0;
            this.basketLength = basket.length;

            if(this.basketLength == 1) {
                sum = basket[0].price * basket[0].qty;
            } else if(this.basketLength) {
                sum = basket.reduce((prev, current) => prev.price * prev.qty + current.price * current.qty);
            }
            return {sum, basket};
        }
    },
    mounted() {
        window.addEventListener('click', this.toggleBasketContent);
    },
    methods: {
        toggleBasketContent(event) {
            let basket = document.querySelector('.basket__wrapper');
            let basketContent = document.querySelector('.basket__content');

            let btn = event.target;

            if(this.basketLength && this.$route.path != '/order') {
                if (!btn.closest('.basket') && !event.target.closest('.show')) {
                    basket.classList.remove('show');
                } 

                if(!btn.closest('.basket')) return;

                basket.classList.toggle('show');
            } else {
                basket.classList.remove('show');
            }
        }
    },
    beforeUnmount() {
        window.removeEventListener('click', this.toggleBasketContent);
    },
    components: {
        BasketItem,
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
        justify-content: center;
        padding: 0 10px;
        &:hover {
            opacity: .8;
        }
    &__wrapper {
        position: relative;
        margin-right: 30px;
    }
    &__icon {
        display: block;
        width: 30px;
        z-index: 9;
        position: relative;
    }
    &__text {
        line-height: 1;
        margin-left: 10px;
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
    &__qty {
        position: absolute;
        top: -4px;
        left: -4px;
        z-index: 99;
        width: 16px;
        height: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-weight: 500;
        border-radius: 50%;
        background-color: red;
        font-size: 13px;
    }
}

.basket__icon-wrapper {
    position: relative;
    z-index: 9;
}

.basket-order-btn {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 600;
    color: #a2c617;
    border: 2px solid #a2c617;
    // background-color: #a2c617;
    padding: 5px 15px;
    position: relative;
    text-decoration: none;
    display: inline-block;
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
</style>