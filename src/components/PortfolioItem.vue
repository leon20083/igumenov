<template>
    <a v-for="galaryItem in galaryItems" :key="galaryItem.src" :class="galaryItem.class" :href="galaryItem.href">
        <img :src="getImgUrl(galaryItem.src)" />
        <div :class="galaryItem.dClass">
            <p>{{ galaryItem.text }}</p>
        </div>
    </a>
</template>
<script>
export default {
    name: "PortfolioItem",
    methods: {
        getImgUrl(pic) {
            return require('../assets/img/' + pic);
        },
    },
    data() {
        return {
            galaryItems: [
                {
                    id: 1,
                    class: "item",
                    href: "https://leon20083.github.io/kinoteatr/",
                    src: "kinoteatr.png",
                    dClass: "item-content",
                    text: "Кинотеатр на REACT",
                },
                {
                    id: 2,
                    class: "item",
                    href: "https://leon20083.github.io/BrandName/",
                    src: "brandname.png",
                    dClass: "item-content",
                    text: "Вёрстка по заказу на React",
                },
                {
                    id: 3,
                    class: "item",
                    href: "https://leon20083.github.io/bluesollar/",
                    src: "bluesollar.jpg",
                    dClass: "item-content",
                    text: "Строительная компания",
                },
                {
                    id: 4,
                    class: "item",
                    href: "https://leon20083.github.io/consultant/",
                    src: "consultant.jpg",
                    dClass: "item-content",
                    text: "Консультант",
                },
                {
                    id: 5,
                    class: "item",
                    href: "https://leon20083.github.io/barber/",
                    src: "baber.jpg",
                    dClass: "item-content",
                    text: "Барбер шоп",
                },
                {
                    id: 6,
                    class: "item",
                    href: "https://leon20083.github.io/meditations/",
                    src: "yoga.jpg",
                    dClass: "item-content",
                    text: "Сайт о Медитации",
                },
                {
                    id: 7,
                    class: "item",
                    href: "https://leon20083.github.io/Real-Estate/",
                    src: "002FIGMA1.png",
                    dClass: "item-content",
                    text: "Real-Estate",
                },
                {
                    id: 8,
                    class: "item",
                    href: "https://leon20083.github.io/MYEL-landing/",
                    src: "002FIGMA2.png",
                    dClass: "item-content",
                    text: "MYEL-landing",
                },
                {
                    id: 9,
                    class: "item",
                    href: "https://leon20083.github.io/landing-synergy/",
                    src: "grayscale.png",
                    dClass: "item-content",
                    text: "Вёрстка по шаблону фигма сделано меню при пролистывании страницы",
                },
                {
                    id: 10,
                    class: "item",
                    href: "https://leon20083.github.io/synergy-project/",
                    src: "find-firest.png",
                    dClass: "item-content",
                    text: "Вёрстка по шаблону фигма",
                },

            ]
        }
    }
}
</script>
<style lang="sass">

</style>