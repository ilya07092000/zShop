<template>
    <div class="products__wrapper">
        <div class="products__header">
                <p class="products__title">{{ pageTitle }}</p>
                <p class="products__quantity">{{ products ? products.length : 0 }}</p>
        </div>
        <div class="products" v-if="products">
            <Product v-for="product in products" :product="product"></Product>
        </div>
        <Empty v-else type="category"></Empty>
    </div>
</template>

<script>
import Product from '../components/Product';
import Empty from '../components/Empty';

export default {
    name: 'Products',
    computed: {
        products() {
            let category = this.$route.params.products;
            return this.$store.getters.getProductsByCat(category);
        },
        pageTitle() {
            return this.$route.params.products;
        }
    },
    components : {
        Product,
        Empty
    },
}
</script>

<style lang="scss" scoped>
    .products__wrapper {
        background-color: #fff;
    }

    .products {
        display: flex;
        flex-wrap: wrap;
        &__header {
            display: flex;
            align-items: center;
            border-bottom: 2px solid #e5e5e5;
        }
        &__title {
            font-size: 30px;
            text-transform: uppercase;
            margin-right: 15px;
        }
        &__quantity {
            font-size: 26px;
            font-weight: 700;
            color: rgb(150, 150, 150);
        }
    }
</style>