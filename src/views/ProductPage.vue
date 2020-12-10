<template>
   <div>
       <h2>{{ product.title }}</h2>
       <p>{{ product }}</p>
       <div class="product">
           <div class="product__left">
                <swiper
                    :thumbs="{ swiper: thumbsSwiper }"
                    :slides-per-view="1"
                    :space-between="10"
                    :loop=true
                >
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

                <swiper
                    class="gallery-thumbs"
                    @swiper="setThumbsSwiper"
                    :watch-slides-visibility=true
                    :watch-slides-progress=true
                    :slides-per-view="3"
                    :space-between="10"
                    :loop=true
                >
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
           <div class="product__right">
               <div class="product__right__inner">
                   <div class="product__right__top">
                       <p class="product__price">{{ product.price }} uah</p>
                       <button class="btn-buy" @click="addToBasket">Buy</button>
                    </div>
               </div>
           </div>
       </div>
   </div>
</template>

<style lang="scss" scoped>
    .product {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        &__left,
        &__right {
            width: calc(50% - 10px);
            padding: 10px;
            box-shadow: 0 1px 5px rgba(8,8,8,.15);
        }
    }

    .product__right__top {
        display: flex;
        justify-content: space-between;
    }

    .slide__img {
        max-width: 100%;
        width: 100%;
        height: auto;
    }
</style>

<script>
    import SwiperCore, { Thumbs } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    SwiperCore.use([Thumbs]);

    import 'swiper/swiper-bundle.css';  
    import 'swiper/swiper.scss';
    import 'swiper/components/navigation/navigation.scss';
    import 'swiper/components/pagination/pagination.scss';
    import 'swiper/components/scrollbar/scrollbar.scss';

export default {
    data() {
        return {
            thumbsSwiper: null,
        };
    },
    methods: {
        setThumbsSwiper(swiper) {
            this.thumbsSwiper = swiper;
        },
        addToBasket() {
            this.$store.dispatch('addProduct', {
                id: this.product.id,
                price: this.product.price,
                qty: 1,
                productLink: this.$route.path,
                productImg: this.product.images[0],
                productName: this.product.title,
            });
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    computed: {
       product() {
            let catgeory = this.$store.getters.getProductsByCat(this.$route.params.product);
            return catgeory.find(p => p.id == this.$route.params.id);
       }
   }
}
</script>