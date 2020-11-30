<template>
    <router-link class="category__link" :to="{name: 'products', params: {product: name}}" v-if="Array.isArray(category)">
        {{ name }}
    </router-link>
    <router-link class="category__link" :to="{name: 'category', params: {product: name}}" v-else>
        {{ name }}
    </router-link>
</template>

<script>
export default {
    props: ['category', 'name']
}
</script>

<style lang="scss" scoped>
    .category__link {
        display: block;
        background: #e5e5ee;
        text-transform: uppercase;
        padding: 10px;
        margin-bottom: 10px;
        text-decoration: none;
        color: black;
        font-weight: 500;
        transition: opacity .2s linear;
        &:hover {   
            opacity: .8;
        }
    }
</style>