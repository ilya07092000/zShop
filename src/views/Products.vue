<template>
    <div class="products__wrapper">
        <div class="products__header">
                <p class="products__title">{{ pageTitle }}</p>
                <p class="products__quantity">{{ products.length }}</p>
        </div>
        <div class="products">
            <Product v-for="product in products" :product="product" :key="product.id"></Product>
        </div>
    </div>
</template>

<script>
import Product from '../components/Product';

export default {
    name: 'Products',
    computed: {
        products() {
            let products = this.$store.getters.products;

            function findCat(items, cat) {
                for(let key in items) {
                    if(key == cat) {
                        return items[key];
                    }

                    if(!Array.isArray(items[key])) {
                        return findCat(items[key], cat);
                    }
                }
            }

            let currProd = findCat(products, this.$route.params.product);
            return currProd
        },
        pageTitle() {
            return this.$route.params.product
        }
    },
    components : {
        Product
    },
}
</script>

<style lang="scss" scoped>
    .products__wrapper {
        padding: 0 20px;
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