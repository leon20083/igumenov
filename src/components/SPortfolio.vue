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
					<!-- <a class="item" href="https://leon20083.github.io/kinoteatr/">
						<img src="../assets/img/kinoteatr.png" alt="kinoteatr" />
						<div class="item-content">
							<p>Кинотеатр на REACT</p>
						</div>
					</a>
					<a class="item" href="https://leon20083.github.io/BrandName/">
						<img src="../assets/img/brandname.png" alt="BrandName" />
						<div class="item-content">
							<p>Вёрстка по заказу на React</p>
						</div>
					</a>
					<a class="item" href="https://leon20083.github.io/bluesollar/">
						<img src="../assets/img/bluesollar.jpg" alt="Bluesollar" />
						<div class="item-content">
							<p>Строительная компания</p>
						</div>
					</a>
					<a class="item" href="https://leon20083.github.io/consultant/">
						<img src="../assets/img/consultant.jpg" alt="Consultant" />
						<div class="item-content">
							<p>Консультант</p>
						</div>
					</a>
					<a class="item" href="https://leon20083.github.io/barber/">
						<img src="../assets/img/baber.jpg" alt="Barber-shop" />
						<div class="item-content">
							<p>Барбер шоп</p>
						</div>
					</a>
					<a class="item" href="https://leon20083.github.io/meditations/">
						<img src="../assets/img/yoga.jpg" alt="Meditations" />
						<div class="item-content">
							<p>Сайт о Медитации</p>
						</div>
					</a>
					<a class="item" href="https://leon20083.github.io/Real-Estate/">
						<img src="../assets/img/002FIGMA1.png" alt="Real-Estate" />
						<div class="item-content">
							<p>Real-Estate</p>
						</div>
					</a>
					<a class="item" href="https://leon20083.github.io/MYEL-landing/">
						<img src="../assets/img/002FIGMA2.png" alt="MYEL-landing" />
						<div class="item-content">
							<p>MYEL-landing</p>
						</div>
					</a>
					<a class="item" href="https://leon20083.github.io/landing-synergy/">
						<img src="../assets/img/grayscale.png" alt="Grayscale" />
						<div class="item-content">
							<p>Вёрстка по шаблону фигма<br />сделано меню при пролистывании страницы</p>
						</div>
					</a>
					<a class="item" href="https://leon20083.github.io/synergy-project/">
						<img src="../assets/img/find-firest.png" alt="Find-firest" />
						<div class="item-content">
							<p>Вёрстка по шаблону фигма</p>
						</div>
					</a> -->
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
