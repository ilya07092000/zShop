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
  	min-height: 100vh;
  	overflow-x: hidden;
}

.btn {
  	background: transparent;
  	border: none;
  	cursor: pointer;
}

.container {
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
}

.delete {
    width: 30px;
    height: 30px;
    &__line {
        width: 20px;
        height: 2px;
        background-color: grey;
        display: block;
        transform: rotate(45deg);
        position: relative;
        margin: 0 auto;
        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: inherit;
            transform: rotate(90deg);
        }
    }
    &:hover &__line {
        background-color: #000;
    }
}

.text-left {
    text-align: left;
}
</style>


