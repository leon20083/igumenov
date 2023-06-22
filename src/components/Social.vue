<template>
    <div v-for="icon in icons" :class="icon.class" :key="icon.src">
        <a :href="icon.href"><img :src="this.getImgUrl(addUrl + icon.src)" :alt="icon.alt" /></a>
    </div>
</template>
<script>
import mixin from './mixin';
export default {
    name: "Social",
    mixins: [mixin],
    data() {
        return {
            addUrl: "icons/",
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