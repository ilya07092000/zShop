<template>
    <header>
        <div class="container">
            <div class="header__inner">
                <div class="header__logo-wrapper text-left">
                    <router-link class="header__logo" to="/">
                        Zshop
                    </router-link>
                </div>
                <div class="header__info">
                   <div class="header__info__col">
                        <a class="header__tel" href="tel:(067) 228-13-17">(067) 228-13-17</a>
                        <button class="btn header__cb" @click="$emit('modal-toggler', {name: 'cbModal', value: true})">Callback</button>
                        <button class="btn header__quality" @click="$emit('modal-toggler', {name: 'qModal', value: true})">Quality department</button>
                   </div>
                   <div class="header__info__col">
                        <Basket></Basket>
                   </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import Basket from './Basket.vue'

export default {
    props: ['modal'],
    // methods: {
    //     showModal() {
    //         this.$emit('show-modal');
    //     }
    // },
    components: {
        Basket,
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
    }
    &__logo {
        font-family: 'Mukta', sans-serif;
        font-size: 40px;
        letter-spacing: 0.10em;
        width: 30%;
        text-transform: uppercase;
        color: #332323;
        text-decoration: none;
        font-weight: 700;
        text-shadow: -2px -2px #fff;
        &-wrapper {
            width: calc(30% - 20px);
            padding-right: 20px;
        }
        &:active {
            text-shadow: unset;
        }
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
