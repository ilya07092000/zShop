<template>
    <router-link
        class="category__link"
        :to="{name: 'products', params: {products: name }}"
    >
        {{ name }}
       <b> {{ catLength }}</b>
    </router-link>
</template>

<script>
export default {
    props: ['category', 'name'],
    computed: {
        catLength() {
            return this.category.length
        }
    }
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