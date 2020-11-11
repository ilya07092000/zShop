<template>
  <div>
    <MainLayout>
      
    </MainLayout>
  </div>
  <!-- <div id="nav">
   <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> 
  </div>
  <router-view/>  -->
</template>

<script>
import MainLayout from '@/layouts/MainLayout'

export default {
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
</style>


