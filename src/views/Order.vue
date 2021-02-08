<template>
   <div class="order">
       <h2 class="order__title">Checkout</h2>
       <div class="order__content">
           <div class="order__content__left">
               <form action="" class="order__form">
                   <div class="order__form__block">
                       <p class="order__form__title">Personal data</p>
                        <div class="order__form__wrapper">
                            <label for="" class="order__form__label">First Name:</label>
                            <input class="order__form__input" type="text" required>
                        </div>
                        <div class="order__form__wrapper">
                            <label for="" class="order__form__label">Last Name:</label>
                            <input class="order__form__input" type="text" required>
                        </div>
                        <div class="order__form__wrapper">
                            <label for="" class="order__form__label">Phone Number:</label>
                            <input class="order__form__input" type="text" required>
                        </div>
                            <div class="order__form__wrapper">
                            <label for="" class="order__form__label">E-mail:</label>
                            <input class="order__form__input" type="text" required>
                        </div>
                   </div>
                   <div class="order__form__block">
                        <label for="" class="order__form__label">Delivery method:</label>
                        <select>
                            <option>Kyiv</option>
                            <option>Lviv</option>
                            <option>Chernihiv</option>
                        </select>
                   </div>
                   <div class="order__form__block">
                        <p class="order__form__title">Payment Method</p>
                        <div class="order__form__radio">
                            <input type="radio" id="p-1" name="payment" required>
                            <label for="p-1">Liqpay</label>
                        </div>
                        <div class="order__form__radio">
                            <input type="radio" id="p-2" name="payment" required>
                            <label for="p-2">Cash</label>
                        </div>
                        <div class="order__form__radio">
                            <input type="radio" id="p-3" name="payment" required>
                            <label for="p-3">Privat-24</label>
                        </div>
                        <div class="order__form__radio">
                            <input type="radio" id="p-4" name="payment" required>
                            <label for="p-4">Monobank</label>
                        </div>
                   </div>
                    <div class="order__form__checkbox">
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
    .order__form__label {
        display: block;
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

    .order__form__input {
        width: 100%;
        font-size: 16px;
        padding: 5px;
    }

    .order__form__wrapper {
        margin-bottom: 10px;
    }

    .order__form__radio {
        margin: 20px 0;
    }

    .order__form__radio input[type=radio] {
        display: none;
    }

    .order__form__radio label {
        display: flex;
        align-items: center;
        cursor: pointer;
        position: relative;
        padding-left: 40px;
        margin-right: 0;
        user-select: none;
        color: grey;
        font-weight: 500;
        min-height: 30px;
    }

    .order__form__radio label:before {
        content: "";
        display: inline-block;
        width: 30px;
        height: 30px;
        position: absolute;
        left: 0;
        top: 0;
        border: 1px solid #d3d3d3;
        border-radius: 50%;
    }

     .order__form__radio label:after {
        content: "";
        display: inline-block;
        width: 28px;
        height: 28px;
        position: absolute;
        left: 1px;
        top: 1px;
        border-radius: 50%;
    }

    .order__form__radio input[type=radio]:checked + label:after {
	    background-color: #a2c617;
        border: 4px solid #fff;
        color: #000;
    }

    .order__form__radio input[type=radio]:checked + label {
        color: #000;
    }

    .order__form__radio:hover input[type=radio] + label:after {
        background-color: #c7c2c2;
        border: 4px solid #fff;
    }

    .order__form__radio:hover input[type=radio]:checked + label:after {
        background-color: #a2c617;
        border: 4px solid #fff;
        color: #000;
    }

    .order__form__checkbox {
        & input {
            display: none;
        }
        & label {
            opacity: .6;
            padding-left: 40px;
            display: flex;
            position: relative;
            cursor: pointer;
            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 28px;
                height: 28px;
                border: 1px solid grey;
                border-radius: 3px;
            }
            &::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 28px;
                height: 28px;
            }
        }
    }

    .order__form__checkbox input[type=checkbox]:checked + label::after {
        background: url('../assets/img/icons/check-solid.svg');
    }

    .order__form__checkbox input:checked + label {
        opacity: 1;
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