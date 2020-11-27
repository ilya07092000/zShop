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
       z-index: 99;
    }

    .slide-leave-active {
        animation: slide-in 1s;
    }

    @keyframes slide-in {
        0% {
            transform: scale(1), translateX(0);
        }
        50% {
            transform: scale(0.95);
        }
        100% {
            transform: translateX(110%);
        }
    }

    .slide-enter-active {
        animation: slide-out 1s;
    }

    @keyframes slide-out {
        0% {
            transform: translateX(-110%);
        }
        50% {
           transform: scale(0.95);
        }
        100% {
           transform: scale(1), translateX(0);
        }
    }
</style>

