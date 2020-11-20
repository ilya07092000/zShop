<template>
    <h1>{{product}}</h1>
</template>

<script>
export default {
    computed: {
        product() {
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
        }
    }
}
</script>