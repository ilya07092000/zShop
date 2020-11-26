<template>
    <aside>
        <p class="aside__title">Catalog</p>
        <nav>
            <ul class="nav__list">
                <MenuItem v-for="(value, key, index) in products" :product="value" :meuItem="key"></MenuItem>
            </ul>
        </nav>
    </aside>
</template>

<script>
import MenuItem from './MenuItem';

export default {
    data() {
        return {
            menuCounter: 0,
        }
    },
    computed: {
        products() {
            return this.$store.getters.products;
        }
    },
    components: {
        MenuItem
    },
     methods: {
        extendedContent(event) {
            let btn = event.target.dataset.hover;

            if(!btn) return;

            if(btn.trim()) { // MENU WITH NESTING " data-hover= btn "
                this.closeDueToIndex();

                let extContent = document.querySelector(btn);
                extContent.classList.add('show');
            } 

            if(!btn.trim()) { // MENU WITHOUT NESTING " data-hover=" " "
                this.closeDueToIndex();
            }
        },        
        closeContent() {
            let showed = [...document.querySelectorAll('.show')];
            if(showed) {
                showed.forEach(item => {
                    item.classList.remove('show');
                })
            }
        },
        closeDueToIndex() {
            let showed = [...document.querySelectorAll('.show')]; // FIND ARRAY OF SHOWED EXTENDED MENU
            let current = event.target.closest('.nav__list__item__extended'); // FIND ON WHICH MENU WE ARE
            let currentIndex = showed.findIndex(item => item == current); // FILTER ARRAY TO PREVENT CLOSING MENU ON WHICH WE ARE
            
            if(showed) {
                showed.forEach((item, index) => {
                    if(index > currentIndex) { // PREVENT CLOSING PREVIOUS MENU
                        item.classList.remove('show');
                    }
                })                 
            }
        }
    },
    mounted() {
        let menu = document.querySelector('.nav__list');
        menu.addEventListener('mouseover', this.extendedContent);
        menu.addEventListener('mouseleave', this.closeContent);
    },
    beforeDestroy() {
        menu.removeEventListener('mouseover', this.extendedContent);
        menu.removeEventListener('mouseleave ', this.closeContent);
    }
}
</script>

<style lang="scss" scoped>
    aside {
        width: 20%;
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
        position: relative;
    }
</style>