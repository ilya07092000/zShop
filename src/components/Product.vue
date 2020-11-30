<template>
    <div class="products__item">
        <p class="products__item__title">
            <router-link :to="{name: 'product', params: { id: product.id, product: product }}" class="products__item__link">
                {{ product.title }}
            </router-link>
        </p>
        <div class="products__item__photo">
            <router-link :to="{name: 'product', params: { id: product.id, product: product }}" class="products__item__link">
                <img class="products__item__photo__icon" :src="product.images[0]" alt="">
            </router-link>
        </div>
        <p class="product__price">{{product.price}} <span class="product__currency">грн</span></p>
    </div>
</template>

<script>
export default {
    props: ['product']
}
</script>

<style lang="scss" scoped>
    .products__item {
        width: 33.333%;
        padding: 15px 10px;
        text-align: center;
        border-bottom: 1px solid #e5e5e5;
        &:not(:nth-child(3n + 0)) {
            border-right: 1px solid #e5e5e5;
        }
        &__photo {
            text-align: center;
        }
        &__photo__icon {
            max-width: 150px;
            width: 100%;
            object-fit: cover;
        }
        &__title {
            font-size: 20px;
            font-weight: 500;
        }
        &__link {
            text-decoration: none;
            color: inherit;
        }
    }
    .product__price {
        font-size: 16px;
        font-weight: 500;
    }
</style>