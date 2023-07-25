<template>
  <section id="about-me" class="about-me">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="layer">
            <div class="layer-1"></div>
            <div class="layer-2">
              <img src="../assets/img/girl.jpg" alt="" />
            </div>
            <div class="layer-3"></div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="s1-right">
            <div class="s-title">
              <h2>Немного о себе</h2>
            </div>
            <div class="s1-right-txt">
              <p>
                Я начал обучаться html-вёрстке сайтов и... это меня затянуло:
                если сначала это было просто хобби, то дальше я хотел узнавать
                всё больше и больше. Но чем больше я узнавал, тем сильнее я
                понимал как мало я знаю и сколько всего ещё хочу узнать. Поэтому
                я постоянно продолжаю совершенствоваться в этом деле и понимаю,
                что нет предела совершенству!
              </p>

              <p>
                Верстаю и простые лендинги, и сложные сайты типа магазинов,
                корпоративных сайтов, порталов. Все мои работы адаптированы под
                любые разрешения экранов. Умею автоматизировать свою работу с
                <span>Node.js</span>, <span>npm</span>-скрипты, освоил
                <span>React</span>, <span>Vue3</span>, <span>Webрасk</span>,
                <span>Sass</span>, <span>Git</span>.Уверенно владею
                <span>Photoshop</span> и
                <span>Figma</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "About",
};
</script>
<style lang="sass">
@import ../styles/variables
.container
	width: 1170px
	margin: 0 auto
.about-me
	background: rgba(26, 115, 232, 0.05)
	.container
		.row
			display: flex
	.s-title
		margin-left: 0
		margin-right: 0
		text-align: center
		margin-top: 100px
		font-family: 'Circular Std', sans-serif
	.layer
		position: relative
		padding-top: 100px
		width: 100%
		height: 650px
		margin: 100px 0
		.layer-1
			position: absolute
			left: 0
			bottom: 0
			float: left
			max-width: 450px
			height: 560px
			background-color: $blue
			z-index: 1
		.layer-2
			max-width: 450px
			height: 560px
			position: absolute
			left: 30px
			bottom: 30px
			z-index: 3
		.layer-3
			background: url(../assets/img/layer-3.png)
			position: absolute
			top: 0
			right: 0
			width: 330px
			height: 358px
			z-index: 0
			opacity: 0.2
	.s1-right
		.s1-right-txt
			p
				padding: 30px
</style>
