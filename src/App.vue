<template>
    <MainLayout>
      
    </MainLayout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'

export default {
  created() {
    this.$store.dispatch('initProducts');
    console.log(this.$store.products);
  },
  components: {
    MainLayout,
  }
}
</script>

<style lang="scss">

body {
  margin: 0;
  padding: 0;
}

  
*,
::after,
::before {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}


#app {
	font-family: 'Hind Siliguri', sans-serif;
}

.btn {
  background: transparent;
  border: none;
  cursor: pointer;
}

.container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
}
</style>


