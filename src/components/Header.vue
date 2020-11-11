<template>
    <header>
        <div class="container">
            <div class="header__inner">
                <p class="header__logo">
                    Zshop
                </p>
                <div class="header__info">
                    <a class="header__tel" href="tel:(067) 228-13-17">(067) 228-13-17</a>
                    <p class="header__cb">Callback</p>
                    <p class="header__quality">quality department</p>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@import '../css/main';

.header__inner {
    display: flex;
    justify-content: center;
}

.header__logo {
    font-family: 'Mukta', sans-serif;
    font-size: 40px;
    letter-spacing: 0.10em;
    width: 30%;
}

.header__info {
    width: 70%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

</style>
