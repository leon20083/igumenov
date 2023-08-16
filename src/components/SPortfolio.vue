<template>
	<section id="portfolio" class="portfolio">
		<div class="container">
			<div class="row">
				<div class="s-title">
					<h2>Мои работы</h2>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="row">
				<div class="gallary">
					<PortfolioItem />
				</div>
			</div>
		</div>
		<!--  -->
	</section>
</template>
<script>
import PortfolioItem from './PortfolioItem.vue';
export default {
	name: "SPortfolio",
	components: {
		PortfolioItem,
	}
};
</script>
<style lang="sass">
@import '../styles/variables'

.portfolio
	.gallary
		margin-bottom: 70px
		text-align: center
	.item
		position: relative
		display: inline-block
		border: 3px solid $blue
		width: 30%
		height: 230px
		margin: 0 3px
		margin-bottom: 15px
		overflow: hidden
		img
			+mt(.5s)
			height: 100%
		&-content
			font-size: 25px
			width: 100%
			height: 100%
			background-color: rgba(255, 255, 255, .85)
			position: absolute
			top: 0
			left: 0
			padding-top: 20%
			opacity: 0
			+mt(.5s)
			&:hover
				opacity: 0.85
				transform: scale(.95)
				+mt(.5s)
		&:hover
			img
				transform: scale(1.1)
				+mt(.5s)
		img
			width: 98%
			margin: 3px
</style>
