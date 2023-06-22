<template>
	<!-- <div class="top-menu hidden-sm hidden-xs"> -->
	<ul>
		<li v-for="item in items"><a :class="item.class" :href="item.href">{{
			item.text }}</a></li>
	</ul>
	<!-- </div> -->
</template>

<script>
export default {
	name: 'TopMenu',
	data() {
		return {
			items: [
				{
					href: "/",
					text: "Главная"
				},
				{
					href: "#about-me",
					text: "Обо мне"
				},
				{
					href: "#portfolio",
					text: "Портфолио"
				},
				{
					href: "",
					class: "show-modal-button",
					text: "Контакты",
					click: "showModal"
				},
			],
		}
	},
}
</script>

<style lang="sass" scoped>

</style>