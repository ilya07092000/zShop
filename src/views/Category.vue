<template>
    {{category}}
</template>

<script>
export default {
   computed: {
        category() {
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