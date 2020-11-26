<template>
    <div class="empty">
        <p>Sorry, there are no products in this {{ type }}</p>
    </div>
</template>

<script>
export default {
    props: ['type']
}
</script>

<style lang="scss" scoped>
    p {
        font-size: 20px;
    }
</style>