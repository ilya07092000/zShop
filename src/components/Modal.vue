<template>
   <div class="modal">
       <div class="modal__inner">
           <button class="close" @click="closeModal">
               <span class="close__line"></span>
           </button>
           <component :is="currModal" @submit-handler="submitHandler">

           </component>
       </div>
   </div>
</template>

<script>
    import Cbmodal from '../components/CbModal.vue';
    import QualityModal from '../components/QualityModal.vue';

    export default {
        props: ['currModal'],
        components: {
            Cbmodal,
            QualityModal,
        },
        methods: {
            submitHandler() {
                this.closeModal(false);
                this.$emit('submit-handler');
            },
            closeModal() {
                this.$emit('closeModal', false);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .modal{ 
        position: relative;
        margin: 200px auto 0 auto;
        max-width: 500px;
        width: 100%;
        background-color: #fff;
        z-index: 999;
        padding: 20px;
        box-shadow: 0 0 15px 1px #000;
        border-radius: 3px;
    }

    .close {
        position: absolute;
        right: 20px;
        top: 20px;
        width: 30px;
        height: 30px;
        cursor: pointer;
        background: transparent;
        border: none;
        transition: opacity .2s linear;
        &:hover {
            opacity: .8;
        }
        &__line {
            width: 20px;
            height: 3px;
            background-color: #000;
            display: block;
            margin: 0 auto;
            transform: rotate(45deg);
            position: relative;
            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: inherit;
                background-color: inherit;
                transform: rotate(90deg);
            }
        }
    }
</style>