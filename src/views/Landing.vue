<template>
    <div class="landing">
       <swiper
            :slides-per-view="1"
            :space-between="50"
            :pagination="{ clickable: true }"
            :loop=true
            :autoplay="{delay: 2000}"
            :speed=1300>
            <swiper-slide>
                <div class="slide__container">
                    <img class="slide__img" src="../assets/img/slide1.jpg" alt="">
                </div>
            </swiper-slide>
             <swiper-slide>
                <div class="slide__container">
                    <img class="slide__img" src="../assets/img/slide1.jpg" alt="">
                </div>
            </swiper-slide>
             <swiper-slide>
                <div class="slide__container">
                    <img class="slide__img" src="../assets/img/slide1.jpg" alt="">
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<style lang="scss" scoped>
    .landing {
        padding: 0 20px;   
    }
    .slide__img {
        max-width: 100%;
        width: 100%;
        height: auto;
    }
</style>

<style lang="scss">
 :root {
        --swiper-theme-color: #a2c617;
    }
    .swiper-pagination {
        text-align: left;
    }
    
    .swiper-pagination-bullet {
        background: #fff;
        opacity: 1;
    }

    .swiper-pagination-bullet-active {
        background: var(--swiper-theme-color);
        position: relative;
        &:before {
            content: '';
            position: absolute;
            top: -64%;
            left: -60%;
            width: 230%;
            height: 230%;
            border-radius: 50%;
            border: 2px solid var(--swiper-theme-color);
        }
    }

    .swiper-pagination-fraction, 
    .swiper-pagination-custom, 
    .swiper-container-horizontal > 
    .swiper-pagination-bullets {
        left: 20px;
        bottom: 20px;
    }
    .swiper-container-horizontal > 
    .swiper-pagination-bullets 
    .swiper-pagination-bullet {
        margin: 0 6px;
    }
</style>

<script>
  import SwiperCore, {Pagination, A11y, Autoplay } from 'swiper';

  import { Swiper, SwiperSlide } from 'swiper/vue';

  import 'swiper/swiper-bundle.css';  
  import 'swiper/swiper.scss';
  import 'swiper/components/navigation/navigation.scss';
  import 'swiper/components/pagination/pagination.scss';
  import 'swiper/components/scrollbar/scrollbar.scss';

  SwiperCore.use([Pagination, A11y, Autoplay]);

  export default {
    components: {
      Swiper,
      SwiperSlide,
      Autoplay
    },
    computed: {
      
    },
    methods: {
     
    },
  };
</script>