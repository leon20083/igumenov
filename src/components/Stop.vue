<template>
  <section class="top">
    <div class="head-content-left">
      <h1>
        Привет! <br />
        Я Леонид Игуменов
      </h1>
      <div class="skills">
        <p>React /&nbsp;</p>
        <p>Vue3 /&nbsp;</p>
        <p>JS</p>
      </div>
      <div class="line"></div>
      <p>Front-end разработчик</p>
    </div>
    <div class="head-content-right">
      <img src="../assets/img/i.jpg" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  name: "Stop",
};
</script>
<style lang="sass">
@import '../styles/variables'
.top
	background: url(../assets/img/mask-group.png) no-repeat center
	background-size: cover
	display: flex
	justify-content: space-between
	.head-content-left
		margin-top: 20%
		width: 60%
		margin-left: 10%
		h1
			font-family: "CircularStd-Bold", sans-serif
			font-weight: 900
			@include font(60, 30)
		.skills
			display: flex
			width: 100%
			h2
				margin: 0
				display: inline-block
				font-family: "CircularStd-Bold", sans-serif
				font-weight: 900
				color: #1A73E8
				@include font(55, 20)
				text-transform: uppercase
			p
				color: #1a73e8
		.line
			display: block
			width: 58%
			height: 3px
			background: $blue
		p
			@include font(70, 30)
			margin: 0
			color: #fff
	.head-content-right
		margin-top: 10%
		background-color: #1A73E8
		border: 10px solid #1A73E8
		border-top-left-radius: 323px 296px
		border-right: 0
		border-bottom: 0
		width: 40%
		img
			border-top-left-radius: 323px 282px
</style>
