<template>
    <aside>
        <p class="aside__title">Catalog</p>
        <nav>
            <ul class="nav__list">
                <li class="nav__list__item">
                    <router-link class="nav__list__link" to="/">Computers</router-link>
                </li>
                <li class="nav__list__item">
                    <router-link class="nav__list__link" to="/">PC components</router-link>
                </li>
                 <li class="nav__list__item">
                    <router-link class="nav__list__link" to="/">Monitors</router-link>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<style lang="scss" scoped>
    aside {
        width: 25%;
    }

    .aside__title {
        background-color: #a2c617;
        padding: 10px;
        font-size: 20px;
        color: #fff;
        font-weight: 700;
    }
    
    .nav__list {
        list-style-type: none;
        &__item {
            background: #484f54;
            &:not(:last-child) {
                border-bottom: 1px solid #665b5b;
            }
        }
        &__link {
            display: block;
            padding: 10px;
            text-decoration: none;
            color: #fff;
            font-size: 18px;
            font-weight: 400;
        }
    }
</style>