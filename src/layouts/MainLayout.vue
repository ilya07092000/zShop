<template>
    <Header @modal-toggler="(value) => modal=value"></Header>
    <main>    
        <div v-show="modal" class="modal__overflow">
            <transition name="modal">
                <Modal v-if="modal" @close-modal="value => modal=value">

                </Modal>
            </transition>
        </div>

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
import Modal from '@/components/Modal'

export default {
    data() {
        return {
            modal: false,
        }
    },
    components: {
        Header,
        Menu,
        Modal
    },
    methods: {
        modalToggler(value, xq) {
            this.modal = value;
        }
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

    .modal__overflow {
        position: fixed;
        top: 0;
        left: 0;
        min-height: 100vh;
        width: 100%;
        background: rgba(0, 0, 0, .6);
        z-index: 99999;
        overflow: hidden;
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

    .modal-enter-active,
    .modal-leave-active {
        transition: .2s linear;
    }

    .modal-enter-from {
        opacity: 0;
        transform: translateY(-100px);
    }

    .modal-enter-to {
        opacity: 1;
        transform: translateY(0px);
    }

    .modal-leave-from {
        opacity: 1;
        transform: translateY(0px);
    }

    .modal-leave-to {
        opacity: 0;
        transform: translateY(-100px);
    }
</style>

