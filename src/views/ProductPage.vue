<template>
   <div>
       <h2 class="product__title">{{ product.title }}</h2>
       <div class="product">
           <div class="product__left">
                <swiper
                    class="product__top-slider"
                    :thumbs="{ swiper: thumbsSwiper }"
                    :slides-per-view="1"
                    :space-between="10"
                >
                  <swiper-slide v-for="img in product.images">
                        <div class="slide__container">
                            <img class="slide__img" :src="img" alt="">
                        </div>
                    </swiper-slide>
                </swiper>

                <swiper
                    class="gallery-thumbs product__bottom-slider"
                    @swiper="setThumbsSwiper"
                    :watch-slides-visibility=true
                    :watch-slides-progress=true
                    :slides-per-view="3"
                    :space-between="10"
                >
                    <swiper-slide v-for="img in product.images">
                        <div class="slide__container">
                            <img class="slide__img" :src="img" alt="">
                        </div>
                    </swiper-slide>
                </swiper>
           </div>
           <div class="product__right">
               <div class="product__right__inner">
                   <div class="product__right__top">
                       <p class="product__price">{{ product.price }} <span class="currency">uah</span></p>
                       <button class="btn-buy" @click="addToBasket">Buy</button>
                    </div>
                    <div class="product__feature">
                        <div class="product__feature-container" v-for="(value, name) in product.feature">
                            <p class="product__feature-name"> {{name}} </p>
                            <p class="product__feature-value"> {{value}} </p>
                        </div>
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
        &__title {
            font-size: 25px;
            color: rgb(87, 78, 78);
            font-weight: 700;
            margin: 10px 0 20px 0;
        }
        &__left,
        &__right {
            width: calc(50% - 10px);
            padding: 10px;
            box-shadow: 0 1px 5px rgba(8,8,8,.15);
        }
        &__price {
            font-size: 22px;
        }
        &__feature {
            margin-top: 25px;
            &-name {
                width: 40%;
                margin-right: 10px;
            }
            &-value {
                width: 60%;
            }
           &-container {
                display: flex;
                justify-content: space-between;
           }
        }
    }

    .product__right__top {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .slide__img {
        max-width: 100%;
        width: 100%;
        height: auto;
    }

    .product__top-slider {
        padding-bottom: 20px;
        text-align: center;
        & img {
            width: auto;
            max-height: 400px;
        }
    }

    .product__bottom-slider {
        text-align: center;
        & img {
            width: auto;
            max-height: 100px;
            cursor: pointer;
            vertical-align: middle;
            padding: 5px;
        }
        & .swiper-slide {
            border: 2px solid transparent;
        }
        & .swiper-slide-thumb-active {
            border-color: #a2c617;
        }
    }
    .currency {
        font-size: 12px;
        text-transform: uppercase;
    }
    .btn-buy {
        font-size: 20px;
        padding: 10px 5px;
        max-width: 200px;
        width: 100%;
        background-color: #a2c617;
        cursor: pointer;
        border: none;
        text-transform: uppercase;
        color: #fff;
        border-radius: 4px;
        outline: none;
        &:hover {
            opacity: .8;
        }
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