<template>
    <header>
        <div class="container">
            <div class="header__inner">
                <router-link class="header__logo" to="/">
                    Zshop
                </router-link>
                <div class="header__info">
                   <div class="header__info__col">
                        <a class="header__tel" href="tel:(067) 228-13-17">(067) 228-13-17</a>
                        <button class="btn header__cb">Callback</button>
                        <button class="btn header__quality" @click="$emit('modal-toggler', true)">Quality department</button>
                   </div>
                   <div class="header__info__col">
                       <button class="basket">
                           <!-- {{ basket > 0 ? basket : 'Empty basket' }} -->
                           {{basket}}
                       </button>
                   </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    props: ['modal'],
    // methods: {
    //     showModal() {
    //         this.$emit('show-modal');
    //     }
    // },
    computed: {
        basket() {
            let basket = this.$store.getters.getBasket;

            let sum = 0;

            if(basket.length == 1) {
                sum = basket[0].price * basket[0].qty;
            } else if(basket.length) {
                sum = basket.reduce((prev, current) => prev.price * prev.qty + current.price * current.qty);
            }
            return sum;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../css/main';

header {
    box-shadow: 0 -10px 15px 0;
    background: #2ac6177a;
}

.header {
    &__inner {
         display: flex;
        justify-content: center;
        padding-top: 10px;
    }
    &__logo {
        font-family: 'Mukta', sans-serif;
        font-size: 40px;
        letter-spacing: 0.10em;
        width: 30%;
        text-transform: uppercase;
        color: black;
        text-decoration: none;
    }
    &__info {
        width: 70%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__tel {
        margin-right: 20px;
    }
    &__cb {
        margin-right: 20px;
    }
}

</style>
