export default {
    name: "Mixin",
    methods: {
        getImgUrl(pic) {
            return require("../assets/img/" + pic);
        },
    },
};
