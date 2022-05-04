const app = Vue.createApp({
    data() {
        return {
            medias : {},
            show: false,
        }
    },
    async mounted() {
        const media = await axios.get('/listing');
        this.medias = media.data.Page.media;
        this.show = true;
    },

});

app.mount('#app');
