<template>
    <Header></Header>
    <main>
       <div class="container">
          <div class="divider">
               <Menu></Menu>
               <div class="content">
                   <router-view></router-view>
               </div>
          </div>
       </div>
    </main>
</template>

<script>
import Header from '@/components/Header';
import Menu from '@/components/Menu';

export default {
    components: {
        Header,
        Menu,
    }
}
</script>

<style lang="scss" scoped>
    main {
        position: relative;
    }
    .divider {
        display: flex;
        margin-top: 10px;
    }
    .content {
        width: 75%;
    }
</style>