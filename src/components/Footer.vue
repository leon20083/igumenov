<template>
	<footer class="my-foot">
		<div class="container">
			<div class="row">
				<div class="foot-line clearfix">
					<div class="col-md-2 col-sm-6 col-xs-6">
						<div class="logo">
							<img src="../assets/img/logo2.png" alt="" />
						</div>
					</div>
					<div class="col-md-7 hidden-sm hidden-xs">
						<div class="foot-menu">
							<TopMenu />
							<!-- <ul>
								<li><a href="/">Главная</a></li>
								<li><a href="#about-me">Обо мне</a></li>
								<li><a href="#portfolio">Портфолио</a></li>
								<li><a href="/">Контакты</a></li>
							</ul> -->
						</div>
					</div>
					<div class="col-md-3 col-sm-6 col-xs-6">
						<div class="phone">
							<div class="number">
								<img src="../assets/img/icons/phone.png" alt="" />+7 (999) 927 - 46 - 33
							</div>
							<div class="icons">
								<div class="icon">
									<a href="https://ok.ru"><img src="../assets/img/icons/ok.png" alt="" /></a>
								</div>
								<div class="icon">
									<a href="https://ok.ru"><img src="../assets/img/icons/telegram.png" alt="" /></a>
								</div>
								<div class="icon">
									<a href="https://ok.ru"><img src="../assets/img/icons/watsap.png" alt="" /></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>

import TopMenu from './TopMenu.vue';

export default {
	name: "Footer",
	components: {
		TopMenu,
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
@import '../styles/variables'
.my-foot
	.foot-line
		background: $blue
		border-radius: 20px 20px 0 0
		display: flex
		align-items: center
		.foot-menu
			text-align: center
			ul
				display: flex
				justify-content: space-around
				margin: 0
				li
					padding: 30px 30px
					list-style-type: none
					a
						color: #fff 
					&:hover
						background: #fff
						+mt(.5s)
						a
							color: $blue

					a
						color: #fff
						height: 100%
		.phone
			.number
				text-align: center
				img
					max-width: 26px
					max-height: 26px
					margin-right: 10px
			.icons
				display: flex
				justify-content: center
				.icon
					background: #fff
					opacity: .5
					width: 36px
					height: 36px
					border-radius: 10em
					display: flex
					justify-content: center
					align-items: center
					margin: 10px
					&:hover
						opacity: 1
						+mt(.5s)
</style>
