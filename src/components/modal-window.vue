<template>
    <div v-if="show" class="modal-shadow" @click.self="closeModal">
        <div class="modal">
            <div class="modal-close" @click="closeModal">&#10006;</div>
            <slot name="title">
                <h3 class="modal-title">Контакты</h3>
            </slot>
            <slot name="body">
                <div class="modal-content">
                    <span>Номер телефона для связи</span>
                    <strong>8 (999)-927-46-33</strong>
                    <hr>
                    <span>E-mail</span>
                    <strong>leon20083@mail.ru</strong>

                </div>
            </slot>
            <slot name="footer">
                <div class="modal-footer">
                    <button class="modal-footer__button" @click="closeModal">
                        Ок
                    </button>
                </div>
            </slot>
        </div>
    </div>
</template>
 
<script>
export default {
    name: "ModalWindow",
    data: function () {
        return {
            show: false
        }
    },
    methods: {
        closeModal: function () {
            this.show = false
        }
    }
}
</script>
 
<style scoped lang="sass">
@import ../styles/variables.sass

.modal-shadow 
    position: absolute
    top: 0
    left: 0
    min-height: 100%
    width: 100%
    background: rgba(0, 0, 0, 0.7)


.modal 
    display: block
    background: #fff
    border-radius: 8px
    padding: 15px
    min-width: 420px
    max-width: 480px
    height: 300px
    position: absolute
    top: 10%
    left: 50%
    transform: translate(-50%, -50%)
    text-align: center
    +mt(.5s)

    &-close 
        border-radius: 50%
        color: #fff
        background: #2a4cc7
        display: flex
        align-items: center
        justify-content: center
        position: absolute
        top: 7px
        right: 7px
        width: 30px
        height: 30px
        cursor: pointer
    

    &-title 
        color: #0971c7
        margin-bottom: 20px

    &-content 
        margin-bottom: 20px
        color: #000
        padding: 25px
        h4
            padding-top: 10px
        strong
            color: $blue
            font-size: 20px
        span
            color: #121261
            font-size: 17px

    &-footer 
        &__button 
            background-color: #0971c7
            color: #fff
            border: none
            text-align: center
            padding: 8px
            font-size: 17px
            font-weight: 500
            border-radius: 8px
            min-width: 150px
        
    

</style>