<template>
    <div class="result">
        <div class="result__inner">
            Request has been sent
        </div>
    </div>
</template>

<style lang="scss" scoped>   
    .result {
        max-width: 1200px;
        width: 100%;
        padding: 0 15px;
        position: absolute;
        top: 0px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 999999;
        &__inner {
            background-color: #55d844;
            border-radius: 4px;
            text-align: center;
            font-size: 20px;
            padding: 10px 5px;
            color: #fff;
        }
    }
</style>