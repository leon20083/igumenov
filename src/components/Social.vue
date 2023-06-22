<template>
    <div v-for="icon in icons" :class="icon.class" :key="icon.src">
        <a :href="icon.href"><img :src="getImgUrl(icon.src)" :alt="icon.alt" /></a>
    </div>
</template>
<script>
export default {
    name: "Social",
    methods: {
        getImgUrl(pic) {
            return require('../assets/img/icons/' + pic);
        },
    },
    data() {
        return {
            icons: [
                {
                    class: "icon",
                    href: "https://ok.ru",
                    src: "ok.png",
                    alt: "",
                },
                {
                    class: "icon",
                    href: "https://ok.ru",
                    src: "telegram.png",
                    alt: "",
                },
                {
                    class: "icon",
                    href: "https://ok.ru",
                    src: "watsap.png",
                    alt: "",
                },
            ]
        }
    }
}
</script>
<style lang="sass"></style>