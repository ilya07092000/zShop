<template>
    <div class="category">
        <div class="category__header">
            {{ categories }}
        </div>
        <div class="category__list" v-if="categories">
            <div class="category__list__item">
                <CategoryItem v-for="(category, name) in categoryProds" :category="category" :name="name" :key="name"></CategoryItem>
            </div>
        </div>
        <Empty v-else type="category"></Empty>
    </div>
</template>

<script>
import CategoryItem from '../components/CategoryItem.vue';
import Empty from '../components/Empty';

export default {
    name: 'Category',
    computed: {
        categories() {
            return this.$route.params.category;
        },
        categoryProds() {
            let category = this.$route.params.category;
            return this.$store.getters.getProductsByCategory(category);
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
        background-color: #fff;
        &__header {
            font-size: 30px;
            text-transform: uppercase;
            border-bottom: 2px solid #e5e5e5;
        }
    }
</style>