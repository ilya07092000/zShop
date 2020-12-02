<template>
   <li class="nav__list__item">
        <router-link v-if="Array.isArray(product)" class="nav__list__item__link" :data-hover="extendedContent" :to="{name: 'products', params: {products: meuItem}}">{{meuItem}}

        </router-link>
        <router-link v-else class="nav__list__item__link" :data-hover="extendedContent" :to="{name: 'category', params: {products: meuItem}}">{{meuItem}}

        </router-link>
        <ul class="nav__list__item__extended" v-if="!Array.isArray(product)" :id="meuItem">
            <li class="nav__list__item">
                <router-link 
                    v-for="(value, key) in product" 
                    :key="value"
                    class="nav__list__item__link" 
                    :to="{name: 'productsCat', params: {products: key, cat: meuItem}}">
                    {{key}}
                </router-link>
            </li>
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
        list-style-type: none;
        position: relative;
        &__item {
            position: relative;
            background: #484f54;
            text-transform: uppercase;
            &:not(:last-child) {
                border-bottom: 1px solid #665b5b;
            }
        }
    }

    .nav__list__item__link {
        position: relative;
        z-index: 999;
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: auto;
            right: 0;
            width: 0%;
            height: 100%;
            background-color: #7b7b7b;
            z-index: -1;
            transition: all 300ms ease;
        }
    }

    .nav__list__item__link:hover.nav__list__item__link::before {
        width: 100%;
        top: 0; 
        left: 0; 
        right: 0;
        z-index: -1;
    }

    .nav__list__item__extended {
        list-style-type: none;
        position: absolute;
        width: 100%;
        top: 0;
        left: 100%;
        z-index: 99;
        transform: scaleY(0);
        transform-origin: top;
        opacity: 0;
        transition: .2s linear;
        &.show {
            z-index: 99;
            opacity: 1;
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