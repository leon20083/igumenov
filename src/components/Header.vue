<template>
	<header class="header">
		<div class="container">
			<div class="row">
				<div class="top-line">
					<div class="col-md-2 col-sm-6 col-xs-6">
						<div class="logo">
							<img src="../assets/img/logo2.png" alt="" />
						</div>
					</div>
					<div class="col-md-7">
						<div class="top-menu hidden-sm hidden-xs">
							<TopMenu />
						</div>
					</div>
					<div class="col-md-3 col-sm-6 col-xs-6">
						<div class="phone">
							<a href="#"><img src="../assets/img/icons/phone.png" alt="" />+7 (999) 927
								- 46 - 33</a>
						</div>
						<div class="sm__menu">
							<a href="#" class="toggle-mnu hidden hidden-md"><span></span></a>
							<div class="small-menu hidden-lg hidden-md">
								<ul>
									<li><a href="#">Главная</a></li>
									<li><a href="#about-me">Обо мне</a></li>
									<li><a href="#portfolio">Портфолио</a></li>
									<li><a href="#">Контакты</a></li>
									<li class="list-item" v-for="(  item, index  ) of   items  ">{{ item.text }}</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
	<modal-window ref="modal"></modal-window>
	<Stop />
</template>

<script>
import Stop from "./Stop.vue";
import modalWindow from "./modal-window.vue";
import TopMenu from "./TopMenu.vue";
export default {
	name: "Header",
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
					class: "show-modal-button",
					text: "Контакты",
					click: "showModal"
				},
			],
		}
	},
	components: {
		Stop,
		modalWindow,
		TopMenu,
	},
	methods: {
		showModal: function () {
			this.$refs.modal.show = true
		}
	},
};


</script>

<style lang="sass">
@import '../styles/variables'

body
	font-size: 16px
	min-width: 320px
	position: relative
	line-height: 1.6
	font-family: "RobotoRegular", sans-serif
	overflow-x: hidden
	color: #fff
	@include font(18, 10)
*
	padding: 0
	margin: 0
img
	width: 100%
	height: auto
h1
	margin: 0
h2
	@include font(50,30)
	font-weight: 700
	color: $blue
	margin: 0
p
	color: #14142b
.s-title
	text-align: center
	margin: 70px
	color: $blue
a,a:hover
	text-decoration: none
.p-static
	position: static
span
	color: $blue

.header
	position: absolute
	opacity: 0.9
	left: 0
	right: 0
	.logo
		width: 181px
		height: 75px
	.top-line
		text-align: center
		background-color: #fff
		display: flex
		justify-content: center
		align-items: center
		border-bottom-left-radius: 20px
		border-bottom-right-radius: 20px
		.top-menu
			ul
				margin: 0
				li
					display: inline-block
					padding: 25px 25px
					&:hover
						background-color: $blue
						+mt(.5s)
						cursor: pointer
						a
							color: #fff
					a
						color: #14142b
		.phone
			color: #14142b
			a
				display: flex
				align-items: center
			img
				width: 26px
				height: 26px
				margin-right: 10px

.sm__menu
	display: flex
	flex-direction: column
	justify-content: space-around
	align-items: flex-end
.small-menu
	display: none
	text-align: left
	width: 85%
	ul
		background: rgba(26, 115, 230, .3)
		padding: 10px 0 0 50px
		border-top-left-radius: 30px
		li
			padding: 5px
			list-style-type: none
.toggle-mnu
	width: 35px
	height: 30px
	padding: 5px 0
	float: right
	margin: 15px 5px

.toggle-mnu span:after,
.toggle-mnu span:before
	content: ""
	position: absolute
	left: 0
	top: -9px

.toggle-mnu span:after
	top: 9px

.toggle-mnu span
	position: relative
	display: block

.toggle-mnu span,
.toggle-mnu span:after,
.toggle-mnu span:before
	width: 100%
	height: 5px
	background-color: $blue
	transition: all 0.3s
	backface-visibility: hidden
	border-radius: 2px

/* on activation */
.toggle-mnu.on span
	background-color: transparent

.toggle-mnu.on span:before
	transform: rotate(45deg) translate(5px, 5px)

.toggle-mnu.on span:after
	transform: rotate(-45deg) translate(7px, -8px)

.toggle-mnu.on + #menu
	opacity: 1
	visibility: visible

.hidden
	display: none
</style>
