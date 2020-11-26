<template>
    <Header></Header>
    <main>
       <div class="container">
          <div class="divider">
               <Menu></Menu>
               <div class="content">
                   <router-view v-slot="{ Component }">
                        <transition name="slide" mode="out-in">
                            <component :key="$route.path" :is="Component" />
                        </transition>
                    </router-view>
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
       width: 80%;
    }
    
    .slide-enter-active {
        transition: all .1s linear;
    }

    .slide-leave-active {
        transition: all .1s linear;
    }

    .slide-enter-from {
        transform: translateX(-30px);
        opacity: 0;
    }

    .slide-leave-to {
        transform: translateX(30px);
        opacity: 0;
    }

    .slide-enter-to,
    .slide-leave-from {
        transform: translateX(0px);
        opacity: 1;
    }
</style>

