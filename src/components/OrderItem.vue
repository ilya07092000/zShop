<template>
     <div class="order-item">
        <div class="d-f">
            <div class="order__img-wrapper">
                <img :src="basketItem.productImg" alt="" class="order__img">
            </div>
            <div class="order-item__info">
                <p class="order-item__title">{{ basketItem.productName }}</p>
                <div class="d-f jc-sb">
                    <p class="order-item__price">{{ basketItem.price }}</p>
                    <div class="d-f">
                        <div class="order-item__qty">
                            <input type="text" name="" id="" v-model="qty">
                            <div>
                                <button class="order-item__plus" @click="setQty('plus')"></button>
                                <button class="order-item__minus" @click="setQty('minus')"></button>
                            </div>
                        </div>
                        <div class="order-item__btn">
                            <button class="btn delete" @click="this.$store.dispatch('deleteFromBasket', {id: basketItem.id})">
                                <span class="delete__line"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            qty: this.basketItem.qty,
        }
    },
    watch: {
        qty() {
            if(this.qty <= 0) {
                this.qty = 1;
            }

           if(this.qty >= 1) {
                this.$store.dispatch('basketValue', {
                    id: this.basketItem.id,
                    qty: this.qty
                });
           }
        }
    },
    props: ['basketItem'],
    methods: {
        setQty(type) {
            if(type == 'plus') {
                this.qty++;
            } 

            if(type == 'minus') {
                this.qty--;
            }
        },
    },
}
</script>

<style lang="scss" scoped>
    .order-item {
        padding: 10px 0;
        border-bottom: 1px solid #e5e5e5;
    }
   .d-f {
        display: flex;
    }
    .order__img {
        max-width: 100px;
        height: auto;
    }
    .order__img-wrapper {
        width: 25%;
    }
    .order-item__title {
        margin-bottom: auto;
        padding-bottom: 10px;
    }
    .order-item__info {
        width: 75%;
        display: flex;
        flex-direction: column;
        padding: 0 0 25px 10px;
    }
    .jc-sb {
        justify-content: space-between;
    }
    .order-item__qty {
        display: flex;
        align-items: center;
    }
    .order-item__qty input {
        width: 30px;
        height: 30px;
        text-align: center;
    }
    .order-item__plus,
    .order-item__minus {
        display: block;
        width: 14px;
        height: 14px;
        border: none;
        background-color: transparent;
        border-left: 2px solid green;
        border-top: 2px solid green;
        cursor: pointer;
        margin: 0 15px;
        opacity: .6;
        outline: none;
        padding: 2px;
        &:hover {
            opacity: 1;
        }
    }
    .order-item__plus {
        transform: rotate(45deg);
    }
    .order-item__minus {
        display: block;
        transform: rotate(-135deg);
    }
</style>