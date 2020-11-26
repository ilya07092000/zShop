<template>
    <div class="category">
        <div class="category__header">
            {{ pageTitle }}
        </div>
        <div class="category__list">
            <div class="category__list__item">
                <CategoryItem v-for="(category, name) in categories" :category="category" :name="name"></CategoryItem>
            </div>
        </div>
    </div>
</template>

<script>
import CategoryItem from '../components/CategoryItem.vue';

export default {
   computed: {
        categories() {
            let products = this.$store.getters.products;

            function findCat(items, cat) {
                for(let key in items) {
                    if(key == cat) {
                        return items[key]
                    }

                    if(!Array.isArray(items[key])) {
                        return findCat(items[key], cat)
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
    components: {
        CategoryItem
    }
}
</script>

<style lang="scss" scoped>
    .category {
        padding: 0 20px;
        &__header {
            font-size: 30px;
            text-transform: uppercase;
            border-bottom: 2px solid #e5e5e5;
        }
    }
</style>