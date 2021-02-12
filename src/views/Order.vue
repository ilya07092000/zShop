<template>
   <div class="order">
       <h2 class="order__title">Checkout</h2>
       <div class="order__content">
           <div class="order__content__left">
               <form action="" class="order__form form">
                   <div class="order__form__block">
                       <p class="order__form__title">Personal data</p>
                        <div class="order__form__wrapper">
                            <label for="" class="form__label">First Name:</label>
                            <input class="form__input" type="text" required>
                        </div>
                        <div class="order__form__wrapper">
                            <label for="" class="form__label">Last Name:</label>
                            <input class="form__input" type="text" required>
                        </div>
                        <div class="order__form__wrapper">
                            <label for="" class="form__label">Phone Number:</label>
                            <input class="form__input" type="text" required>
                        </div>
                            <div class="order__form__wrapper">
                            <label for="" class="form__label">E-mail:</label>
                            <input class="form__input" type="text" required>
                        </div>
                   </div>
                   <div class="order__form__block">
                        <label for="" class="form__label">Delivery method:</label>
                        <select>
                            <option>Kyiv</option>
                            <option>Lviv</option>
                            <option>Chernihiv</option>
                        </select>
                   </div>
                   <div class="order__form__block">
                        <p class="order__form__title">Payment Method</p>
                        <div class="form__radio-wrap">
                            <input type="radio" id="p-1" name="payment" required>
                            <label for="p-1">Liqpay</label>
                        </div>
                        <div class="form__radio-wrap">
                            <input type="radio" id="p-2" name="payment" required>
                            <label for="p-2">Cash</label>
                        </div>
                        <div class="form__radio-wrap">
                            <input type="radio" id="p-3" name="payment" required>
                            <label for="p-3">Privat-24</label>
                        </div>
                        <div class="form__radio-wrap">
                            <input type="radio" id="p-4" name="payment" required>
                            <label for="p-4">Monobank</label>
                        </div>
                   </div>
                    <div class="form__checkbox-wrap">
                        <input type="checkbox" id="rules" name="payment" required>
                        <label for="rules">By confirming the order, I accept the conditions user agreement and public offer</label>
                    </div>
                    <button class="btn btn-checkout">
                        checkout
                    </button>
               </form>  
           </div>
           <div class="order__content__right">
               <div class="order__qty">
                   Cart: {{ basket.length }}
               </div>
                <order-item v-for="basketItem in basket" :basketItem="basketItem">

                </order-item>
           </div>
       </div>
   </div>
</template>

<script>
import orderItem from '../components/OrderItem.vue';
import { Field, Form } from 'vee-validate';

export default {
    computed: {
        basket() {
            return this.$store.getters.getBasket;
        }
    },
    components: {
        orderItem,
         Field,
        Form,
    }
}
</script>

<style lang="scss" scoped>
    @import '../css/form-elems.scss';

    .order {
        padding-bottom: 50px;
    }
    .order__content {
        display: flex;
        &__left,
        &__right {
            width: calc(50% - 10px);
        }
        &__left {
            margin-right: 20px;
        }
    }
    .order__title {
        text-transform: uppercase;
        margin: 20px 0;
        font-size: 35px;
        font-weight: 400;
    }
    .order__form__block {
        padding: 10px;
        border: 2px solid #a2c617;
        &:not(:last-child) {
            margin-bottom: 20px;
        }
    }

    .order__form__title {
        font-size: 24px;
        font-weight: 600;
    }

    .order__form__wrapper {
        margin-bottom: 10px;
    }

    .order__qty {
        font-size: 30px;
        border-bottom: 2px solid #e5e5e5;
    }
    .btn-checkout {
        max-width: 300px;
        width: 100%;
        background-color: #a2c617;
        border: 1px solid #a2c617;
        padding: 10px 5px;
        font-size: 20px;
        text-transform: uppercase;
        font-weight: 500;
        color: #fff;
        transition: .2s linear;
        margin-top: 20px;
        &:hover {
            background-color: #fff;
            color: #a2c617;
        }
    }
</style>