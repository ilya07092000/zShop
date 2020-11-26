<template>
    <div class="category">
        <div class="category__header">
            {{ pageTitle }}
        </div>
        <div class="category__list" v-if="Object.keys(categories) != 0">
            <div class="category__list__item">
                <CategoryItem v-for="(category, name) in categories" :category="category" :name="name"></CategoryItem>
            </div>
        </div>
        <Empty v-else type="category"></Empty>
    </div>
</template>

<script>
import CategoryItem from '../components/CategoryItem.vue';
import Empty from '../components/Empty';

export default {
   computed: {
        categories() {
            let products = this.$store.getters.products;
            let found;

            function findCat(items, cat) {
                for(let key in items) {
                    if(key == cat) {
                        found = items[key];
                    }
                    else if (!Array.isArray(items[key])) {
                        findCat(items[key], cat)
                    }
                };
            };

            findCat(products, this.$route.params.product);
            return found;
        },
        pageTitle() {
            return this.$route.params.product
        }
    },
    components: {
        CategoryItem,
        Empty
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