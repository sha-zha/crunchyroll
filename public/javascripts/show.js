const app = Vue.createApp({
    data() {
        return {
            medias : {},
            show : false,
        }
    },
    async mounted() {
        let url = new URL(window.location.href);
        let paramId = url.pathname.split('/show/');

       if(Number.isInteger( Number(paramId[1])) ){
            const media = await axios.get('/showing/'+Number(paramId[1]));
            this.medias = media.data;
            this.show = true;
        }
    },

});

app.mount('#app');