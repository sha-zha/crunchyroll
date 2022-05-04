const app = Vue.createApp({
    data() {
        return {
            medias : {},
            show: false,
            page :{},
        }
    },
    async mounted() {
        const media = await axios.get('/listing');
        this.medias = media.data.Page.media;
        this.page = media.data.Page.pageInfo;
        this.show = true;
    },
    methods : {
      async setListe(pageNumber){
          const media = await axios.get('/listing/'+pageNumber);
          this.medias = media.data.Page.media;
          this.page = media.data.Page.pageInfo;
      }
    },

});

app.mount('#app');
