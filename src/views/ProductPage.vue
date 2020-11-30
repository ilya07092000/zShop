<template>
   <div>
       <h1>ff</h1>
       <p>{{ product }}</p>
   </div>
</template>

<script>
export default {
   computed: {
       product() {
            let catgeory = this.$store.getters.getProductsByCat(this.$route.params.product);
            return catgeory.find(p => p.id == this.$route.params.id);
       }
   }
}
</script>