<template>
   <li class="nav__list__item">
        <router-link class="nav__list__item__link" :data-hover="extendedContent" to="/">{{meuItem}}</router-link>
        <ul class="nav__list__item__extended" v-if="!Array.isArray(product)" :id="meuItem">
            <MenuItem v-for="(value, key) in product" :product="value" :meuItem="key"></MenuItem>
        </ul>
   </li>
</template>

<script>
export default {
    name: 'MenuItem',
    props: ['product', 'meuItem'],
    computed: {
        extendedContent() {
            if(!Array.isArray(this.product)) {
                return '#' + this.meuItem;
            } 
            return ' '
        }
    }
}
</script>

<style lang="scss" scoped>
    .nav__list {
        &__item {
            position: relative;
            background: #484f54;
            text-transform: uppercase;
            &:not(:last-child) {
                border-bottom: 1px solid #665b5b;
            }
        }
    }
    .nav__list__item__extended {
        list-style-type: none;
        position: absolute;
        top: 0;
        left: 100%;
        z-index: -1;
        background-color: rgb(150, 144, 144);
        transform: scaleY(0);
        transform-origin: top;
        transition: .2s linear;
        &.show {
            z-index: 99;
            transform: scaleY(1);
        }
    }
    .nav__list__item__link {
        display: block;
        padding: 10px;
        text-decoration: none;
        color: #fff;
        font-size: 18px;
        font-weight: 400;
        position: relative;
    }
</style>